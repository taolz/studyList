import {hi} from './m1'

function sum(a: number, b: number): number {
    return a + b
}

var obj = {name: "lin", age: 33}
console.log(obj)
obj.age = 18
console.log(obj)
console.log(sum(1, 2))
console.log('haha')
console.log(hi)
let fn = (a: number, b: number) => a + b
fn(3, 4)