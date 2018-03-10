"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direction;
(function (Direction) {
    Direction[Direction["Left"] = 37] = "Left";
    Direction[Direction["Up"] = 38] = "Up";
    Direction[Direction["Right"] = 39] = "Right";
    Direction[Direction["Down"] = 40] = "Down";
})(Direction = exports.Direction || (exports.Direction = {}));
function isOppositeDirection(currentDirection, newDirection) {
    switch (currentDirection) {
        case Direction.Up:
            return newDirection === Direction.Down;
        case Direction.Down:
            return newDirection === Direction.Up;
        case Direction.Left:
            return newDirection === Direction.Right;
        case Direction.Right:
            return newDirection === Direction.Left;
        default:
            throw new Error('Invalid input directions');
    }
}
exports.isOppositeDirection = isOppositeDirection;
//# sourceMappingURL=compass.js.map