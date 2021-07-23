import{
    array
}from './index.js'
// find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。

console.log(array.find((item) => item.age === 28))

/* 
语法
arr.find(callback[, thisArg])
参数
callback
在数组每一项上执行的函数，接收 3 个参数：
element
当前遍历到的元素。
index可选
当前遍历到的索引。
array可选
数组本身。
thisArg可选
执行回调时用作this 的对象。
返回值
数组中第一个满足所提供测试函数的元素的值，否则返回 undefined。

描述

find方法对数组中的每一项元素执行一次 callback 函数，直至有一个 callback 返回 true。当找到了这样一个元素后，该方法会立即返回这个元素的值，否则返回 undefined。注意 callback 函数会为数组中的每个索引调用即从 0 到 length - 1，而不仅仅是那些被赋值的索引，这意味着对于稀疏数组来说，该方法的效率要低于那些只遍历有值的索引的方法。

callback函数带有3个参数：当前元素的值、当前元素的索引，以及数组本身。

如果提供了 thisArg参数，那么它将作为每次 callback函数执行时的this ，如果未提供，则使用 undefined。

find方法不会改变数组。

在第一次调用 callback函数时会确定元素的索引范围，因此在 find方法开始执行之后添加到数组的新元素将不会被 callback函数访问到。如果数组中一个尚未被callback函数访问到的元素的值被callback函数所改变，那么当callback函数访问到它时，它的值是将是根据它在数组中的索引所访问到的当前值。被删除的元素仍旧会被访问到，但是其值已经是undefined了。
*/

