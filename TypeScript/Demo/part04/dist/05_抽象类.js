"use strict";
(function () {
    /**
     * 抽象类：abstract开头，不能用来创建对象
     * 专门用来继承
     * 可以添加抽象方法
     * */
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        sayHello() {
            console.log('汪汪汪汪');
        }
    }
    const dog = new Dog('a');
    dog.sayHello();
})();
