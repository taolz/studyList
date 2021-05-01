(function () {
    /**
     *  接口用来定义一个类结构
     * 一个类中应该包含哪些属性和方法
     * 也可以当成类型声明去使用
     * */
    interface myInterface {
        name: string
        age: number
    }

    interface myInterface {
        gender: string;
    }

    const obj: myInterface = {
        name: 'sss',
        age: 1,
        gender: '男'
    }

    /**
     *  接口中的所有的属性都不能有实际的值
     *   接口只定义对象的结构，而不考虑实际值
     *    接口中所有的方法都是抽象方法
     * */

    interface myInter {
        name: string

        sayHello(): void
    }

    /*
        *   实现接口就是使类满足接口的要求
        * */

    class Dog implements myInter {
        name: string

        constructor(name: string) {
            this.name = name;
        }

        sayHello() {
            console.log('汪汪汪汪')
        }
    }

    const dog = new Dog('a')
    dog.sayHello()
})()