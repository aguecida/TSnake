"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var drawer_1 = require("./drawer");
var Snake = /** @class */ (function () {
    function Snake() {
        this.color = '#6fda6f';
        this.initialLength = 3;
        this.coordinates = [];
        this.startingPosition = { x: 600 / 2, y: 400 / 2 };
    }
    Object.defineProperty(Snake, "Instance", {
        get: function () {
            return this._instance || (this._instance = new Snake());
        },
        enumerable: true,
        configurable: true
    });
    Snake.prototype.Create = function () {
        this.coordinates = [];
        for (var i = 0; i < this.initialLength; i++) {
            var newElement = { x: this.startingPosition.x, y: this.startingPosition.y + i * Constants.blockSize };
            this.coordinates.push(newElement);
            drawer_1.Drawer.DrawSquare(newElement, this.color);
        }
    };
    Snake.prototype.Move = function () {
        var tail = this.coordinates.pop();
        this.coordinates.unshift({ x: this.coordinates[0].x, y: this.coordinates[0].y - Constants.blockSize });
        drawer_1.Drawer.DrawSquare(tail, Constants.canvasColor);
        drawer_1.Drawer.DrawSquare(this.coordinates[0], this.color);
    };
    return Snake;
}());
exports.Snake = Snake;
//# sourceMappingURL=snake.js.map