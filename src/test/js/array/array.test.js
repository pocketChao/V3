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