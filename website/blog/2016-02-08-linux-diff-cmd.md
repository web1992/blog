---
layout: post
title:  "linux diff 命令"
date:  2016-02-08 21:05:00 +0800
categories: linux
tags: linux
keywords: linux,web1992
---

# linux `diff`

## man diff 的文档帮助说明:

diff - compare files line by line (按照行来比较文件的不同)

<!--truncate-->

常用的参数

a.txt

    q
    bb
    c

b.txt

    a
    b
    c

## diff -y

使用左右对比方式来对比文件的不同

```sh
diff -y a.txt b.txt
```

![](http://i.imgur.com/tPXb0yW.png)

```sh
diff -c a.txt b.txt
```

![](http://i.imgur.com/B3egYvf.png)
