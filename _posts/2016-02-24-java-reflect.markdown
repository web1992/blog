---
layout: post
title:  "java reflect"
date:  2016-02-24 19:08:00 +0800
categories: java
tags: java
keywords: java,web1992
---

### java 反射例子
> 一个java反射使用例子，备忘
> 
> 使用反射改变对象私有变量的值

<!--more-->
	
	{% highlight java %}
	
	import java.lang.reflect.Field;
	
	/**
	 * @desc java 反射demo
	 */
	public class ReflectDemo {
	
	    private String code = "1";
	
	    public static void main(String[] args) throws NoSuchFieldException, IllegalAccessException {
	
	        ReflectDemo demo = new ReflectDemo();
	
	        System.out.println("before value=" + demo.code);
	
	        Field field = demo.getClass().getDeclaredField("code");
	        // 设置变量可访问
	        field.setAccessible(true);
	        // 修改变量的值
	        field.set(demo, "2");
	
	        System.out.println("after value=" + demo.code);
	    }
	}
	
	   
	{% endhighlight %}
