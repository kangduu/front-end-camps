---
title: DOM（持续更新...）
---

### 获取浏览器滚动条滚动距离

```js
// 顶部
var scrolltopTemp = document.documentElement.scrollTop || document.body.scrollTop;
```

## Element.classList

1. add

   添加class

2. remove

   移除class

3. toggle

   有则替换，无责新增---

### 获取元素位置信息

```js
Element.getBoundingClientRect()={
    bottom: 573.5
    height: 62.09375
    left: 351.90625
    right: 414
    top: 511.40625
    width: 62.09375
    x: 351.90625
    y: 511.40625
}
```

### 创建新节点

- document.createDocumentFragment() //创建一个DOM片段
- document.createElement() //创建一个具体的元素
- document.createTextNode() //创建一个文本节点

### 添加、移除、替换、插入

- appendChild() //添加
- removeChild() //移除
- replaceChild() //替换
- insertBefore() //插入

 **删除自己**

[parentElement 和 parentNode 的区别](https://liuna718-163-com.iteye.com/blog/998647)

```js
// 拿到待删除节点:
var self = document.getElementById('mySelf');
// 拿到父节点:
var parent = self.parentNode;
var parent = self.parentElement; 
// 删除
 parent.removeChild(self)
```

### 查找

```javascript
document.getElementById('id-name') // return node
document.getElementsByClassName('class-name') // return Collection
document.getElementsByName('[name]attribute，属性name') // return Collection
document.getElementsByTagName('ele-name') // return Collection
document.getElementsByTagNameNS('namespace，命名空间', 'ele-name') // return Collection
......
document.querySelector('css选择器字符串') // return first ele
document.querySelectorAll('css选择器字符串') // retuen Collection
```
## 获取子节点

```html
<body>
  <div id="parent">
    第一行文本
    <div class="son">123</div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
     最后一行文本
  </div>
</body>
```

### getElementsByTagName获取子节点

```js
document.getElementById('parent').getElementsByTagName('li')
//HTMLCollection(3) [li, li, li]
```

### childNodes获取子节点

```js
document.getElementById("parent").childNodes;
// NodeList(2) [div.son, ul]
// 注意这里是 Node List
```

### children获取子节点（直接子元素，儿子）

```js
document.getElementById('parent').children 
//HTMLCollection(2) [div.son, ul]
```

### 获取第一个子节点

- firstChild：第一个子节点（可以是文本）

```js
document.getElementById('parent').firstChild 
// "第一行文本"
```

- firstElementChild：第一个元素子节点（node）

```js
document.getElementById('parent').firstElementChild 
// <div class="son">123</div>
```

### 获取最后一个子节点

- lastChild：最后一个子节点（可以是文本）

```js
document.getElementById('parent').lastChild 
// "最后一行文本"
```

- lastElementChild：第一个元素子节点（node）

```js
document.getElementById('parent').lastElementChild 
// <ul>...</ul>
```

### 获取子元素集合的长度childElementCount

```js
document.getElementById("parent").childElementCount; 
// 2
```

## 获取父节点

```html
<body>
  <div id="parent">
    第一行文本
    <div class="son">123</div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
     最后一行文本
  </div>
</body>
```

### parentNode和parentElement

```js
document.getElementById('son').parentElement |
  document.getElementById('son').parentNode
//<div id="parent"></div>
```

### offsetParent获取所有父节点

```js
document.getElementById('son').offsetParent
// 直接返回的是 body
```

## 兄弟节点

```html
<body>
  <div id="parent">
    第一行文本
    <div id="son">123</div>
    我是一段文字
    <ul id="ul">
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
     最后一行文本
    <p>今天是星期二</p>
  </div>
</body>
```

### 先获取父节点后在选择子点

```js
document.getElementById('son').parentNode.children[1]
// <ul>...</ul>
```

### 获取上一个兄弟节点

- previousElementSibling：匹配元素

```js
document.getElementById('ul').previousElementSibling
//<div class="son">123</div>
```

- previousSibling：（文本 换行 空格）

```js
document.getElementById('ul').previousSibling
// "我是一段文字"
```

### 获取下一个兄弟节点

- nextElementSibling：匹配元素

```js
document.getElementById('ul').nextElementSibling
//<p>今天是星期二</p>
```

- nextSibling：（文本 换行 空格）

```js
document.getElementById('ul').nextSibling
// "最后一行文本"
```

## offset相关值

```js
element.offsetHeight	   	//返回任何一个元素的高度包括边框和填充，但不是边距
element.offsetWidth    		//返回元素的宽度，包括边框和填充，但不是边距
element.offsetLeft    		//返回当前元素的相对水平偏移位置的偏移容器
element.offsetParent   		//返回元素的偏移容器
element.offsetTop        	//返回当前元素的相对垂直偏移位置的偏移容器
```

