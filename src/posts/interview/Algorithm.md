---
title: Algorithm（持续更新...），温故知新
---

### 手写冒泡排序

```javascript
function bubbleSort(array) {
  if (!Array.isArray(array)) return array;
  let len = array.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      //len-1-i ,减去已经遍历了的(当前内循环找到的最大的数)，减少重复
      if (array[j] > array[j + 1]) {
        // es6
        [array[j], array[j + 1]] = [array[j + 1], array[j]]

        // es5
        // let temp = array[j];
        // array[j] = array[j + 1];
        // array[j + 1] = temp;
      }
    }
  }
}

// 外循环一次得到子数组的最大（最小）值，第一次为原数组；
// 内循环：负责寻找极值，并修改数组。
```

复杂度为  $O(n^2)$ ，若是数组长度过大？[其它排序](https://github.com/KAngJoin/Algorithm/tree/master/Sorting)

