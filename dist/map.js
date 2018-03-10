"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=map.js.map