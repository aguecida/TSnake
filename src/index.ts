import Snake from './snake';
import Food from './food';
import Drawer from './drawer';
import { Direction } from './compass';
import { getRandomCoordinates, Coordinates } from './types';

let pit = document.getElementById('snake-pit') as HTMLElement;

Drawer.FillCanvas(Constants.canvasColor);

let snake = Snake.Instance;

snake.Create();

let coordinates: Coordinates = getRandomCoordinates();
var food = new Food(coordinates);

setInterval(() => {
    snake.Move();
}, 1000);

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
