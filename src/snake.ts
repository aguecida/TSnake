import { Coordinates } from './map';
import { Direction, isOppositeDirection } from './compass';
import Drawer from './drawer';
import * as Constants from './constants';

export default class Snake {
    private static _instance: Snake;
    private coordinates: Array<Coordinates> = [];
    private color: string = '#6fda6f';
    private initialLength: number = 3;
    private startingPosition: Coordinates = { x: Constants.canvasWidth / 2, y: Constants.canvasHeight / 2 };
    private direction: Direction = Direction.Up;

    private constructor() { }

    get Coordinates(): Array<Coordinates> {
        return this.coordinates;
    }

    static get Instance(): Snake {
        return this._instance || (this._instance = new Snake());
    }

    Create(): void {
        this.coordinates = [];
        for (let i = 0; i < this.initialLength; i++) {
            let newElement: Coordinates = { x: this.startingPosition.x, y: this.startingPosition.y + i * Constants.blockSize };
            this.coordinates.push(newElement);
            Drawer.DrawSquare(newElement, this.color);
        }
    }
    
    Move(): void {
        let tail = this.coordinates.pop() as Coordinates;

        switch (this.direction) {
            case Direction.Up:
                this.coordinates.unshift({ x: this.coordinates[0].x, y: this.coordinates[0].y - Constants.blockSize });
                break;
            case Direction.Down:
                this.coordinates.unshift({ x: this.coordinates[0].x, y: this.coordinates[0].y + Constants.blockSize });
                break;
            case Direction.Left:
                this.coordinates.unshift({ x: this.coordinates[0].x - Constants.blockSize, y: this.coordinates[0].y });
                break;
            case Direction.Right:
                this.coordinates.unshift({ x: this.coordinates[0].x + Constants.blockSize, y: this.coordinates[0].y });
                break;
        }

        Drawer.DrawSquare(tail, Constants.canvasColor);
        Drawer.DrawSquare(this.coordinates[0], this.color);
    }

    Grow(): void {
        let tail: Coordinates = this.coordinates[this.coordinates.length - 1];
        let prev: Coordinates = this.coordinates[this.coordinates.length - 2];
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

        this.coordinates.push(newTail);
        Drawer.DrawSquare(newTail, this.color);
    }

    ChangeDirection(newDirection: Direction): void {
        if (isOppositeDirection(this.direction, newDirection)) return;
        this.direction = newDirection;
    }
}