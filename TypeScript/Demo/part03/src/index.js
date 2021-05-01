import { hi } from './m1';
function sum(a, b) {
    return a + b;
}
var obj = { name: "lin", age: 33 };
console.log(obj);
obj.age = 18;
console.log(obj);
console.log(sum(1, 2));
console.log('haha');
console.log(hi);
let fn = (a, b) => a + b;
fn(3, 4);
