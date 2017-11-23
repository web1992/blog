---
layout: post
title:  "Checked vs Unchecked Exceptions in Java"
date:  2017-11-23 13:00:00 +0800
categories: java,Exceptions
tags: java,Exceptions
keywords: java,web1992,Exceptions
---

# Checked vs Unchecked Exceptions in Java

异常继承图：

![](/blog_imasges/java-exception.png)

文章链接:

- [Link](http://www.geeksforgeeks.org/checked-vs-unchecked-exceptions-in-java/)
- [Link](https://docs.oracle.com/javase/tutorial/essential/exceptions/runtime.html)

使用`未检查异常`还是`已检查异常`

> If a client can reasonably be expected to recover from an exception, make it a checked exception. If a client cannot do anything to recover from the exception, make it an unchecked exception

常见的异常：

- NullPointerException

![](/blog_imasges/null-point-excepiton.png)

- IOException

![](/blog_imasges/io-exception.png)