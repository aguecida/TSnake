"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var drawer_1 = require("./drawer");
var Food = /** @class */ (function () {
    function Food() {
        this.color = '#e85a5a';
    }
    Food.prototype.Create = function () {
        var coordinates = { x: 10, y: 10 };
        drawer_1.Drawer.DrawSquare(coordinates, this.color);
    };
    return Food;
}());
exports.Food = Food;
//# sourceMappingURL=food.js.map