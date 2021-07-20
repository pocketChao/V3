import {
    array
} from "./index.js";

/* 
map 方法会给原数组中的每个元素都按顺序调用一次  callback 函数。callback 每次执行后的返回值（包括 undefined）组合起来形成一个新数组。 callback 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 delete 删除的索引则不会被调用。

因为map生成一个新数组，当你不打算使用返回的新数组却使用map是违背设计初衷的，请用forEach或者for-of替代。你不该使用map: A)你不打算使用返回的新数组，或/且 B) 你没有从回调函数中返回值。

callback 函数会被自动传入三个参数：数组元素，元素索引，原数组本身。
*/
const mapArray = array.map((item, index, originArray) => {
    return {
        ...item,
        country: 'Dalian'
    }
})
console.log('originArray:', array)
console.log('mapArray', mapArray)