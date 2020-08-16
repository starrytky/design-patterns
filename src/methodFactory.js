"use strict";
/*
 * @Descripttion :
 * @version      :
 * @Author       : tky
 * @Date         : 2020-07-31 18:07:50
 * @LastEditors  : tky
 * @LastEditTime : 2020-08-01 00:04:27
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 具体产品一
var ConcretePrduct_1 = /** @class */ (function () {
    function ConcretePrduct_1() {
    }
    ConcretePrduct_1.prototype.method1 = function () {
    };
    ConcretePrduct_1.prototype.method2 = function () {
    };
    return ConcretePrduct_1;
}());
// 具体产品二
var ConcretePrduct_2 = /** @class */ (function () {
    function ConcretePrduct_2() {
    }
    ConcretePrduct_2.prototype.method1 = function () {
    };
    ConcretePrduct_2.prototype.method2 = function () {
    };
    return ConcretePrduct_2;
}());
// 抽象工厂 
var Creator = /** @class */ (function () {
    function Creator() {
    }
    return Creator;
}());
// 具体工厂 
var ConcreteCreator = /** @class */ (function (_super) {
    __extends(ConcreteCreator, _super);
    function ConcreteCreator() {
        return _super.call(this) || this;
    }
    ConcreteCreator.prototype.createProduct = function (type) {
        var product = null;
        if (type === 1) {
            product = new ConcreteProduct1();
        }
        else if (type === 2) {
            product = new ConcreteProduct2();
        }
        return product;
    };
    return ConcreteCreator;
}(Creator));
var creator = new ConcreteCreator(1);
var myProduct = creator.createProduct(1);
