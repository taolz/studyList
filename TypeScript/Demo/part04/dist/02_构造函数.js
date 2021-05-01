"use strict";
class Dog {
    // 构造函数，在对象被创建时调用
    constructor(name, age) {
        //this 当前实例
        this.name = name;
        this.age = age;
    }
    a() {
        console.log(this.name);
    }
}
const dog = new Dog('xiaohei', 4);
const dog2 = new Dog('xiaobai', 8);
console.log(dog);
console.log(dog2);
dog2.a();
