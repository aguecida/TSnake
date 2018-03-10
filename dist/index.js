"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var snake_1 = require("./snake");
var food_1 = require("./food");
var drawer_1 = require("./drawer");
var compass_1 = require("./compass");
var pit = document.getElementById('snake-pit');
drawer_1.Drawer.FillCanvas(Constants.canvasColor);
var snake = snake_1.Snake.Instance;
snake.Create();
var food = new food_1.Food();
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