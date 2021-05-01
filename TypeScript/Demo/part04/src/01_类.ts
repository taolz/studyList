//  用 class 关键字来定义类
class Person {
    // 实例属性；通过实例访问
    name = 'lin';
    age = 18;
    // 静态方法 static开头，通过类访问
    static address = 'china'

    // 方法
    sayHi() {
        console.log('hi')
    }
}

const per = new Person()
console.log(per)
console.log(per.name)
console.log(per.age)
// console.log(per.address) 报错
console.log(Person.address)
per.sayHi()
