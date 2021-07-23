import { array } from "./index.js";

// 参数(target, startIndex, endIndex) 把target开始 替换成startIndex - endIndex(不包含) 
// 并且不改变数组长度 若endindex - startIndex > .length - target  则endIndex截止于/.length
// target 复制序列到该位置。如果是负数，target 将从末尾开始计算。
// 开始复制元素的起始位置。如果是负数，startIndex 将从末尾开始计算。
// 如果 startIndex 被忽略，copyWithin 将会从0开始复制。
// 如果 startIndex 为负，则其指定的索引位置等同于 .length + startIndex，endIndex也是如此。
// endIndex 开始复制元素的结束位置。copyWithin 将会拷贝到该位置，但不包括 endIndex 这个位置的元素。
// 如果是负数， end 将从末尾开始计算。
// 如果 endIndex 被忽略，copyWithin 方法将会一直复制至数组结尾（默认为 arr.length）。
const array1 = ['a', 'b', 'c']
console.log(array1.copyWithin(0,1,-1));