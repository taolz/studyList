"use strict";
(function f() {
    class Person {
        constructor(name, age, tel) {
            this.name = name;
            this.__age = age;
            this._tel = tel;
        }
        //    属性存取器 getter、setter
        get age() {
            return this.__age;
        }
        set age(value) {
            this.__age = value;
        }
    }
    const per = new Person('a', 18, 222);
    per.name = 'cc';
    per.age = 11;
    console.log(per);
})();
