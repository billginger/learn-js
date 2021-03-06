# 来做一个猜数字游戏吧！

## 课程内容

基于网页实现一个图形化界面的猜数字游戏。

## 知识点

### HTML

JavaScript 诞生之初就是为 HTML 服务的，现在绝大多数的 JavaScript 代码也都运行在以 HTML 为主要架构的 Web 端。

HTML 是 HyperText Markup Language 的缩写，即超文本标记语言。一个 HTML 文件通常由若干 HTML 标签构成。

在 HTML 文件中可以很方便地插入 JavaScript 代码，通过网页浏览器便可以直接运行，不需要另配置运行环境。

HTML 还可以为我们提供图形化界面，JavaScript 只需要处理逻辑部分就可以了。

### ES5 和 ES6

JavaScript 从诞生至今，经过了很多版本的迭代。目前绝大多数的网页浏览器都可以正常运行 ES5 代码，而 ES6 代码则只有 Google Chrome 等少数浏览器可以正常运行。但 ES6 是未来的趋势，现在学习 JavaScript，可以直接从 ES6 入手。

我们课程中的 JavaScript 代码都会使用 ES6 来编写，并建议使用 Google Chrome 来运行 Web 端的代码。

### 变量和常量

在 ES6 中，我们使用 let 来声明变量，使用 const 来声明常量。变量和常量在声明的同时可以直接赋值。

在我们的代码中，我们使用 const 声明了一个常量`number`，并对它进行了赋值。

变量和常量可以是一个数字，也可以是一个字符串，甚至是一个自定义函数。在我们的代码中，我们还声明了一个常量`submit`，它便是一个自定义函数。

区分变量和常量，一个主要原则就是：常量在赋值后，值就不可以再改变了，而变量的值是可以改变的。

### Math.random()

在 JavaScript 中有很多内置的对象和方法，方便我们调用，Math.random() 便是其中之一。

Math.random() 会返回介于 0（包含） ~ 1（不包含） 之间的一个随机数。该随机数包含若干位小数，将该随机数乘以 100 便可以得到 0（包含） ~ 100（不包含） 之间的一个随机数。再将这个 0~100 之间的随机数加上 1 便可以得到 1（包含） ~ 101（不包含） 之间的一个随机数。

### Math.floor()

Math.floor(x) 会返回小于等于 x 的最大整数，即对 x 进行下舍入。

与 Math.floor() 相对应的是 Math.ceil()，对数进行上舍入。

> 思考一下，我们想得到一个 1~100 的整数，用的代码是`Math.floor(Math.random() * 100 + 1)`，如果换成`Math.ceil(Math.random() * 100)`可以吗？

### console.log()

console.log() 是 JavaScript 代码中常常会用到的调试代码，该代码会在开发者工具的控制台中打印出指定的内容。

在我们的代码中，我们使用`console.log(number)`来打印我们创建的随机数。

### 注释

注释是指代码中只起注解作用，而不会被执行的代码或文字。

在 JavaScript 中，我们通常使用 // 来添加单行注释。

在我们的代码中，我们使用 // 注释掉了`console.log(number)`这行代码。注释掉后，这行代码便不会被执行了，当我们需要执行这行代码的时候，只需要删掉 // 就可以了。

### 函数

函数，我们可以理解为一组预先编写好的待调用的代码，可以实现一个特定的功能。

在我们的代码中，自定义了一个名为`submit`的函数，该函数负责验证用户输入的数字是不是正确答案。只有当用户点击“提交”按钮时，该函数才会被调用。

另外，我们的自定义函数使用了箭头函数的写法。箭头函数是 ES6 的一个新特性，因为它的结构`const functionName = () => {}`中包含一个箭头，所以叫做箭头函数。

### getElementById

getElementById 方法可返回对拥有指定 ID 的第一个 DOM 的引用。

DOM 是 Document Object Model 的缩写，指 HTML 文档中的对象模型，也可以理解为 HTML 文档中的节点或元素。比如我们 HTML 代码中的的`input`标签就是一个 DOM，`button`标签也是一个 DOM。

