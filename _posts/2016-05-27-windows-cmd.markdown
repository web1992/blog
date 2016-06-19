---
layout: post
title:  "windows 常用命令"
date:  2016-05-27 10:15:00 +0800
categories: windows
tags: windows
keywords: windows,web1992
---

windows 常用命令

<!--more-->

	{% highlight bat %}

	netstat -ano  |findstr 3306
		
	tasklist
	tasklist |findstr mysql
		
	taskkill /T /F /PID 6376
	## /T 所有子进程
	## /F 强制杀
	{% endhighlight %}
