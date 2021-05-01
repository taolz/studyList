// object 表示一个对象
let a: object
a = {}
a = function () {
}

// {} 指定对象有哪些属性
// ？表示属性可选
let b: { name: string, age?: number }
// b = {age: 10}
b = {name: 'lin', age: 18}
b = {name: 'lin'}

// [prop: string]: any => 属性名为 string 的任意类型属性
let c: { name: string, [prop: string]: any }
c = {name: 'li', age: 20, gender: "男"}

// 函数
let d: (a: number, b: number) => number
// d = function (n1: string, n2: string): number {
//     return 10;
// }

// 数组
// 字符串数组
let e: string[]
e = ['a', 'b', 'c']
// 数值数组
let f: Array<number>
f = [1, 2, 3]

// 元组:固定了长度的数组
let h: [string, number]
h = ['a', 2]

// 枚举
enum Gender {
    male,
    felma
}

let i: { name: string, gender: Gender }
i = {
    name: '来',
    gender: Gender.felma
}
// & 同时
let j: { name: string } & { age: number }
// j = {name: 'a'}

// 类型别名
type s = string
let k: s
k = 'asd'