---
layout: post
title:  "java SimpleDateFormat 线程不安全分析"
date:  2016-12-29 10:20:00 +0800
categories: java
tags: java
keywords: java,web1992
---


java SimpleDateFormat 线程不安全分析
---

<!--more-->


参考：

[java 有状态，无状态的解释](http://peterwei.iteye.com/blog/960532)

[SimpleDateFormat 例子](http://peterwei.iteye.com/blog/960532)


`SimpleDateFormat`  是非线程安全的，在多线程环境中使用，会有问题。

`SimpleDateFormat` 是线程不安全的原因是:

代码中修改了变量`protected Calendar calendar;` 的值

那么在多线程中，set,get的时候，就会存在问题。


看下 `SimpleDateFormat` 的类结构

```java
public class SimpleDateFormat extends DateFormat {

}
```

```java
public abstract class DateFormat extends Format {


    protected Calendar calendar;
    
}
```


一个静态日期工具类：(这个工具类是线程不安全的)

```java
public class DateUtil {
    
    private static final  SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    
    public static  String formatDate(Date date)throws ParseException{
        return sdf.format(date);
    }
    
    public static Date parse(String strDate) throws ParseException{

        return sdf.parse(strDate);
    }
}
```

**`DateUtil` 中的 `SimpleDateFormat` 是静态的，多线程共享的**

**那么`SimpleDateFormat`中的 `Calendar` 也变成了共享的对象**

**下面的方法 `calendar.setTime(date);` 这句代码修改了 `DateFormat`类中变量`calendar`属性状态**

**那么就存在多线程环境中，同时操作`calendar`属性的值，就会产生线程安全的问题**

```java
    private StringBuffer format(Date date, StringBuffer toAppendTo,
                                FieldDelegate delegate) {
        calendar.setTime(date);
        //...
        }
```

在多线程中如果`线程1`执行了  calendar.setTime(date); `挂起`，`线程2`再次执行  calendar.setTime(date);

`线程2`挂起，`线程1`继续执行

那么在后续使用Calendar进行日期格式化的时候，就会出现相同的日期，导致错误。








