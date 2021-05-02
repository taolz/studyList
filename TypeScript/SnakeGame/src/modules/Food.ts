class Food {
    // 食物对应的元素
    element: HTMLElement;
    constructor() {
        // 在此项目中一定能取到，所以不做判断
        this.element = document.getElementById('food')!;
    }

    //  获取食物坐标
    get X() {
        return this.element.offsetLeft;
    }

    get Y() {
        return this.element.offsetTop;
    }

    // 修改食物位置
    change() {
        // 食物范围 0~290
        let top = Math.floor(Math.random() * 29) * 10;
        let left = Math.floor(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

export default Food;