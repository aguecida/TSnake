"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var drawer_1 = require("./drawer");
var Snake = /** @class */ (function () {
    function Snake() {
        this.color = '#6fda6f';
        this.initialLength = 3;
        this.blockSize = 10;
        this.coordinates = [];
        this.startingHead = { x: 600 / 2, y: 400 / 2 };
    }
    Object.defineProperty(Snake, "Instance", {
        get: function () {
            return this._instance || (this._instance = new Snake());
        },
        enumerable: true,
        configurable: true
    });
    Snake.prototype.Create = function (context) {
        this.coordinates = [];
        for (var i = 0; i < this.initialLength; i++) {
            this.coordinates.push({ x: this.startingHead.x, y: this.startingHead.y + i * this.blockSize });
            context.fillStyle = this.color;
            context.fillRect(this.startingHead.x, this.startingHead.y + i * this.blockSize, this.blockSize, this.blockSize);
        }
    };
    Snake.prototype.Move = function (context) {
        var tail = this.coordinates.pop();
        this.coordinates.unshift({ x: this.coordinates[0].x, y: this.coordinates[0].y - this.blockSize });
        drawer_1.Drawer.DrawSquare(tail, Constants.canvasColor);
        drawer_1.Drawer.DrawSquare(this.coordinates[0], this.color);
    };
    return Snake;
}());
exports.Snake = Snake;
//# sourceMappingURL=snake.js.map