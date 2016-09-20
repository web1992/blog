---
layout: post
title:  "linux curl 命令"
date:  2016-09-20 11:29:00 +0800
categories: linux
tags: linux
keywords: linux,web1992,curl
---

> `linux` `curl` 命令总结
>

<!--more-->

> 参考的教程

- [[教程1]](http://ju.outofmemory.cn/entry/84875)
- [[教程2]](http://www.cnblogs.com/wangkangluo1/archive/2012/04/17/2453975.html)
- [[教程3]](http://www.ruanyifeng.com/blog/2011/09/curl.html)


> curl命令：

    curl -i  -d "{key:"123"}" -H "Content-Type: application/json"  "http://127.0.0.1:8081/api/example/"


> 输出：
	
	HTTP/1.1 200 OK
	Server: Apache-Coyote/1.1
	Content-Type: application/json;charset=UTF-8
	Transfer-Encoding: chunked
	Date: Tue, 20 Sep 2016 03:28:14 GMT
	
	{"info":"","success":true}


> 参数含义：

`-i` 显示请求的详细信息

`-d` 请求的参数

`-H` 发送http请求头`header`的格式，默认格式是 `text/html`


`-I`参数则是只显示http response的头信息。

	curl -I www.web1992.cn       
                                                                                                                      
	HTTP/1.1 301 Moved Permanently
	Server: nginx/1.10.1
	Date: Tue, 20 Sep 2016 03:31:07 GMT
	Content-Type: text/html
	Content-Length: 185
	Connection: keep-alive




	




 
