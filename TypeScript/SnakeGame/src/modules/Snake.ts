class Snake {
    // 蛇头
    head: HTMLElement;
    // 蛇的身体（包括蛇头
    bodies: HTMLCollection;
    // 容器
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake>div') as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    // 获取蛇头的位置
    get X() {
        return this.head.offsetLeft;
    }

    get Y() {
        return this.head.offsetTop;
    }

    // 设置蛇头的坐标
    set X(value) {
        if (this.X === value) {
            return;
        }
        // x的范围在0~290
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了！');
        }
        // 禁止水平方向掉头，有第二节身体且蛇头坐标与其坐标相等时发生了掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                // 此时试图往右走，禁止继续让其往左走
                value = this.X - 10;
            } else {
                value = this.X + 10;
            }
        }
        this.moveBody();
        // 移动蛇头
        this.head.style.left = value + 'px';
        this.checkHeadBody();
    }

    set Y(value) {
        if (this.Y === value) {
            return;
        }
        // Y的范围在0~290
        if (value < 0 || value > 290) {
            throw new Error('蛇撞墙了！');
        }
        // 禁止上下方向掉头，有第二节身体且蛇头坐标与其坐标相等时发生了掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10;
            } else {
                value = this.Y + 10;
            }
        }
        this.moveBody();
        // 移动蛇头
        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }

    // 增加身体
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }

    // 移动身体
    moveBody() {
        /**
         * 思路：后一节坐标设为前一节坐标
         * */
        for (let i = this.bodies.length - 1; i > 0; i--) {
            // 前一节身体的坐标
            let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
            // 前一节身体的坐标赋值给当前节
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    // 检查有没有撞到自己
    checkHeadBody() {
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i] as HTMLElement;
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                // 此时蛇头撞到了身体
                throw new Error('撞到自己了！');
            }
        }
    }
}

export default Snake;