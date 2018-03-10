import { Coordinates } from './map';
import { Direction, isOppositeDirection } from './compass';
import Drawer from './drawer';
import * as Constants from './constants';

export default class Snake {
    private static _instance: Snake;
    private body: Array<Coordinates> = [];
    private color: string = '#6fda6f';
    private initialLength: number = 3;
    private startingPosition: Coordinates = { x: Constants.canvasWidth / 2, y: Constants.canvasHeight / 2 };
    private direction: Direction = Direction.Up;
    private directionQueue: Array<Direction> = [];

    private constructor() { }

    get Body(): Array<Coordinates> {
        return this.body;
    }

    get Head(): Coordinates {
        return this.body[0];
    }

    static get Instance(): Snake {
        return this._instance || (this._instance = new Snake());
    }

    Create(): void {
        this.body = [];
        this.direction = Direction.Up;
        for (let i = 0; i < this.initialLength; i++) {
            let newElement: Coordinates = { x: this.startingPosition.x, y: this.startingPosition.y + i * Constants.blockSize };
            this.body.push(newElement);
            Drawer.DrawSquare(newElement, this.color);
        }
    }
    
    Move(): void {
        let tail = this.body.pop() as Coordinates;

        if (this.directionQueue.length > 0) this.direction = this.directionQueue.shift() as Direction;
        
        switch (this.direction) {
            case Direction.Up:
                this.body.unshift({ x: this.body[0].x, y: this.body[0].y - Constants.blockSize });
                break;
            case Direction.Down:
                this.body.unshift({ x: this.body[0].x, y: this.body[0].y + Constants.blockSize });
                break;
            case Direction.Left:
                this.body.unshift({ x: this.body[0].x - Constants.blockSize, y: this.body[0].y });
                break;
            case Direction.Right:
                this.body.unshift({ x: this.body[0].x + Constants.blockSize, y: this.body[0].y });
                break;
        }

        Drawer.DrawSquare(tail, Constants.canvasColor);
        Drawer.DrawSquare(this.body[0], this.color);
    }

    Grow(): void {
        let tail: Coordinates = this.body[this.body.length - 1];
        let prev: Coordinates = this.body[this.body.length - 2];
        let newTail: Coordinates;

        if (tail.x > prev.x) {
            newTail = { x: tail.x + Constants.blockSize, y: tail.y };
        }
        else if (tail.x < prev.x) {
            newTail = { x: tail.x - Constants.blockSize, y: tail.y };
        }
        else if (tail.y > prev.y) {
            newTail = { x: tail.x, y: tail.y + Constants.blockSize };
        }
        else {
            newTail = { x: tail.x, y: tail.y - Constants.blockSize };
        }

        this.body.push(newTail);
        Drawer.DrawSquare(newTail, this.color);
    }

    ChangeDirection(newDirection: Direction): void {
        const lastDirection = this.directionQueue.length > 0 ? this.directionQueue[this.directionQueue.length - 1] : this.direction;
        if (isOppositeDirection(lastDirection, newDirection)) return;
        this.directionQueue.push(newDirection);
    }

    HasCollisionWithSelf(): boolean {
        for (let i = 1; i < this.body.length; i++) {
            if (this.Head.x === this.body[i].x && this.Head.y === this.body[i].y) {
                return true;
            }
        }
        return false;
    }
}