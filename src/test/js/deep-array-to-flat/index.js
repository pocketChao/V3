// Array.prototype.flat
let flatArray = [1,2,[[[[[3,4]]]]], 5, 6]
console.time('test flat')
console.log(flatArray.flat(Infinity))
console.timeEnd('test flat')


// 自定义flat
function flatDeep(arr, deep = 1) {
  return deep > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, deep - 1) : val), [])
    : arr.slice();
}
console.time('test flat concat')
console.log(flatDeep(flatArray, Infinity));
console.timeEnd('test flat concat')
