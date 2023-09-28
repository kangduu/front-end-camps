---
title: Javascript
---

### JS基本数据类型

**7大数据类型**

- undefined、null、String、Number、Boolean、Symbol、（BigInt 【 ES10】）  +  Object【引用的】

**两大细分**

- 基本数据类型：number、string、null、undefined、boolean、symbol -- 栈


- 引用数据类型：object、array、function -- 堆

**区别与特性**

1. 两种数据类型**存储位置**不同
2. **原始数据类型**是直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据；
3. **引用数据类型**存储在堆(heap)中的对象，占据空间大、大小不固定，如果存储在栈中，将会影响程序运行的性能；
4. 引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。
5. 当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。

### js中类型判断的哪些事？

- [typeof]()
- [instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)
- [Object.prototype.toString.call(target)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)

### == 和 === 的区别

`==`	先比较类型，类型不同先进行类型转换；再比较值；

`===` 先比较类型，不同则返回false；类型相同才比较值。

### 闭包

> 闭包是指`有权访问另一个函数作用域中变量`的函数；
>
> 创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量；
>
> 利用闭包可以`突破作用域链`，将函数内部的变量和方法传递到外部。

###### feature

1. 函数内再嵌套函数
2. 内部函数可以引用外层的参数和变量
3. 参数和变量`不会被垃圾回收机制回收`

### Map和Set的区别### ES5与ES6继承的区别

- **思路**

> ES5 的继承使用借助构造函数实现，实质是`先创造子类的实例对象this`，然后再将父类的方法添加到`this`上面。ES6 的继承机制完全不同，实质是`先创造父类的实例对象this`（所以必须先调用`super`方法），然后再用子类的构造函数修改`this` ;
>
> ES6 在继承的语法上不仅继承了类的原型对象，还继承了类的静态属性和静态方法
>
> ...

### 对原生JavaScript的理解

- 思路

>JavaScript 实现包含的几个部分;
>
>JavaScript 的语言类型特性;
>
>解释性脚本语言（对标编译性脚本语言）;
>
>面向对象（面向过程）;
>
>事件驱动 / 异步 IO 
>
>自由...

### null和undefined的区别

- `null`表示"没有对象"，即该处不应该有值。（是一个关键字，不能赋值）

  典型用法是：

  - 作为函数的参数，表示该函数的参数不是对象。
  - 作为对象原型链的终点。


- `undefined`表示"缺少值"，就是此处应该有一个值，但是还没有定义。（相当于一个变量，可以赋值）

  典型用法是：

  - 变量被声明了，但没有赋值时，就等于undefined。
  - 调用函数时，应该提供的参数没有提供，该参数等于undefined。
  - 对象没有赋值的属性，该属性的值为undefined。
  - 函数没有返回值时，默认返回undefined。

### 箭头函数与普通函数的区别

1. `对this的关联`。内置this的值，取决于箭头函数在哪里定义，而非箭头函数执行的上下文环境。
2. `new 不可用`。箭头函数不能用new关键字来实例化对象，否则报错。
3. `this指向不会改变`。函数内置this指向不可改变，this在函数体内整个执行环境中为常量。有利于JavaScript引擎优化处理。
4. `没有arguments对象`。不能通过arguments对象访问传入的实参。只能使用显示命名或者其它新特性完成。###  void

```javascript
console.log(void 0 === undefined) // true
console.log(void 1 === undefined) // true

function fn(name: string, add: string = '湖南') {} 
//解析为：
function fn(name, add) {
  if (add === void 0) { add = '湖南'; } // 注意：函数参数默认值的转换 
  // if (typeof add === 'undefined' ) { add = '湖南'; }
}
```
**注意**： void 返回的都是 undefined 类型

## 为什么 `typeof null === 'object'` ?
```js
// JavaScript 诞生以来便如此
typeof null === 'object';
```

> 在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0。由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null 的类型标签是 0，typeof null 也因此返回 "object"。（[参考来源](https://2ality.com/2013/10/typeof-null.html)）
> 曾有一个 ECMAScript 的修复提案（通过选择性加入的方式），但被拒绝了。该提案会导致 typeof null === 'null'。
