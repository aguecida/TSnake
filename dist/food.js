"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var drawer_1 = __importDefault(require("./drawer"));
var Food = /** @class */ (function () {
    function Food() {
        this.color = '#e85a5a';
        this.coordinates = { x: 10, y: 10 };
        drawer_1.default.DrawSquare(this.coordinates, this.color);
    }
    return Food;
}());
exports.default = Food;
//# sourceMappingURL=food.js.map