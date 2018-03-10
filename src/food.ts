import { Drawer } from "./drawer";
import { Coordinates } from "./types";

export class Food {
    private color: string = '#e85a5a';
    private coordinates: Coordinates;

    constructor() {
        this.coordinates = { x: 10, y: 10 };
        Drawer.DrawSquare(this.coordinates, this.color);
    }
}