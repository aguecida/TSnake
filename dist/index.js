"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var snake_1 = __importDefault(require("./snake"));
var food_1 = __importDefault(require("./food"));
var drawer_1 = __importDefault(require("./drawer"));
var compass_1 = require("./compass");
var pit = document.getElementById('snake-pit');
drawer_1.default.FillCanvas(Constants.canvasColor);
var snake = snake_1.default.Instance;
snake.Create();
var food = new food_1.default();
setInterval(function () {
    snake.Move();
}, 1000);
pit.setAttribute('tabindex', '1');
pit.focus();
pit.onkeydown = function (e) {
    switch (e.keyCode) {
        case compass_1.Direction.Up:
            snake.ChangeDirection(compass_1.Direction.Up);
            break;
        case compass_1.Direction.Down:
            snake.ChangeDirection(compass_1.Direction.Down);
            break;
        case compass_1.Direction.Left:
            snake.ChangeDirection(compass_1.Direction.Left);
            break;
        case compass_1.Direction.Right:
            snake.ChangeDirection(compass_1.Direction.Right);
            break;
    }
};
//# sourceMappingURL=index.js.map