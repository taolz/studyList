//类型声明
var num;
num = 10;
num = 20;
// num = 'test' // 报错
var b;
b = 'hello';
// b = 33
var c = false;
var d = true;
d = false;
function sum(a, b) {
    return a + b;
}
var res = sum(3, 4);
// 直接用自变量进行类型声明
var a;
a = 10;
// 用 | 联合类型
var one;
// any 表示任意类型，相当于关闭了ts 类型检测
// 不推荐使用
// let e: any
// 不指定类型，解析器会自动判断类型为 any（隐式
var ad;
ad = 10;
ad = 'str';
// unknown 未知类型
var aa;
aa = 10;
aa = 'str';