在我们的代码中，我们使用`document.getElementById('number').value`来获取 ID 为 number 的 DOM 的 value。再来看 HTML 代码，可以看到`input`标签有一个`id`属性，属性值为`number`，那就是来获取这个 input 的 value 了。

### 判断语句

判断语句在 JavaScript 代码中非常常见，它负责着逻辑的推演。

JavaScript 最常用的判断语句就是`if () {}`，其中小括号中是判断条件，大括号中是判断条件成立后执行的代码。

还有一种比较常见的判断语句是`if () {} else {}`，else 后面的大括号是判断条件不成立后执行的代码。

### isNaN

isNaN 是 JavaScript 的一个内置函数，是 is Not a Number 的缩写，即判断一个值是不是“不是一个数字”。

注意这里判断的是“不是一个数字”，所以如果值为`1`的话，会返回`false`，值为`'a'`的话，会返回`true`。

在我们的代码中，我们使用`isNaN(n)`来判断用户输入的内容是不是数字，如果用户输入的内容不是数字的话，我们会弹出对话框来提示用户。

### 运算符

在 JavaScript 中有很多运算符，比如`=`是常见的赋值运算符，`*`和`+`是常见的算术运算符。

在我们的判断语句的条件语句中，又用到了两种运算符：逻辑运算符`||`表示“逻辑或”，逻辑运算符`!`表示“逻辑非”，比较运算符`<`表示“小于”，比较运算符`>`表示“大于”。

再来看我们代码中的判断条件`isNaN(n) || n < 1 || n > 100 || !Number.isInteger(parseFloat(n))`，意思就是说如果 n 不是一个数字，或者 n 小于 1，或者 n 大于 100，或者 n 不是一个整数，则判断条件成立。

### Number.isInteger()

Number.isInteger() 是 ES6 新增的一个方法，用来判断给定的参数是否为整数。

### parseFloat()

parseFloat() 是 JavaScript 的一个内置函数，可解析一个字符串，并返回一个浮点数。

我们之所以要使用 parseFloat() 是因为用户在文本框中输入的内容，无论是字母还是数字，对 JavaScript 来说都是字符串。如果输入的内容不经 parseFloat() 处理，直接交给 Number.isInteger() 判断，那判断结果必然是`false`。

假设用户输入的内容是“1”，JavaScript 一开始拿到的是`'1'`，经 parseFloat() 转化后，便成了`1`，这时再交由 Number.isInteger() 判断，就可以做出准确的判断了。

### alert()

alert() 完整的写法是`window.alert()`，是属于 window 对象的一个方法，我们通常省略前面的`window.`，采用简写的方式。

alert() 的作用是弹出一个警告对话框。因为警告对话框的样式会因为网页浏览器的不同而存在较大差异，且无法对其样式进行定义，所以在一个成熟的项目中一般很少会用到 alert()。但因为它使用方便，且令代码看上去比较直观，所以我们在这里使用了它。

### return

return 语句会终止函数的执行并返回函数的值。

在我们的代码中，return 主要用来终止函数的执行。

试想一下，如果去掉代码中的 return，会发生什么事情？

## 课后拓展

### HTML

这里推荐 2 个学习的网址，菜鸟教程偏重基础，MDN Web Docs 的内容会更全面。

菜鸟教程：https://www.runoob.com/html/html-tutorial.html
MDN Web Docs: https://developer.mozilla.org/zh-CN/docs/Web/HTML

### JavaScript

同样是菜鸟教程和 MDN Web Docs。

菜鸟教程：https://www.runoob.com/js/js-tutorial.html
MDN Web Docs: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript

### CSS

CSS 也是网页的重要组成部分，它控制着网页的样式，并可以实现一些简单的动画。

菜鸟教程：https://www.runoob.com/css/css-tutorial.html
MDN Web Docs: https://developer.mozilla.org/zh-CN/docs/Web/CSS
