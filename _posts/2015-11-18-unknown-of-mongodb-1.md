---
layout: post
section-type: post
title: 我不知道的MongooDB 1
category: Mongodb
tags: ['MongoDB']
---

## 1.命名
<pre>
 * 集合名不能是空字符串
 * 集合名不能包含 '\0'，表示集合名结束
 * 集合名不能以 'system.'开头，系统集合保留
 * 集合名不能包含保留字符 '$'
 * 数据库不能是空字符串
 * 数据库名称只能使用ASCII中的字母和数字
 * 数据库名称区分大小写，数据库名称最好全部小写
 * 数据库名称最多为64个字符
 * 数据库最终会变为文件系统的文件，而数据库名称就是对应的文件名称
</pre>

---

## 2.类型
<pre>
 * null
 * boolean
 * Number
 * String
 * Date
 * RegExp
 * Array
 * SubDoc
 * ObjectId
 * Binary
 * Function 居然可以存放函数！
</pre>

#### 关于ObjectId
ObjectId是mongodb分布式数据库中重要的一环，它可以保证在不同的机器中生成唯一的标识符。
这去除了在多个服务器上同步自增主键的操作。

ObjectId使用12字节的存储空间，由一个24个十六进制的数字组成的字符串。

<pre>
* 0，1，2，3位是时间戳
* 4，5，6位是机器码
* 7，8位是PID
* 9，10，11是计数器
</pre>
详情见《MongoDB权威指南》p20

---

## 3.MongoDB Shell定制
MongoDB Shell 是一个javascript解释器，所以也可以用来执行脚本。

在[用户主目录]创建'.mongorc.js'，可以做一些定制服务。此脚本会在Shell启动成功后加载并执行。

其中最重要的功能是定义一个全局函数来覆盖一些危险操作。比如dropDatebase, deleteIndexes

    var no = function() {
      print('hi, you are doing something dangerous!')
    }

    db.dropDatebae = DB.prototype.dropDatebae = no;
