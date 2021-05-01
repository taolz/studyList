(function () {
    class Animal {
        name: string;

        constructor(name: string) {
            this.name = name
        }

        say() {
            console.log('hi')
        }
    }

    class Dog extends Animal {
        age: number;

        // 子类中写了构造函数，那么必须在构造函数中对父类构造函数进行调用
        constructor(name: string, age: number) {
            super(name);
            this.age = age
        }

        say() {
            //super 表示当前类的父类
            super.say()
            console.log('汪汪')
        }
    }

    const dog = new Dog('haha', 20)
    console.log(dog)
    dog.say()
})()