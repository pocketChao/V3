import { array } from "./index.js";

const array1 = [{name: '刘能', age: 53, sex: 1}]
const array2 = [{name: '英子', age: 35, sex: 2}]
const newArray = array.concat(array1, array2)
console.log(newArray)