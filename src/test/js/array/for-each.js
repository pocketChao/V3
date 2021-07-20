import {
    array
} from './index.js'

/* 
除了抛出异常以外，没有办法中止或跳出 forEach() 循环。如果你需要中止或跳出循环，forEach() 方法不是应当使用的工具。
若你需要提前终止循环，你可以使用：

一个简单的 for 循环
for...of / for...in 循环
Array.prototype.every()
Array.prototype.some()
Array.prototype.find()
Array.prototype.findIndex()
这些数组方法则可以对数组元素判断，以便确定是否需要继续遍历：
every()
some()
find()
findIndex()
数组中空缺的数组单元如undefined 未被forEach()调用 callback函数， 或进行任何其他操作
*/
array.forEach((item, index, originArray) => {
    item.country = 'China'
})
console.log(array)

// forEach 实现对象复制器
function copy(obj) {
    const copy = Object.create(Object.getPrototypeOf(obj))
    const propNames = Object.getOwnPropertyNames(obj)
    propNames.forEach(name => {
        const desc = Object.getOwnPropertyDescriptor(obj, name)
        Object.defineProperty(copy, name, desc)
    })
    return copy
}

const obj1 = {
    a: 1,
    b: {
        name: '小明'
    }
}
const obj2 = copy(obj1)
console.log(obj1)
obj1.b.name = '小刚'
console.log(obj2)
console.log(obj1 === obj2)

/* 
如果数组在迭代时被修改了，则其他元素会被跳过。
下面的例子会输出 "one", "two", "four"。当到达包含值 "two" 的项时，整个数组的第一个项被移除了，
这导致所有剩下的项上移一个位置。
因为元素 "four" 正位于在数组更前的位置，
所以 "three" 会被跳过。 
forEach() 不会在迭代之前创建数组的副本。
*/
var words = ['one', 'two', 'three', 'four'];
words.forEach(function (word) {
    console.log(word);
    if (word === 'two') {
        words.shift();
    }
})