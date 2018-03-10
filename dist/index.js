"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var snake_1 = require("./snake");
var food_1 = require("./food");
var drawer_1 = require("./drawer");
var direction_1 = require("./direction");
var pit = document.getElementById('snake-pit');
drawer_1.Drawer.FillCanvas(Constants.canvasColor);
var snake = snake_1.Snake.Instance;
console.log(Constants.fps);
snake.Create();
var food = new food_1.Food();
food.Create();
setInterval(function () {
    snake.Move();
}, 70);
pit.setAttribute('tabindex', '1');
pit.focus();
pit.onkeydown = function (e) {
    switch (e.keyCode) {
        case direction_1.Direction.Up:
            snake.ChangeDirection(direction_1.Direction.Up);
            break;
        case direction_1.Direction.Down:
            snake.ChangeDirection(direction_1.Direction.Down);
            break;
        case direction_1.Direction.Left:
            snake.ChangeDirection(direction_1.Direction.Left);
            break;
        case direction_1.Direction.Right:
            snake.ChangeDirection(direction_1.Direction.Right);
            break;
    }
};
//# sourceMappingURL=index.js.map