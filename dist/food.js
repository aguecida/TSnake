"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var drawer_1 = __importDefault(require("./drawer"));
var Food = /** @class */ (function () {
    function Food(coordinates) {
        this.coordinates = coordinates;
        this.color = '#e85a5a';
        drawer_1.default.DrawSquare(this.coordinates, this.color);
    }
    Object.defineProperty(Food.prototype, "Coordinates", {
        get: function () {
            return this.coordinates;
        },
        enumerable: true,
        configurable: true
    });
    return Food;
}());
exports.default = Food;
//# sourceMappingURL=food.js.map