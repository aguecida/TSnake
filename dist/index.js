"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var snake_1 = require("./snake");
var food_1 = require("./food");
var snake = snake_1.Snake.Instance;
console.log(Constants.fps);
snake.Create();
var food = new food_1.Food();
food.Create();
setInterval(function () {
    snake.Move();
}, 70);
//# sourceMappingURL=index.js.map