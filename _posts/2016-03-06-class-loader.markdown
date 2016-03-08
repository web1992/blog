---
layout: post
title:  "java classloader"
date:  2016-03-06 22:40:00 +0800
categories: java
tags: java
keywords: java,web1992
---


> java中类加载器的使用
>

[1,类加载器](#1)

[2,类加载器的层次结构](#2)

[3,编写自己的类加载器](#3)

###1 类加载器

- 引导类加载器 bootstrap
- 扩展类加载器 extension
- 应用程序类加载器（系统类加载器）System
- plugin 类加载器

<!--more-->

###2 类加载器的层次结构
![](http://i.imgur.com/l2Qgtuz.png)

###3 编写自己的类加载器


###4 知识准备Method.invoke 使用例子


	{% highlight java %}
		package com.web.clazz;

		import java.lang.reflect.Method;

		/**
		 * Created by erbao.wang on 2016/3/8.
		 *
		 * @desc
		 */
		public class ClazzMain {


			public static void main(String[] args) throws Exception {

				ClassLoader myClassLoader = Thread.currentThread().getContextClassLoader();

				Class clazz = myClassLoader.loadClass("com.web.clazz.Demo");
				Object obj = clazz.newInstance();

				// doSomeThing 方法是公用的，非静态方法，需要实例去调用
				Method methodDoSomeThing = clazz.getMethod("doSomeThing", null);

				//实例方法,需要类的实例对象，第一个参数不能为空
				methodDoSomeThing.invoke(obj, null);


				Method methodMain = clazz.getMethod("main", new Class[]{String[].class});
				// 静态方法,不需要类的实例对象，第一个参数可为空
				methodMain.invoke((Object) null, (Object) null);

			}
		}


		class Demo {

			public static void main(String[] args) {
				System.out.println("main...");
			}


			public void doSomeThing() {
				System.out.println("doSomeThing...");
			}
		}	
	{% endhighlight %}
	
>输出结果
>

	doSomeThing...
	main...
