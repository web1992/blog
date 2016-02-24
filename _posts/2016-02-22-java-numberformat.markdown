---
layout: post
title:  "java NumberFormat"
date:  2016-02-22 18:40:00 +0800
categories: java
tags: java
keywords: java,web1992
---

> java 中处理小数技巧备忘
>
> NumberFormat 函数方便的处理小数
>
> 位于 java.text 包下的工具类
>
{% highlight java %}
NumberFormat num = NumberFormat.getPercentInstance();
num.setMaximumIntegerDigits(3);//  整数部分
num.setMaximumFractionDigits(2); // 小数部分
// 格式化
String rate=num.format( 2.0f );
{% endhighlight %}
