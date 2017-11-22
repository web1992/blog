---
layout: post
title:  "jvm 中文乱码的问题"
date:  2017-11-09 18:56:00 +0800
categories: ssh,java,file.encoding
tags: ssh,java,file.encoding
keywords: ssh,java,file.encoding,web1992
---

# jvm 中文乱码的问题

一次项目发布之后，之前好好的http 接口，报签名错误，经排查是中文乱码引起的，继续排查（已经沟通过没有人修改过服务的编码）

使用`jinfo`可以查询`jvm`虚拟机的各项参数信息

## jinfo

```sh
 `jinfo pid ` # pid 为Java的进程id
```

会出现下面的log

```log
    $ jinfo 16051
    Attaching to process ID 16051, please wait...
    Debugger attached successfully.
    Server compiler detected.
    JVM version is 24.79-b02
    Java System Properties:

    java.runtime.name = Java(TM) SE Runtime Environment
    sun.rmi.transport.tcp.responseTimeout = 15000
    java.vm.version = 24.79-b02
    sun.boot.library.path = /usr/local/jdk1.7.0_79/jre/lib/amd64
    shared.loader = 
    java.vendor.url = http://java.oracle.com/
    java.vm.vendor = Oracle Corporation
    path.separator = :
    file.encoding.pkg = sun.io
    java.vm.name = Java HotSpot(TM) 64-Bit Server VM
    java.util.logging.config.file = /opt/tomcat05/conf/logging.properties
    tomcat.util.buf.StringCache.byte.enabled = true
    sun.os.patch.level = unknown
    sun.java.launcher = SUN_STANDARD
    user.country = CN
    user.dir = /opt/tomcat05
    java.vm.specification.name = Java Virtual Machine Specification
    java.runtime.version = 1.7.0_79-b15
    org.apache.catalina.startup.TldConfig.jarsToSkip = tomcat7-websocket.jar
    java.awt.graphicsenv = sun.awt.X11GraphicsEnvironment
    os.arch = amd64
    java.endorsed.dirs = /opt/tomcat05/endorsed
    line.separator = 

    java.io.tmpdir = /opt/tomcat05/temp
    java.vm.specification.vendor = Oracle Corporation
    java.util.logging.manager = org.apache.juli.ClassLoaderLogManager
    java.naming.factory.url.pkgs = org.apache.naming
    os.name = Linux
    sun.jnu.encoding = GBK
    java.library.path = /usr/java/packages/lib/amd64:/usr/lib64:/lib64:/lib:/usr/lib
    tomcat.util.scan.DefaultJarScanner.jarsToSkip = bootstrap.jar,commons-daemon.jar,tomcat-juli.jar,annotations-api.jar,el-api.jar,jsp-api.jar,servlet-api.jar,websocket-api.jar,catalina.jar,catalina-ant.jar,catalina-ha.jar,catalina-tribes.jar,jasper.jar,jasper-el.jar,ecj-*.jar,tomcat-api.jar,tomcat-util.jar,tomcat-coyote.jar,tomcat-dbcp.jar,tomcat-jni.jar,tomcat-spdy.jar,tomcat-i18n-en.jar,tomcat-i18n-es.jar,tomcat-i18n-fr.jar,tomcat-i18n-ja.jar,tomcat-juli-adapters.jar,catalina-jmx-remote.jar,catalina-ws.jar,tomcat-jdbc.jar,tools.jar,commons-beanutils*.jar,commons-codec*.jar,commons-collections*.jar,commons-dbcp*.jar,commons-digester*.jar,commons-fileupload*.jar,commons-httpclient*.jar,commons-io*.jar,commons-lang*.jar,commons-logging*.jar,commons-math*.jar,commons-pool*.jar,jstl.jar,taglibs-standard-spec-*.jar,geronimo-spec-jaxrpc*.jar,wsdl4j*.jar,ant.jar,ant-junit*.jar,aspectj*.jar,jmx.jar,h2*.jar,hibernate*.jar,httpclient*.jar,jmx-tools.jar,jta*.jar,log4j.jar,log4j-1*.jar,mail*.jar,slf4j*.jar,xercesImpl.jar,xmlParserAPIs.jar,xml-apis.jar,junit.jar,junit-*.jar,hamcrest*.jar,org.hamcrest*.jar,ant-launcher.jar,cobertura-*.jar,asm-*.jar,dom4j-*.jar,icu4j-*.jar,jaxen-*.jar,jdom-*.jar,jetty-*.jar,oro-*.jar,servlet-api-*.jar,tagsoup-*.jar,xmlParserAPIs-*.jar,xom-*.jar
    java.class.version = 51.0
    java.specification.name = Java Platform API Specification
    sun.management.compiler = HotSpot 64-Bit Tiered Compilers
    os.version = 2.6.32-696.3.2.el6.x86_64
    user.home = /home/dev
    org.apache.catalina.startup.ContextConfig.jarsToSkip = 
    user.timezone = PRC
    catalina.useNaming = true
    java.awt.printerjob = sun.print.PSPrinterJob
    file.encoding = GBK
    java.specification.version = 1.7
    catalina.home = /opt/tomcat05
    user.name = dev
    java.class.path = /opt/tomcat05/bin/bootstrap.jar:/opt/tomcat05/bin/tomcat-juli.jar
    java.naming.factory.initial = org.apache.naming.java.javaURLContextFactory
    package.definition = sun.,java.,org.apache.catalina.,org.apache.coyote.,org.apache.jasper.,org.apache.naming.,org.apache.tomcat.
    java.vm.specification.version = 1.7
    sun.arch.data.model = 64
    sun.java.command = org.apache.catalina.startup.Bootstrap start
    java.home = /usr/local/jdk1.7.0_79/jre
    user.language = zh
    java.specification.vendor = Oracle Corporation
    awt.toolkit = sun.awt.X11.XToolkit
    java.vm.info = mixed mode
    java.version = 1.7.0_79
    java.ext.dirs = /usr/local/jdk1.7.0_79/jre/lib/ext:/usr/java/packages/lib/ext
    sun.boot.class.path = /usr/local/jdk1.7.0_79/jre/lib/resources.jar:/usr/local/jdk1.7.0_79/jre/lib/rt.jar:/usr/local/jdk1.7.0_79/jre/lib/sunrsasign.jar:/usr/local/jdk1.7.0_79/jre/lib/jsse.jar:/usr/local/jdk1.7.0_79/jre/lib/jce.jar:/usr/local/jdk1.7.0_79/jre/lib/charsets.jar:/usr/local/jdk1.7.0_79/jre/lib/jfr.jar:/usr/local/jdk1.7.0_79/jre/classes
    server.loader = 
    java.vendor = Oracle Corporation
    catalina.base = /opt/tomcat05
    file.separator = /
    java.vendor.url.bug = http://bugreport.sun.com/bugreport/
    common.loader = ${catalina.base}/lib,${catalina.base}/lib/*.jar,${catalina.home}/lib,${catalina.home}/lib/*.jar
    sun.io.unicode.encoding = UnicodeLittle
    sun.font.fontmanager = sun.awt.X11FontManager
    sun.cpu.endian = little
    package.access = sun.,org.apache.catalina.,org.apache.coyote.,org.apache.jasper.,org.apache.naming.resources.,org.apache.tomcat.
    sun.cpu.isalist = 

    VM Flags:

    -Djava.util.logging.config.file=/opt/tomcat05/conf/logging.properties -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager -Xms1024m -Xmx1024m -Xss256k -XX:PermSize=128m -XX:MaxPermSize=128m -XX:+UseParallelOldGC -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/home/dev/dump -XX:+PrintGCDetails -XX:+PrintGCDateStamps -Xloggc:/home/dev/dump/heap_trace_tomcat05.txt -XX:NewSize=512m -XX:MaxNewSize=512m -agentlib:jdwp=transport=dt_socket,address=5959,suspend=n,server=y -Djava.endorsed.dirs=/opt/tomcat05/endorsed -Dcatalina.base=/opt/tomcat05 -Dcatalina.home=/opt/tomcat05 -Djava.io.tmpdir=/opt/tomcat05/temp
```

