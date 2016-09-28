---
layout: post
title:  "spring mvc  DispatcherServlet ContextLoaderListener"
date:  2016-09-27 15:50:00 +0800
categories: spring
tags: spring
keywords: spring,web1992,spring mvc
---

> `spring mvc` `DispatcherServlet` `ContextLoaderListener` 以及`Filter` 总结
> 
> 最近在使用`spring mvc` 进行web项目的开发
> 
> 以前只是会用，这次对使用中`疑惑的地方`进行下总结

<!--more-->

>`DispatcherServlet`的作用：

>在 `DispatcherServlet javadoc` 中有这句话

	Central dispatcher for HTTP request handlers/controllers, e.g. for web UI controllers or HTTP-based remote service
	exporters. Dispatches to registered handlers for processing a web request, providing convenient mapping and exception
	handling facilities.

	Central dispatcher // DispatcherServlet是一个调度中心，主要处理http请求，url映射，异常处理等
	

> DispatcherServlet 的初始化：

> DispatcherServlet 是一个`servlet` 继承了我们熟悉的 `HttpServlet`
> 它的初始化时在web容器创建时进行的，如果配置了 Filter，可以看到如下日志

	[INFO] Initializing log4j from [D:\github\javas\java_note\app_assembly\target\assembly_app_war\webapp\WEB-INF\log4j.xml]
	[INFO] Initializing Spring root WebApplicationContext
	Root WebApplicationContext: initialization started // WebApplicationContext初始化开始
	// ...
	Root WebApplicationContext: initialization completed in 844 ms // WebApplicationContext初始化结束
	// ... 
	DemoFilter init // 初始化基于servlet规范的过滤器
	DemoFilter2 init // 初始化基于servlet规范的过滤器
    [INFO] Initializing Spring FrameworkServlet 'dispatcherServlet' // 初始化dispatcherServlet
	// ...
	[INFO] Started Jetty Server
	
	1,先初始化 log4j
	2,再初始化 WebApplicationContext
	3,初始化 Filter 基于Servlet 规范的过滤器
	4,初始化 dispatcherServlet 
	5,web 容器启动完成

> DispatcherServlet 的配置：

		<servlet>
	        <servlet-name>dispatcherServlet</servlet-name>
	        <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
	        <init-param>
	            <param-name>contextConfigLocation</param-name>
	            <param-value>classpath:META-INF/spring/servlet-context.xml</param-value>
	        </init-param>
	        <load-on-startup>1</load-on-startup>
	    </servlet>
	    <servlet-mapping>
	        <servlet-name>dispatcherServlet</servlet-name>
	        <url-pattern>/</url-pattern>
	    </servlet-mapping>

		

> a,在web.xml 使用 `servlet`标签 进行配置

> b, `DispatcherServlet` 告诉spring 配置文件的位置
> servlet-context.xml 配置文件配置spring mcv,拦截器`HandlerInterceptor`等 

> DispatcherServlet 类的继承关系:
>
> 实线的箭头是继承`extends`，虚线的箭头是类的实现`implements`

![](http://i.imgur.com/h3o9bYP.jpg)



> ContextLoaderListener 配置：

	<!-- spring 配置文件 -->
	<context-param>
		<param-name>contextConfigLocation</param-name>
		<param-value>
			classpath:META-INF/spring/servlet-context.xml,
			classpath:META-INF/spring/spring-context.xml,
		</param-value>
	</context-param>
	<listener>
		<listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>
	</listener>


> `ContextLoaderListener`只是一个对外暴露的实现类，
> 具体的实现是在 `ContextLoader` 中
> `ContextLoader` 使用 默认的 `XmlWebApplicationContext` 加载Bean
> `ContextLoader.properties` 配置了默认的 bean 加载类
>
> org.springframework.web.context.WebApplicationContext=org.springframework.web.context.support.XmlWebApplicationContext


> ContextLoaderListener 类的继承关系

![](http://i.imgur.com/0mWshgN.jpg)



参考的文章：

[参考1](http://blog.csdn.net/agileclipse/article/details/9014683)

[参考2](http://www.cnblogs.com/JesseV/archive/2009/11/17/1605015.html)

[参考3](http://www.cnblogs.com/hellojava/archive/2012/12/26/2833840.html)

[参考4-filter](http://tianweili.github.io/blog/2015/01/26/java-filter/)



