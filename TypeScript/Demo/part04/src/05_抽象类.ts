(function () {
    /**
     * 抽象类：abstract开头，不能用来创建对象
     * 专门用来继承
     * 可以添加抽象方法
     * */
    abstract class Animal {
        name: string

        constructor(name: string) {
            this.name = name
        }

        //    抽象方法 abstract开头，没有方法体
        //    抽象方法只能在抽象类中定义，子类必须重写抽象方法
        abstract sayHello(): void
    }

    class Dog extends Animal {
        sayHello() {
            console.log('汪汪汪汪')
        }
    }

    const dog = new Dog('a')
    dog.sayHello()
})()