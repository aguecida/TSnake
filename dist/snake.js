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
    Snake.Create = function (context) {
        this.coordinates = [];
        for (var i = 0; i < this.initialLength; i++) {
            this.coordinates.push({ x: this.startingHead.x, y: this.startingHead.y + i * this.blockSize });
            context.fillStyle = this.color;
            context.fillRect(this.startingHead.x, this.startingHead.y + i * this.blockSize, this.blockSize, this.blockSize);
        }
    };
    Snake.Draw = function (context) {
        // this.coordinates.forEach(coordinate => {
        // });
        // for (let i = 0; i < this.coordinates.length; i++) {
        //     context.fillStyle = this.color;
        //     context.fillRect(this.head.x * i, this.head.y * i, this.blockSize * i, this.blockSize * i);
        // }
    };
    Snake.Move = function (context) {
        var tail = this.coordinates.pop();
        context.fillStyle = '#555';
        context.fillRect(tail.x, tail.y, this.blockSize, this.blockSize);
        this.coordinates.unshift({ x: this.coordinates[0].x, y: this.coordinates[0].y - this.blockSize });
        context.fillStyle = this.color;
        context.fillRect(this.coordinates[0].x, this.coordinates[0].y, this.blockSize, this.blockSize);
    };
    Snake.color = '#6fda6f';
    Snake.size = 3;
    Snake.initialLength = 3;
    Snake.blockSize = 10;
    Snake.coordinates = [];
    Snake.startingHead = { x: 600 / 2, y: 400 / 2 };
    return Snake;
}());
exports.Snake = Snake;
//# sourceMappingURL=snake.js.map