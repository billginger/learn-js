# 你的底牌是什么？

## 课程内容

基于 Node.js 实现一个 CLI 猜数字游戏。

## 知识点

### Node.js

Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时环境。它可以让 JavaScript 脱离网页，直接运行在 PC 端或服务器端。

Node.js 最初被设计用来构建可扩展的网络应用。在 Web 后端服务方面，Node.js 有着不逊于 PHP 和 Java 的实力。

在这节课，我们主要使用 Node.js 来编写一个 CLI 小程序。

下载 Node.js 可以到 Node.js 官网：https://nodejs.org/

### CLI

CLI 是 Command-Line Interface 的缩写，即命令行界面。它可以让用户以最古老的方式与程序进行交流，即在终端中输入命令行，并得到程序的反馈。

### readline 模块

Node.js 有很多内置的功能模块，readline 便是其中之一。

readline 模块提供了一个接口，可以从可读流（例如终端的命令行输入）每次一行地读取数据。

在我们的代码中，我们使用 import 的方式来引入 readline 模块的 createInterface 方法。

关于 readline 模块的详细介绍，可以参考 Node.js 中文文档：http://nodejs.cn/api/readline.html

### fs 模块

fs 模块即文件系统（File System）模块。

### 判断语句

在上节课，我们学习了`if () {}`和`if () {} else {}`两种常用的判断语句。

在这节课，我们又使用到了`if () {}  else if () {} else {}`这种稍微复杂一点的判断语句。

### console.log()

在 Node.js 的示例代码中，我们可以看到很多之前网页示例中的代码。

比如`const number = Math.floor(Math.random() * 100 + 1);`的作用便是一模一样的。

但像有的语句，比如`console.log()`的作用还是有些区别的，虽然都是打印指定内容，但在 Node.js 环境下是没有开发者工具控制台的，所以`console.log()`在 Node.js 环境下是将内容打印到终端窗口。

### process.exit()

process.exit() 是 Node.js 独有的对象和方法，作用是使进程结束。

## 课后拓展

### Node.js

这里推荐 3 个学习的网址，菜鸟教程偏重基础，Node.js 中文网内容相对比较全面，而对于能够熟读英文文档的同学，可以直接阅读 Node.js 官网的英文文档。

菜鸟教程：https://www.runoob.com/nodejs/nodejs-tutorial.html
Node.js 中文网：http://nodejs.cn/learn
Node.js 官网：https://nodejs.org/zh-cn/docs/
