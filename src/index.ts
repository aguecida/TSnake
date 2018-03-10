import { Direction } from './compass';
import { getRandomCoordinates, hasCollision, Coordinates, outOfBounds } from './map';
import Snake from './snake';
import Food from './food';
import Drawer from './drawer';
import * as Constants from './constants';
import * as ScoreCard from './scorecard';

ScoreCard.newGame();

let pit = document.getElementById('snake-pit') as HTMLElement;

const height = new Number(Constants.canvasHeight);
pit.setAttribute('height', height.toString());

const width = new Number(Constants.canvasWidth);
pit.setAttribute('width', width.toString());

Drawer.FillCanvas(Constants.canvasColor);

const snake = Snake.Instance;
snake.Create();


let food = new Food();

var interval = setInterval(() => {
    snake.Move();

    if (outOfBounds(snake.Head) || snake.HasCollisionWithSelf()) {
        Drawer.FillCanvas(Constants.canvasColor);
        clearInterval(interval);
    }

    

    if (hasCollision(food.Coordinates, snake.Body)) {
        ScoreCard.incrementScore();
        snake.Grow();
        food = new Food();
    }
}, 50);

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
