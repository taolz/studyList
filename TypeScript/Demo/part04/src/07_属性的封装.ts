(function f() {
    class Person {
        // 任意位置都能访问修改
        public name: string;
        // 只能在类的内部访问修改
        private __age: number;
        //只能在当前类和当前类的子类中访问修改
        protected _tel: number;

        constructor(name: string, age: number, tel: number) {
            this.name = name
            this.__age = age
            this._tel = tel
        }

        //    属性存取器 getter、setter
        get age() {
            return this.__age
        }

        set age(value) {
            this.__age = value
        }
    }

    const per = new Person('a', 18, 222)
    per.name = 'cc'
    per.age = 11
    console.log(per)
})()