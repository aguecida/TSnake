"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Drawer = /** @class */ (function () {
    function Drawer() {
    }
    Drawer.ClearCanvas = function () {
        Drawer.context.fillStyle = Constants.canvasColor;
        Drawer.context.fillRect(0, 0, Drawer.canvas.width, Drawer.canvas.height);
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
exports.Drawer = Drawer;
//# sourceMappingURL=drawer.js.map