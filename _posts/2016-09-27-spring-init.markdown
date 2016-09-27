---
layout: post
title:  "spring 初始化配置总结"
date:  2016-09-27 15:50:00 +0800
categories: spring
tags: spring
keywords: spring,web1992
---

> `spring` `初始化配置` 总结
> 
> 最近在使用`spring mvc` 进行web项目的开发
> 
> 以前只是会用，这次对使用中`疑惑的地方`进行下总结

<!--more-->

1 `DispatcherServlet` 与 `ContextLoaderListener`
---

参考的文章：

[参考1](http://blog.csdn.net/agileclipse/article/details/9014683)

[参考2](http://www.cnblogs.com/JesseV/archive/2009/11/17/1605015.html)

[参考3](http://www.cnblogs.com/hellojava/archive/2012/12/26/2833840.html)

[参考4](http://tianweili.github.io/blog/2015/01/26/java-filter/)


从两个方面分析：
 >1:类的继承关系
 >
 >2:容器的加载

DispatcherServlet 类的继承关系

> 实线的箭头是继承`extends`，虚线的箭头是类的实现`implements`

![](http://i.imgur.com/h3o9bYP.jpg)


ContextLoaderListener 类的继承关系

![](http://i.imgur.com/0mWshgN.jpg)


