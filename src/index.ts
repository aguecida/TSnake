import { Snake } from './snake';
import { Food } from './food';
import { Drawer } from './drawer';

let snake = Snake.Instance;

console.log(Constants.fps)

const pit = document.getElementById('snake-pit') as HTMLCanvasElement;
const context = pit.getContext('2d') as CanvasRenderingContext2D;

snake.Create(context);

var food = new Food();
food.Draw(context);

setInterval(() => {
    snake.Move(context);
}, 70);
