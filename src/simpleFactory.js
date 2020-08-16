"use strict";
/*
 * @Descripttion :
 * @version      :
 * @Author       : tky
 * @Date         : 2020-07-31 12:23:52
 * @LastEditors  : tky
 * @LastEditTime : 2020-07-31 13:28:30
 */
// 具体产品一
var ConcreteProduct1 = /** @class */ (function () {
    function ConcreteProduct1() {
    }
    return ConcreteProduct1;
}());
// 具体产品二
var ConcreteProduct2 = /** @class */ (function () {
    function ConcreteProduct2() {
    }
    return ConcreteProduct2;
}());
var SimpleFactory = /** @class */ (function () {
    function SimpleFactory() {
    }
    SimpleFactory.createProduct = function (type) {
        var product = null;
        // 通过type选择对应的模式进行创建对象
        if (type === 1) {
            product = new ConcreteProduct1();
        }
        else if (type === 2) {
            product = new ConcreteProduct2();
        }
        return product;
    };
    return SimpleFactory;
}());
var product = SimpleFactory.createProduct(1);
console.log(product);
/***
 * 简单工厂模式(simplefactory): 定义一个创建对象的类，由这个类来封装实例化对象的行为
 * advangtage: 用户类与具体自雷解耦;客户类不需要知道所有子类细节
 * disadvangtage: 工厂类职责;增加工厂类增加了系统的复杂度;系统扩展困难（会修改工厂逻辑）
 *
 * 应用长江
*/ 
