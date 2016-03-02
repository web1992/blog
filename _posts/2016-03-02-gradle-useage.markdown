---
layout: post
title:  "gradle useage memo"
date:  2016-03-02 17:25:00 +0800
categories: gradle
tags: gradle
keywords: gradle,web1992
---

###  `gradle` useage memo (gradle用法备忘)

<!--more-->
1，安装
	略。
	
2，使用心得

{% highlight sh %}
	# 启用 gradle 后台进程，这样在本机进行开发时，进行build 时的速度提高（节省时间）
	touch ~/.gradle/gradle.properties && echo "org.gradle.daemon=true" >> ~/.gradle/gradle.properties
	
{% endhighlight %}


3， 列出项目使用的jar包
{% highlight groovy %}
	task listJars << {
		configurations.compile.each { File file -> println file.name }
	}
	
{% endhighlight %}

	gradle -q listJars
	


