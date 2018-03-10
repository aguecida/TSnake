import { Snake } from './snake';
import { Food } from './food';
import { Drawer } from './drawer';
import { Direction } from './direction';


let pit = document.getElementById('snake-pit') as HTMLElement;



Drawer.FillCanvas(Constants.canvasColor);


let snake = Snake.Instance;

console.log(Constants.fps)

snake.Create();

var food = new Food();
food.Create();

setInterval(() => {
    snake.Move();
}, 70);

pit.setAttribute('tabindex', '1');
pit.focus();

pit.onkeydown = (e: KeyboardEvent) => {
    switch(e.keyCode) {
        case Direction.Up:
            snake.ChangeDirection(Direction.Up);
            break;
        case Direction.Down:
            snake.ChangeDirection(Direction.Down);
            break;
        case Direction.Left:
            snake.ChangeDirection(Direction.Left);
            break;
        case Direction.Right:
            snake.ChangeDirection(Direction.Right);
            break;
    }
};
