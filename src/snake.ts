import { Coordinates } from "./types";
import { Drawer } from "./drawer";

export class Snake {
    private static _instance: Snake;
    private color: string = '#6fda6f';
    private initialLength: number = 3;
    private blockSize: number = 10;
    private coordinates: Array<Coordinates> = [];
    private startingHead = { x: 600 / 2, y: 400 / 2 };

    private constructor() { }

    static get Instance(): Snake {
        return this._instance || (this._instance = new Snake());
    }

    Create(context: CanvasRenderingContext2D): void {
        this.coordinates = [];
        for (let i = 0; i < this.initialLength; i++) {
            this.coordinates.push({ x: this.startingHead.x, y: this.startingHead.y + i * this.blockSize });
            context.fillStyle = this.color;
            context.fillRect(this.startingHead.x, this.startingHead.y + i * this.blockSize, this.blockSize, this.blockSize);
        }
    }
    
    Move(context: CanvasRenderingContext2D) {
        let tail = this.coordinates.pop() as Coordinates;
        this.coordinates.unshift({ x: this.coordinates[0].x, y: this.coordinates[0].y - this.blockSize });
        
        Drawer.DrawSquare(tail, Constants.canvasColor);
        Drawer.DrawSquare(this.coordinates[0], this.color);
    }
}