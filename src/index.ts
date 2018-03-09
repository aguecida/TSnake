import { Snake } from './snake';
import { Food } from './food';
import { Drawer } from './drawer';

let snake = Snake.Instance;

console.log(Constants.fps)

snake.Create();

var food = new Food();
food.Create();

setInterval(() => {
    snake.Move();
}, 70);
