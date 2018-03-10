"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Drawer = /** @class */ (function () {
    function Drawer() {
    }
    Drawer.FillCanvas = function (color) {
        for (var i = 0; i < Constants.canvasHeight; i += Constants.blockSize) {
            for (var j = 0; j < Constants.canvasWidth; j += Constants.blockSize) {
                Drawer.DrawSquare({ x: j, y: i }, color);
            }
        }
    };
    Drawer.DrawSquare = function (_a, color) {
        var x = _a.x, y = _a.y;
        Drawer.context.fillStyle = color;
        Drawer.context.fillRect(x, y, Constants.blockSize, Constants.blockSize);
    };
    Drawer.canvas = document.getElementById('snake-pit');
    Drawer.context = Drawer.canvas.getContext('2d');
    return Drawer;
}());
exports.default = Drawer;
//# sourceMappingURL=drawer.js.map