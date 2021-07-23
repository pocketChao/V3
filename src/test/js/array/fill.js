let array = [0, 1, 2, 3]

array.fill(8, 1, 4)

console.log(array)

array.fill(6)

console.log(array)

/* 
fill 方法接受三个参数 value, start 以及 end. start 和 end 参数是可选的, 其默认值分别为 0 和 this 对象的 length 属性值。

如果 start 是个负数, 则开始索引会被自动计算成为 length+start, 其中 length 是 this 对象的 length 属性值。如果 end 是个负数, 则结束索引会被自动计算成为 length+end。

fill 方法故意被设计成通用方法, 该方法不要求 this 是数组对象。

fill 方法是个可变方法, 它会改变调用它的 this 对象本身, 然后返回它, 而并不是返回一个副本。

当一个对象被传递给 fill方法的时候, 填充数组的是这个对象的引用。
*/

console.log(array.fill(4, -3, -2)); // => [6,4,6,6] 