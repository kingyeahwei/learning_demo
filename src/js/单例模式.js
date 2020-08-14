// 单例模式(懒汉式)
let shopCar = (function () {
    let instance;
    function init() {
        return {
            buy(good) {
                this.goods.push(good)
            },
            goods: []
        }
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = init()
            }
            return instance
        }
    }

})()
let car1 = shopCar.getInstance();
let car2 = shopCar.getInstance();
car1.buy('橘子')
car2.buy('苹果')
console.log(car1.goods)
console.log(car1 === car2)

// 单例模式(饿汉式)
let shopCar = (function () {
    let instance = init()
    function init() {
        return {
            buy(good) {
                this.goods.push(good)
            },
            goods: []
        }
    }
    return {
        getInstance: function () {
            return instance
        }
    }
})()

let car1 = shopCar.getInstance()
let car2 = shopCar.getInstance()
car1.buy('橘子')
car2.buy('苹果')
console.log(car1.goods)
console.log(car2.goods)
console.log(car1 === car2)
