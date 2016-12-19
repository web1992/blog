---
layout: post
title:  "tomcat 配置"
date:  2016-06-26 15:50:00 +0800
categories: tomcat
tags: tomcat
keywords: tomcat,web1992
---

tomcat conf/server.xml 配置demo

<!--more-->


可以在 <Host> 添加多个Context，配置多个服务


```xml
	
	<Context path="/app1" docBase="/data/www/app1.war" />
	<Context path="/app2" docBase="/data/www/app2.war" />
	{% endhighlight %}
```

> 可以通过 

> http://127.0.0.1:8080/app1

> http://127.0.0.1:8080/app2

> 进行访问

