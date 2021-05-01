"use strict";
(function () {
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        say() {
            console.log('hi');
        }
    }
    class Dog extends Animal {
        run() {
            console.log(`${this.name} is run~`);
        }
        say() {
            console.log('汪汪');
        }
    }
    class Cat extends Animal {
        say() {
            console.log('miao');
        }
    }
    const dog = new Dog('haha', 20);
    const cat = new Cat('ahah', 11);
    console.log(dog);
    dog.run();
    dog.say();
    console.log(cat);
    cat.say();
})();
