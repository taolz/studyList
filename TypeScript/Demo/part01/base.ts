//类型声明
let num: number
num = 10
num = 20
// num = 'test' // 报错

let b: string
b = 'hello'
// b = 33

let c: boolean = false

let d = true
d = false

function sum(a: number, b: number): number {
    return a + b;
}

let res = sum(3, 4)

// 直接用自变量进行类型声明
let a: 10;
a = 10

// 用 | 联合类型
let one: boolean | string

// any 表示任意类型，相当于关闭了ts 类型检测
// 不推荐使用
// let e: any

// 不指定类型，解析器会自动判断类型为 any（隐式
let ad
ad = 10
ad = 'str'

// unknown 未知类型
let aa: unknown
aa = 10
aa = 'str'

let s: string
// s = e
// unknown 不能被赋给其他值，相当于一个类型安全的any
// s = aa

//类型断言，告诉解析器变量实际类型,不推荐第二种
s = aa as string
s = <string>aa

// void表示无返回值的函数
function fn(): void {
}

// never 表示不会返回结果
function f(): never {
    throw new Error('aa')
}
