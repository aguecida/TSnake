import { Drawer } from "./drawer";
import { Coordinates } from "./types";

export class Food {
    color: string = '#e85a5a';

    Create() {
        let coordinates: Coordinates = { x: 10, y: 10 };
        Drawer.DrawSquare(coordinates, this.color);
    }
}