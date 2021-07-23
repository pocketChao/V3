import{
    array
} from './index.js'
// filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 

const filterFunc = (item) => {
  return item.age === 28
}

console.time('filter')
const filterArray = array.filter(filterFunc)
console.timeEnd('filter')
console.log(filterArray)

/* 
参数
callback
用来测试数组的每个元素的函数。返回 true 表示该元素通过测试，保留该元素，false 则不保留。它接受以下三个参数：
element
数组中当前正在处理的元素。
index可选
正在处理的元素在数组中的索引。
array可选
调用了 filter 的数组本身。
thisArg可选
执行 callback 时，用于 this 的值。

返回值
一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。

描述
filter 为数组中的每个元素调用一次 callback 函数，并利用所有使得 callback 返回 true 或等价于 true 的值的元素创建一个新数组。callback 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。那些没有通过 callback 测试的元素会被跳过，不会被包含在新数组中。

callback 被调用时传入三个参数：

元素的值
元素的索引
被遍历的数组本身
如果为 filter 提供一个 thisArg 参数，则它会被作为 callback 被调用时的 this 值。否则，callback 的 this 值在非严格模式下将是全局对象，严格模式下为 undefined。callback 函数最终观察到的 this 值是根据通常函数所看到的 "this"的规则确定的。

filter 不会改变原数组，它返回过滤后的新数组。

filter 遍历的元素范围在第一次调用 callback 之前就已经确定了。在调用 filter 之后被添加到数组中的元素不会被 filter 遍历到。如果已经存在的元素被改变了，则他们传入 callback 的值是 filter 遍历到它们那一刻的值。被删除或从来未被赋值的元素不会被遍历到。
*/