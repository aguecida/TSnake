"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var drawer_1 = require("./drawer");
var direction_1 = require("./direction");
var Snake = /** @class */ (function () {
    function Snake() {
        this.color = '#6fda6f';
        this.length = 3;
        this.coordinates = [];
        this.startingPosition = { x: Constants.canvasWidth / 2, y: Constants.canvasHeight / 2 };
        this.direction = direction_1.Direction.Up;
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
        for (var i = 0; i < this.length; i++) {
            var newElement = { x: this.startingPosition.x, y: this.startingPosition.y + i * Constants.blockSize };
            this.coordinates.push(newElement);
            drawer_1.Drawer.DrawSquare(newElement, this.color);
        }
    };
    Snake.prototype.Move = function () {
        var tail = this.coordinates.pop();
        switch (this.direction) {
            case direction_1.Direction.Up:
                this.coordinates.unshift({ x: this.coordinates[0].x, y: this.coordinates[0].y - Constants.blockSize });
                break;
            case direction_1.Direction.Down:
                this.coordinates.unshift({ x: this.coordinates[0].x, y: this.coordinates[0].y + Constants.blockSize });
                break;
            case direction_1.Direction.Left:
                this.coordinates.unshift({ x: this.coordinates[0].x - Constants.blockSize, y: this.coordinates[0].y });
                break;
            case direction_1.Direction.Right:
                this.coordinates.unshift({ x: this.coordinates[0].x + Constants.blockSize, y: this.coordinates[0].y });
                break;
        }
        drawer_1.Drawer.DrawSquare(tail, Constants.canvasColor);
        drawer_1.Drawer.DrawSquare(this.coordinates[0], this.color);
    };
    Snake.prototype.Grow = function () {
        this.length += 1;
    };
    Snake.prototype.ChangeDirection = function (newDirection) {
        if (direction_1.isOppositeDirection(this.direction, newDirection))
            return;
        this.direction = newDirection;
    };
    return Snake;
}());
exports.Snake = Snake;
//# sourceMappingURL=snake.js.map