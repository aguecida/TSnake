import { Coordinates } from './types';
import { Drawer } from './drawer';
import { Direction, isOppositeDirection } from './direction';

export class Snake {
    private static _instance: Snake;
    private color: string = '#6fda6f';
    private length: number = 3;
    private coordinates: Array<Coordinates> = [];
    private startingPosition: Coordinates = { x: Constants.canvasWidth / 2, y: Constants.canvasHeight / 2 };
    private direction: Direction = Direction.Up;

    private constructor() { }

    static get Instance(): Snake {
        return this._instance || (this._instance = new Snake());
    }

    Create(): void {
        this.coordinates = [];
        for (let i = 0; i < this.length; i++) {
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
        this.length += 1;
    }

    ChangeDirection(newDirection: Direction): void {
        if (isOppositeDirection(this.direction, newDirection)) return;
        this.direction = newDirection;
    }
}