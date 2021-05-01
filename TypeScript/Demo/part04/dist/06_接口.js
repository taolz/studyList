"use strict";
(function () {
    const obj = {
        name: 'sss',
        age: 1,
        gender: '男'
    };
    /*
        *   实现接口就是使类满足接口的要求
        * */
    class Dog {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('汪汪汪汪');
        }
    }
    const dog = new Dog('a');
    dog.sayHello();
})();