发现 file.encoding = GBK 是gbk测试环境的是utf-8

是用locale 查询系统编码,发现是utf-8

```shell
$ locale
LANG=zh_CN.GBK
LC_CTYPE="zh_CN.GBK"
LC_NUMERIC="zh_CN.GBK"
LC_TIME="zh_CN.GBK"
LC_COLLATE="zh_CN.GBK"
LC_MONETARY="zh_CN.GBK"
LC_MESSAGES="zh_CN.GBK"
LC_PAPER="zh_CN.GBK"
LC_NAME="zh_CN.GBK"
LC_ADDRESS="zh_CN.GBK"
LC_TELEPHONE="zh_CN.GBK"
LC_MEASUREMENT="zh_CN.GBK"
LC_IDENTIFICATION="zh_CN.GBK"
LC_ALL=
```

却发现当前的环境(ssh session会话)的编码是GBK

查询系统的编码却是UTF-8,命令如下

```shell
$ cat  /etc/sysconfig/i18n
LANG="zh_CN.UTF-8"
SYSFONT="latarcyrheb-sun16"
```

> 这里需要思考为什么jvm 的编码确实GBK，是在哪里，在何时改变的

然后继续苦逼思考，直到看到了这篇文章[link](https://hongjiang.info/java-file-encoding-and-os-locale/),知道当我们用ssh 登录linux 服务器的时候，会把当前系统的编码发送
带目标服务器。

ssh -v 可以输出ssh debug 信息

```sh
ssh -v dev@ip
```

发现下面的log

```log
##..... 省略其它日志
debug1: Entering interactive session.
debug1: Sending environment.
debug1: Sending env LANG = zh_CN.GBK
```

现在可以确定，是客户端的系统编码是GBK，当用ssh 登录远程的Linux时，会把当前的GBK发送到远程，导致远程的系统的会话（session）的编码是GBK
导致jvm 系统启动的时候，使用了GBK编码。

## 总结

- 1 jinfo 可以查询jvm参数信息， 十分有用
- 2 ssh -v 查询debug 信息
- 3 之前看到别人在用shell 脚本 启动（或者执行java命令）JVM时，会有 `export LANG="en_US.UTF-8"` 类似的命令，是为了保证当前环境的编码是自己想要的编码
- 4 思考，思考，思考

## 参考文章

- [一次编码问题的排查](https://hongjiang.info/java-file-encoding-and-os-locale/)
- [jinfo](http://outofmemory.cn/java/jvm/jvm-tools-jps-jstat-jinfo-jmap-jhat-jstack)
- [file.encoding from IBM](https://www.ibm.com/support/knowledgecenter/en/ssw_i5_54/rzaha/charenc.htm)