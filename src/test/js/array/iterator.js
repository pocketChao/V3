import { array } from "./index.js";

// 迭代器在node中耗时明显高于for of

const array1 = [{
    name: '小明',
    age: 28,
    sex: 1
}, {
    name: '小红',
    age: 20,
    sex: 2
}, {
    name: '小刚',
    age: 18,
    sex: 1
}, {
    name: '老四',
    age: 58,
    sex: 1
}]

const iterator = array[Symbol.iterator]()
console.time('iterator')
for (const item of iterator) {
}
console.timeEnd('iterator')

const iterator1 = array1[Symbol.iterator]()
console.time('iterator1 while')
let done = false
while (!done){
    const item = iterator1.next()
    done = item.done ?? false
}
console.timeEnd('iterator1 while')


console.time('for of')
for (const item of array) {
}
console.timeEnd('for of')

// entries() 方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
for (const item of array1.entries()){
    console.log(item)
}

var arr = ["a", "b", "c"];
var iter = arr.entries();
var a = [];

// for(var i=0; i< arr.length; i++){   // 实际使用的是这个
for(var i=0; i< arr.length+1; i++){    // 注意，是length+1，比数组的长度大
    var tem = iter.next();             // 每次迭代时更新next
    console.log(tem.done);             // 这里可以看到更新后的done都是false
    if(tem.done !== true){             // 遍历迭代器结束done才是true
        console.log(tem.value);
        a[i]=tem.value;
    }
}

console.log(a);     