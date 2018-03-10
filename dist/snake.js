"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var drawer_1 = require("./drawer");
var compass_1 = require("./compass");
var Snake = /** @class */ (function () {
    function Snake() {
        this.coordinates = [];
        this.color = '#6fda6f';
        this.initialLength = 3;
        this.startingPosition = { x: Constants.canvasWidth / 2, y: Constants.canvasHeight / 2 };
        this.direction = compass_1.Direction.Up;
    }
    Object.defineProperty(Snake.prototype, "Coordinates", {
        get: function () {
            return this.coordinates;
        },
        enumerable: true,
        configurable: true
    });
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
        switch (this.direction) {
            case compass_1.Direction.Up:
                this.coordinates.unshift({ x: this.coordinates[0].x, y: this.coordinates[0].y - Constants.blockSize });
                break;
            case compass_1.Direction.Down:
                this.coordinates.unshift({ x: this.coordinates[0].x, y: this.coordinates[0].y + Constants.blockSize });
                break;
            case compass_1.Direction.Left:
                this.coordinates.unshift({ x: this.coordinates[0].x - Constants.blockSize, y: this.coordinates[0].y });
                break;
            case compass_1.Direction.Right:
                this.coordinates.unshift({ x: this.coordinates[0].x + Constants.blockSize, y: this.coordinates[0].y });
                break;
        }
        drawer_1.Drawer.DrawSquare(tail, Constants.canvasColor);
        drawer_1.Drawer.DrawSquare(this.coordinates[0], this.color);
    };
    Snake.prototype.Grow = function () {
        var tail = this.coordinates[this.coordinates.length - 1];
        var prev = this.coordinates[this.coordinates.length - 2];
        var newTail;
        if (tail.x > prev.x) {
            newTail = { x: tail.x + Constants.blockSize, y: tail.y };
        }
        else if (tail.x < prev.x) {
            newTail = { x: tail.x - Constants.blockSize, y: tail.y };
        }
        else if (tail.y > prev.y) {
            newTail = { x: tail.x, y: tail.y + Constants.blockSize };
        }
        else {
            newTail = { x: tail.x, y: tail.y - Constants.blockSize };
        }
        this.coordinates.push(newTail);
        drawer_1.Drawer.DrawSquare(newTail, this.color);
    };
    Snake.prototype.ChangeDirection = function (newDirection) {
        if (compass_1.isOppositeDirection(this.direction, newDirection))
            return;
        this.direction = newDirection;
    };
    return Snake;
}());
exports.Snake = Snake;
//# sourceMappingURL=snake.js.map