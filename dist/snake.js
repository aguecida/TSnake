"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var map_1 = require("./map");
var compass_1 = require("./compass");
var drawer_1 = __importDefault(require("./drawer"));
var Constants = __importStar(require("./constants"));
var Snake = /** @class */ (function () {
    function Snake() {
        this.body = [];
        this.color = '#6fda6f';
        this.initialLength = 3;
        this.startingPosition = map_1.getCenterCoordinates();
        this.direction = compass_1.Direction.Up;
        this.directionQueue = [];
    }
    Object.defineProperty(Snake.prototype, "Body", {
        get: function () {
            return this.body;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Snake.prototype, "Head", {
        get: function () {
            return this.body[0];
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
        this.body = [];
        this.direction = compass_1.Direction.Up;
        for (var i = 0; i < this.initialLength; i++) {
            var newElement = { x: this.startingPosition.x, y: this.startingPosition.y + i * Constants.blockSize };
            this.body.push(newElement);
            drawer_1.default.DrawSquare(newElement, this.color);
        }
    };
    Snake.prototype.Move = function () {
        var tail = this.body.pop();
        if (this.directionQueue.length > 0)
            this.direction = this.directionQueue.shift();
        switch (this.direction) {
            case compass_1.Direction.Up:
                this.body.unshift({ x: this.body[0].x, y: this.body[0].y - Constants.blockSize });
                break;
            case compass_1.Direction.Down:
                this.body.unshift({ x: this.body[0].x, y: this.body[0].y + Constants.blockSize });
                break;
            case compass_1.Direction.Left:
                this.body.unshift({ x: this.body[0].x - Constants.blockSize, y: this.body[0].y });
                break;
            case compass_1.Direction.Right:
                this.body.unshift({ x: this.body[0].x + Constants.blockSize, y: this.body[0].y });
                break;
        }
        drawer_1.default.DrawSquare(tail, Constants.canvasColor);
        drawer_1.default.DrawSquare(this.body[0], this.color);
    };
    Snake.prototype.Grow = function () {
        var tail = this.body[this.body.length - 1];
        var prev = this.body[this.body.length - 2];
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
        this.body.push(newTail);
        drawer_1.default.DrawSquare(newTail, this.color);
    };
    Snake.prototype.ChangeDirection = function (newDirection) {
        var lastDirection = this.directionQueue.length > 0 ? this.directionQueue[this.directionQueue.length - 1] : this.direction;
        if (compass_1.isOppositeDirection(lastDirection, newDirection))
            return;
        this.directionQueue.push(newDirection);
    };
    Snake.prototype.HasCollisionWithSelf = function () {
        for (var i = 1; i < this.body.length; i++) {
            if (this.Head.x === this.body[i].x && this.Head.y === this.body[i].y) {
                return true;
            }
        }
        return false;
    };
    return Snake;
}());
exports.default = Snake;
//# sourceMappingURL=snake.js.map