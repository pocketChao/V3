// findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
import{
    array
}from './index.js'

console.log(array.findIndex((item) => item.sex === 1))

// findIndex不会修改所调用的数组。