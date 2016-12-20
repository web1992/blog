---
layout: post
title:  "java Condition"
date:  2016-12-20 15:20:00 +0800
categories: java
tags: java
keywords: java,web1992
---


java 1.5 新的线程模型 `Condition` 类分析
---

<!--more-->

**java的线程编程模型**

> 线程编程模型的解释：java 提供了一些API 和关键字，提供给编程人员进行多线程代码的编写

- java1.5 之前

    java1.5 之前java的线程编程模型可以理解为 `synchronized` + `Object` 
    
    `synchronized` 提供锁的编程机制
    
    `Object` 提供线程之间的通信（线程的挂起，唤醒 wait, notify and notifyAll）

- java1.5之后

    java1.5之后java的线程模型改成了`Lock` + `Condition`
    
    `Lock` 提供锁的编程机制
    
    `Condition` 提供线程直接的通信机制（线程的挂起，唤醒）

**Condition 文档描述**

```
Condition factors out the Object monitor methods (wait, notify and notifyAll) 
into distinct objects to give the effect of having multiple wait-sets per object, 
by combining them with the use of arbitrary Lock implementations. 
Where a Lock replaces the use of synchronized methods and statements, 
a Condition replaces the use of the Object monitor methods. 

```

**Condition API解释**


`Condition` 提供了，类似Object对象的 (wait, notify and notifyAll) 方法，实现线程的挂起和唤醒

可以通过 Lock()#newCondition() 获取这个实例


Condition 用法实例（类似 ArrayBlockingQueue）

    As an example, suppose we have a bounded buffer which supports put and take methods. 
    If a take is attempted on an empty buffer, then the thread will block until an item becomes available; 
    if a put is attempted on a full buffer, then the thread will block until a space becomes available. 
    We would like to keep waiting put threads and take threads in separate wait-sets so that we can use the 
    optimization of only notifying a single thread at a time when items or spaces become available in the buffer. 
    This can be achieved using two Condition instances. 

```java

	class BoundedBuffer {
	   final Lock lock = new ReentrantLock();
	   final Condition notFull  = lock.newCondition(); 
	   final Condition notEmpty = lock.newCondition(); 
	
	   final Object[] items = new Object[100];
	   int putptr, takeptr, count;
	
	   public void put(Object x) throws InterruptedException {
	     lock.lock();
	     try {
	       while (count == items.length)
	         notFull.await();
	       items[putptr] = x;
	       if (++putptr == items.length) putptr = 0;
	       ++count;
	       notEmpty.signal();
	     } finally {
	       lock.unlock();
	     }
	   }
	
	   public Object take() throws InterruptedException {
	     lock.lock();
	     try {
	       while (count == 0)
	         notEmpty.await();
	       Object x = items[takeptr];
	       if (++takeptr == items.length) takeptr = 0;
	       --count;
	       notFull.signal();
	       return x;
	     } finally {
	       lock.unlock();
	     }
	   }
	 }

```









