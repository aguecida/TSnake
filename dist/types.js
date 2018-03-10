"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomCoordinates() {
    var x = Math.floor(Math.random() * Constants.canvasWidth / Constants.blockSize) * Constants.blockSize;
    var y = Math.floor(Math.random() * Constants.canvasHeight / Constants.blockSize) * Constants.blockSize;
    return { x: x, y: y };
}
exports.getRandomCoordinates = getRandomCoordinates;
//# sourceMappingURL=types.js.map