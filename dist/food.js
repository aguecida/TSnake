"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var map_1 = require("./map");
var drawer_1 = __importDefault(require("./drawer"));
var snake_1 = __importDefault(require("./snake"));
var Food = /** @class */ (function () {
    function Food() {
        this.color = '#e85a5a';
        this.coordinates = map_1.getRandomCoordinates();
        while (map_1.hasCollision(this.coordinates, snake_1.default.Instance.Body)) {
            this.coordinates = map_1.getRandomCoordinates();
        }
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