---
layout: post
title:  "linux curl 命令"
date:  2016-09-20 11:29:00 +0800
categories: linux
tags: linux
keywords: linux,web1992,curl
---

## `linux` `curl` 命令总结

<!--truncate-->

最近在调试`http`接口时，需要自己模拟数据请求接口，由于接口的`请求参数格式`和`返回值格式`都是`json`

这次尝试使用`curl`发送 head 为 json 格式的请求，下面是学习备注：

> 提供一个发送 http 请求的 chrome 插件 [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?utm_source=chrome-app-launcher-info-dialog)

![](https://i.imgur.com/I8g9doo.jpg)

## 参考的教程

- [[教程 1]](http://ju.outofmemory.cn/entry/84875)
- [[教程 2]](http://www.cnblogs.com/wangkangluo1/archive/2012/04/17/2453975.html)
- [[教程 3]](http://www.ruanyifeng.com/blog/2011/09/curl.html)

## curl 命令：

```sh
    curl -i  -d "{key:"123"}" -H "Content-Type: application/json"  "http://127.0.0.1:8081/api/example/"
```

> 输出：

```sh
	HTTP/1.1 200 OK
	Server: Apache-Coyote/1.1
	Content-Type: application/json;charset=UTF-8
	Transfer-Encoding: chunked
	Date: Tue, 20 Sep 2016 03:28:14 GMT

	{"info":"","success":true}
```

## 参数含义

`-i` 显示请求的详细信息

`-d` 请求的参数

`-H` 发送 http 请求头`header`的格式，默认格式是 `text/html`

`-I`参数则是只显示 http response 的头信息。

```sh
	curl -I www.web1992.cn

	HTTP/1.1 301 Moved Permanently
	Server: nginx/1.10.1
	Date: Tue, 20 Sep 2016 03:31:07 GMT
	Content-Type: text/html
	Content-Length: 185
	Connection: keep-alive
```
