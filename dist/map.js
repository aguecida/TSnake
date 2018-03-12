"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var Constants = __importStar(require("./constants"));
function getRandomCoordinates() {
    var x = Math.floor(Math.random() * Constants.canvasWidth / Constants.blockSize) * Constants.blockSize;
    var y = Math.floor(Math.random() * Constants.canvasHeight / Constants.blockSize) * Constants.blockSize;
    return { x: x, y: y };
}
exports.getRandomCoordinates = getRandomCoordinates;
function hasCollision(newElement, existingElements) {
    return existingElements.some(function (element) {
        return element.x === newElement.x && element.y === newElement.y;
    });
}
exports.hasCollision = hasCollision;
function outOfBounds(_a) {
    var x = _a.x, y = _a.y;
    return x >= Constants.canvasWidth || x < 0 || y >= Constants.canvasHeight || y < 0;
}
exports.outOfBounds = outOfBounds;
function getCenterCoordinates() {
    return { x: Constants.canvasWidth / 2, y: Constants.canvasHeight / 2 };
}
exports.getCenterCoordinates = getCenterCoordinates;
//# sourceMappingURL=map.js.map