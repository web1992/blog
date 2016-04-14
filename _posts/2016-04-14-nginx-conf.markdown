---
layout: post
title:  "nginx常用配置"
date:  2016-04-14 13:49:00 +0800
categories: nginx
tags: nginx
keywords: nginx,web1992
---

####nginx常用配置

<!--more-->

> 负载+反向代理
>

	{% highlight sh %}
			
	upstream www.web1992.cn
    {
                #server 127.0.0.1:8081 max_fails=3;
                server 127.0.0.1:4000 max_fails=3;
    }	

	server {
	  listen 80;
	  server_name www.web1992.cn;
	  
	  location / {
	    
		proxy_pass       http://www.web1992.cn;
		proxy_set_header Host $host;
		proxy_set_header Upgrade $http_upgrade;
		proxy_set_header Connection "upgrade";
		
		proxy_set_header X-Real-IP $remote_addr;
		proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	  	}

	}

	{% endhighlight %}

>nginx 处理静态资源
>
	
	{% highlight sh %}
	server
	{
		listen 80;
		server_name gradle.web1992.cn;
		index userguide.html;
		root /usr/local/gradle/docs/userguide/;
	}
	#server块的最后部分是location指令块，对于client的不同请求目标，
	#location是用来配置服务器的不同响应。
	#就像server_name指令配置nginx处理请求使用包含在请求中的信息一样
	#location指令配置如何响应不同位置资源的请求
	server
	{
		listen 80;
		server_name  groovy.web1992.cn
		index index.html;
		root /data/www/groovy-2.4.6/html/documentation/;
	}
	{% endhighlight %}