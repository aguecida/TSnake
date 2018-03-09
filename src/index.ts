import { Snake } from './snake';
import { Food } from './food';

Snake.Instance;

console.log(Constants.fps)

const pit = document.getElementById('snake-pit') as HTMLCanvasElement;
const context = pit.getContext('2d') as CanvasRenderingContext2D;

Snake.Create(context);

var food = new Food();
food.Draw(context);

setInterval(() => {
    Snake.Move(context);
}, 100);