---
layout: post
title:  "java7-try-resource"
date:  2016-12-14 15:20:00 +0800
categories: java
tags: java
keywords: java,web1992
---

java7-try-resource
---

java7中新增了 try-resource 自动关闭资源的新特性

在这里分析下,此特性的实现原理.

有一个前提条件该类必须实现 `AutoCloseable` 接口的close方法

<!--more-->




>java7-try-resource 需要实现 `AutoCloseable` 的原因,看图
>

![](https://i.imgur.com/ao37Sq5.png)


可以看到 `try(// resource){}` 语法接受的参数是一个实现了`AutoCloseable`的类

下面研究下`try(// resource){}`是怎么关闭资源的,这里需要用到一个 `javap -c` 命令(自行百度此命令的作用)


看两份代码

>代码1，手动关闭资源
>

	
```java
	import java.io.File;
	import java.io.FileOutputStream;
	
	
	public class TestTryJava7Old {
	    public static void main(String[] args) throws Exception {
	
	        FileOutputStream outputStream = new FileOutputStream(new File("a.txt"));
	        outputStream.write("abc".getBytes());
	        outputStream.close();
	    }
	}
```

>代码1javap -c 反编译之后的代码

```java
	Compiled from "TestTryJava7Old.java"
	public class TestTryJava7Old {
	  public TestTryJava7Old();
	    Code:
	       0: aload_0
	       1: invokespecial #1                  // Method java/lang/Object."<init>":()V
	       4: return
	
	  public static void main(java.lang.String[]) throws java.lang.Exception;
	    Code:
	       0: new           #2                  // class java/io/FileOutputStream
	       3: dup
	       4: new           #3                  // class java/io/File
	       7: dup
	       8: ldc           #4                  // String a.txt
	      10: invokespecial #5                  // Method java/io/File."<init>":(Ljava/lang/String;)V
	      13: invokespecial #6                  // Method java/io/FileOutputStream."<init>":(Ljava/io/File;)V
	      16: astore_1
	      17: aload_1
	      18: ldc           #7                  // String abc
	      20: invokevirtual #8                  // Method java/lang/String.getBytes:()[B
	      23: invokevirtual #9                  // Method java/io/FileOutputStream.write:([B)V
	      26: aload_1
	      27: invokevirtual #10                 // Method java/io/FileOutputStream.close:()V
	      30: return
	}
```


>代码2,不关闭资源


```java
	import java.io.File;
	import java.io.FileOutputStream;
	
	
	public class TestTryJava7Old {
	    public static void main(String[] args) throws Exception {
	
	        FileOutputStream outputStream = new FileOutputStream(new File("a.txt"));
	        outputStream.write("abc".getBytes());
	        
	    }
	}
```

>代码2javap -c 反编译之后的代码


```java
	Compiled from "TestTryJava7Old.java"
	public class TestTryJava7Old {
	  public TestTryJava7Old();
	    Code:
	       0: aload_0
	       1: invokespecial #1                  // Method java/lang/Object."<init>":()V
	       4: return
	
	  public static void main(java.lang.String[]) throws java.lang.Exception;
	    Code:
	       0: new           #2                  // class java/io/FileOutputStream
	       3: dup
	       4: new           #3                  // class java/io/File
	       7: dup
	       8: ldc           #4                  // String a.txt
	      10: invokespecial #5                  // Method java/io/File."<init>":(Ljava/lang/String;)V
	      13: invokespecial #6                  // Method java/io/FileOutputStream."<init>":(Ljava/io/File;)V
	      16: astore_1
	      17: aload_1
	      18: ldc           #7                  // String abc
	      20: invokevirtual #8                  // Method java/lang/String.getBytes:()[B
	      23: invokevirtual #9                  // Method java/io/FileOutputStream.write:([B)V
	      26: return
	}
```


反编译之后代码的主要区别在这一行

	// Method java/io/FileOutputStream.close:()V

显然这一行代码来自  `outputStream.close();`


下面来看java7是如何自动关闭资源的

>使用java7新特性，自动关闭资源的代码3
>

```java
	import java.io.File;
	import java.io.FileOutputStream;
	
	
	public class TestTryJava7 {
	    public static void main(String[] args) throws Exception {
	
	        try (FileOutputStream outputStream = new FileOutputStream(new File("a.txt"))) {
	            outputStream.write("abc".getBytes());
	        }
	
	    }
	}
```

>代码3`javap -c` 反编译之后的代码


```java
	Compiled from "TestTryJava7.java"
	public class TestTryJava7 {
	  public TestTryJava7();
	    Code:
	       0: aload_0
	       1: invokespecial #1                  // Method java/lang/Object."<init>":()V
	       4: return
	
	  public static void main(java.lang.String[]) throws java.lang.Exception;
	    Code:
	       0: new           #2                  // class java/io/FileOutputStream
	       3: dup
	       4: new           #3                  // class java/io/File
	       7: dup
	       8: ldc           #4                  // String a.txt
	      10: invokespecial #5                  // Method java/io/File."<init>":(Ljava/lang/String;)V
	      13: invokespecial #6                  // Method java/io/FileOutputStream."<init>":(Ljava/io/File;)V
	      16: astore_1
	      17: aconst_null
	      18: astore_2
	      19: aload_1
	      20: ldc           #7                  // String abc
	      22: invokevirtual #8                  // Method java/lang/String.getBytes:()[B
	      25: invokevirtual #9                  // Method java/io/FileOutputStream.write:([B)V
	      28: aload_1
	      29: ifnull        99
	      32: aload_2
	      33: ifnull        52
	      36: aload_1
	      37: invokevirtual #10                 // Method java/io/FileOutputStream.close:()V
	      40: goto          99
	      43: astore_3
	      44: aload_2
	      45: aload_3
	      46: invokevirtual #12                 // Method java/lang/Throwable.addSuppressed:(Ljava/lang/Throwable;)V
	      49: goto          99
	      52: aload_1
	      53: invokevirtual #10                 // Method java/io/FileOutputStream.close:()V
	      56: goto          99
	      59: astore_3
	      60: aload_3
	      61: astore_2
	      62: aload_3
	      63: athrow
	      64: astore        4
	      66: aload_1
	      67: ifnull        96
	      70: aload_2
	      71: ifnull        92
	      74: aload_1
	      75: invokevirtual #10                 // Method java/io/FileOutputStream.close:()V
	      78: goto          96
	      81: astore        5
	      83: aload_2
	      84: aload         5
	      86: invokevirtual #12                 // Method java/lang/Throwable.addSuppressed:(Ljava/lang/Throwable;)V
	      89: goto          96
	      92: aload_1
	      93: invokevirtual #10                 // Method java/io/FileOutputStream.close:()V
	      96: aload         4
	      98: athrow
	      99: return
	    Exception table:
	       from    to  target type
	          36    40    43   Class java/lang/Throwable
	          19    28    59   Class java/lang/Throwable
	          19    28    64   any
	          74    78    81   Class java/lang/Throwable
	          59    66    64   any
	}
```


注意这一行 `// Method java/io/FileOutputStream.close:()V`,

说明我们的java文件在被编译成class 文件之后，会自动的调用了 `close` 方法，

也就是`AutoCloseable`的close 方法，这也我们的资源类是必须实现`AutoCloseable`类的原因

这也是我们不用自己关闭资源的本质：java 的编译器，帮你把这件事做好了,

java的JVM 语义允许`try(// resource){}`使用这样的语法，并且会自动调用`AutoCloseable#close方法.`


买个萌：`JVM`也是人写的，你想它干嘛，它就得干嘛！



