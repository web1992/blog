---
layout: post
title:  "java jstack dump log 分析"
date:  2016-12-16 15:20:00 +0800
categories: java
tags: java
keywords: java,web1992
---

java jstack dump log 分析记录



**问题描述**


在一次开发中，出现了前端调用http接口无法响应的问题

（重启可以解决现在的问题，但是在运行一段时间之后，此接口依然会失去响应，产生假死的现象）

其他接口都可以正常的调用，除了这个接口（这里称这个接口叫做A接口）


**排除死循环 **


根据经验分析`有可能是A接口代码死循环导致的`（查询代码流，排除此项可能）

**排除死锁**


代码业务简单，没有用到锁相关的技术（排除此项可能）

**redis**


分析此接口A与其他代码的不同的地方，就是用了`redis` 缓存，此时依然不知道`redis`哪里出了问题

暂时定位问题在`redis`,继续跟踪`redis`哪里出现了问题

<!-- more -->


接下来就需要分析java进程中，线程的状态了。不然很难确定问题所在

**使用`jstack` 命令**

	{% highlight sh %}
	jstack -l 9532>java_thread_dump.log

	#9532 为java进程的ID
	{% endhighlight %}

[jstack命令用法](http://www.cnblogs.com/nexiyi/p/java_thread_jstack.html)

此命令可以打印出`9532`进程中，所有的线程的状态,日志文件在这里可以找到: [jstack的日志](https://web1992.cn/blog/assets/java_thread_dump.log "日志")

>项目采用spring mvc 作为控制层，http 的入口都是 Controller，所以我先统计下Controller在 jstack dump日志中出现的次数


	cat java_thread_dump.log |grep Controller |uniq -c

出现以下结果：

	40 	at com.ejavashop.web.rest.order.controller.OrderRestController.submitOrder(OrderRestController.java:138)

可以看到这个控制器出现了40次！！！！激动啊，问题所在点马上知道了



		{% highlight java %}
		- parking to wait for  <0x0000000088b715a8> (a java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject)
		at java.util.concurrent.locks.LockSupport.park(LockSupport.java:175)
		at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await(AbstractQueuedSynchronizer.java:2039)
		at org.apache.commons.pool2.impl.LinkedBlockingDeque.takeFirst(LinkedBlockingDeque.java:524)
		at org.apache.commons.pool2.impl.GenericObjectPool.borrowObject(GenericObjectPool.java:438)
		at org.apache.commons.pool2.impl.GenericObjectPool.borrowObject(GenericObjectPool.java:361)
		at redis.clients.util.Pool.getResource(Pool.java:49)
		at org.near.jedisx.pool.ShardedJedisSentinelPool.getResource(ShardedJedisSentinelPool.java:131)
		at com.ejavashop.model.order.OrdersModel.getOrderSn(OrdersModel.java:2511)
		at com.ejavashop.model.order.OrdersModel.saveOrderInfo(OrdersModel.java:1438)
		at com.ejavashop.model.order.OrdersModel.orderCommit(OrdersModel.java:1092)
		at com.ejavashop.service.impl.order.OrdersServiceImpl.orderCommitRest(OrdersServiceImpl.java:330)
		at com.biz.shard.manager.order.impl.OrderManagerImpl.submitOrder(OrderManagerImpl.java:348)
		at com.ejavashop.web.rest.order.controller.OrderRestController.submitOrder(OrderRestController.java:138)
		{% endhighlight %}


继续追踪堆栈信息,发现了这一行代码

	at org.apache.commons.pool2.impl.LinkedBlockingDeque.takeFirst(LinkedBlockingDeque.java:524)


分析这个等待的线程

	cat java_thread_dump.log |grep "0x0000000088b715a8" |uniq -c

结果:

	40 	- parking to wait for  <0x0000000088b715a8> (a java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject)


`LinkedBlockingDeque`  队列，阻塞队列！！！，很有可能是这个队列一直在阻塞，等待获取资源

回头继续查看代码，原来`redis`资源用了阻塞队列，把资源放在`队列`中进行获取资源，如果资源获取不到，就一直阻塞到有资源为止

>(redis在项目里面作为缓存使用，基于j-redis 开发的java API)

继续思考队列中的资源去哪里了，分析代码之后，redis的资源在take 之后，需要手动的把资源放回队列中，不然使用过之后的资源无法回收

新的线程也无法从队列中获取新的资源，导致新来的线程一直阻塞

**问题最终确定！！！**

解决问题
-----

分析代码redis的资源释放回收，是通过close 进行释放的，在应用代码中，没有调用close方法，导致此问题的发生。

在代码中调用 close 方法即可.


小结
---

- 1 问题的的解决，仅仅添加了一行代码，而问题的查找过程确是十分的复杂的
- 问题现象>问题log> 代码+log >确定问题>解决问题
- 2 项目没有使用文档，都是复制别人的代码，在复制别人的代码，遗漏了close 方法(认真啊)
- 3 java中的资源大多数都需要自动关闭的，例如：IO流,数据库连接，stock连接等等，后续使用需要注意
 




