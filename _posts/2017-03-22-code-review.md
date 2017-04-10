---
layout: post
title:  "工程checkList"
date:  2017-03-22 09:20:00 +0800
categories: project
tags: project
keywords: project,web1992
---


工程设计

<!--more-->

checkList
===

- 1 业务的主流

- 2 如果流程有变化，看新老业务是否符合需求，以及改动点

- 3 BD create_at update_at 排它编码

- 4 文件流关闭

- 5 读取文件比较大的时候，进行分页读取，而不是一次性把数据都读取到内存中

- 6 完善的junit 测试

- 7 日志打印规则 info error,打印合理的日志

- 8 请求，响应 主键关联

- 9 DB数据字段，长度不要过长，禁止过短，导致数据丢失

- 10 http 链接超时，读超时，的设置
