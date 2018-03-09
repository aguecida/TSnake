import { Coordinates } from "./types";
import { Drawer } from "./drawer";

export class Snake {
    private static _instance: Snake;
    private color: string = '#6fda6f';
    private initialLength: number = 3;
    private coordinates: Array<Coordinates> = [];
    private startingPosition: Coordinates = { x: 600 / 2, y: 400 / 2 };

    private constructor() { }

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
    
    Move() {
        let tail = this.coordinates.pop() as Coordinates;
        this.coordinates.unshift({ x: this.coordinates[0].x, y: this.coordinates[0].y - Constants.blockSize });
        
        Drawer.DrawSquare(tail, Constants.canvasColor);
        Drawer.DrawSquare(this.coordinates[0], this.color);
    }
}