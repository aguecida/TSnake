import { Direction } from './compass';
import { getRandomCoordinates, hasCollision, Coordinates, outOfBounds } from './map';
import Snake from './snake';
import Food from './food';
import Drawer from './drawer';
import * as Constants from './constants';
import * as ScoreCard from './scorecard';

const snake: Snake = Snake.Instance;
let food: Food;
let gameOver = true;

initializeBoard();

function start() {
    gameOver = false;
    ScoreCard.newGame();
    snake.Create();
    food = new Food();

    var interval = setInterval(() => {
        snake.Move();
    
        if (outOfBounds(snake.Head) || snake.HasCollisionWithSelf()) {
            Drawer.FillCanvas(Constants.canvasColor);
            clearInterval(interval);
            gameOver = true;
        }
    
        if (hasCollision(food.Coordinates, snake.Body)) {
            ScoreCard.incrementScore();
            snake.Grow();
            food = new Food();
        }
    }, 50);
}

function initializeBoard () {
    ScoreCard.newGame();

    let pit = document.getElementById('snake-pit') as HTMLElement;

    const height = new Number(Constants.canvasHeight);
    pit.setAttribute('height', height.toString());
    
    const width = new Number(Constants.canvasWidth);
    pit.setAttribute('width', width.toString());
    
    pit.setAttribute('tabindex', '1');
    pit.focus();
    
    pit.onkeydown = (e: KeyboardEvent) => {
        if (gameOver) {
            start();
            return;
        }
    
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

    Drawer.FillCanvas(Constants.canvasColor);
}