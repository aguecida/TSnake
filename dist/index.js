"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var snake_1 = require("./snake");
var food_1 = require("./food");
snake_1.Snake.Instance;
console.log(Constants.fps);
var pit = document.getElementById('snake-pit');
var context = pit.getContext('2d');
snake_1.Snake.Create(context);
var food = new food_1.Food();
food.Draw(context);
setInterval(function () {
    snake_1.Snake.Move(context);
}, 100);
//# sourceMappingURL=index.js.map