import { array } from "./index.js";

// 迭代器在node中耗时明显高于for of

const iterator = array[Symbol.iterator]()

console.time('iterator')
for (const item of iterator) {
}
console.timeEnd('iterator')

console.time('for of')
for (const item of array) {
}
console.timeEnd('for of')