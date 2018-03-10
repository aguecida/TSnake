"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var compass_1 = require("./compass");
var map_1 = require("./map");
var snake_1 = __importDefault(require("./snake"));
var food_1 = __importDefault(require("./food"));
var drawer_1 = __importDefault(require("./drawer"));
var Constants = __importStar(require("./constants"));
var ScoreCard = __importStar(require("./scorecard"));
var snake = snake_1.default.Instance;
var food;
var gameOver = true;
initializeBoard();
function start() {
    gameOver = false;
    ScoreCard.newGame();
    snake.Create();
    food = new food_1.default();
    var interval = setInterval(function () {
        snake.Move();
        if (map_1.outOfBounds(snake.Head) || snake.HasCollisionWithSelf()) {
            drawer_1.default.FillCanvas(Constants.canvasColor);
            clearInterval(interval);
            gameOver = true;
            return;
        }
        if (map_1.hasCollision(food.Coordinates, snake.Body)) {
            ScoreCard.incrementScore();
            snake.Grow();
            food = new food_1.default();
        }
    }, 50);
}
function initializeBoard() {
    ScoreCard.newGame();
    var pit = document.getElementById('snake-pit');
    var height = new Number(Constants.canvasHeight);
    pit.setAttribute('height', height.toString());
    var width = new Number(Constants.canvasWidth);
    pit.setAttribute('width', width.toString());
    pit.setAttribute('tabindex', '1');
    pit.focus();
    pit.onkeydown = function (e) {
        if (gameOver) {
            start();
            return;
        }
        switch (e.keyCode) {
            case compass_1.Direction.Up:
                snake.ChangeDirection(compass_1.Direction.Up);
                break;
            case compass_1.Direction.Down:
                snake.ChangeDirection(compass_1.Direction.Down);
                break;
            case compass_1.Direction.Left:
                snake.ChangeDirection(compass_1.Direction.Left);
                break;
            case compass_1.Direction.Right:
                snake.ChangeDirection(compass_1.Direction.Right);
                break;
        }
    };
    drawer_1.default.FillCanvas(Constants.canvasColor);
}
//# sourceMappingURL=index.js.map