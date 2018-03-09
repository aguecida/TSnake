"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Snake = /** @class */ (function () {
    function Snake() {
    }
    Object.defineProperty(Snake, "Instance", {
        get: function () {
            return this._instance || (this._instance = new Snake());
        },
        enumerable: true,
        configurable: true
    });
    Snake.Grow = function () {
    };
    Snake.Move = function () {
        console.log('MOVING');
    };
    return Snake;
}());
exports.Snake = Snake;
//# sourceMappingURL=snake.js.map