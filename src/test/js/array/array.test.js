import { expect } from "@jest/globals";
import {
    array
} from "./index.js";

test('验证array的值', () => {
    expect(array[0].name).toBe('小明')
})

test('验证年龄是否均小于100', () => {
    array.forEach(item => {
        expect(item.age < 100).toBeTruthy()
    })
})

let mapArray = array.map(item => {
    return {...item}
})
test('验证map 得到的数组与原数组是结构匹配', () => {
    expect(mapArray).toEqual(array)
})

// 测试浮点数
// test('验证0.1 + 0.2 = 0.3 ', () => {
//     expect(0.1 + 0.2).toBe(0.3)
// })

test('验证0.1 + 0.2 closeto= 0.3 ', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3)
})
