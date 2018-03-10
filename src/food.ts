import Drawer from "./drawer";
import { Coordinates } from "./types";

export default class Food {
    private color: string = '#e85a5a';

    constructor(private coordinates: Coordinates) {
        Drawer.DrawSquare(this.coordinates, this.color);
    }

    get Coordinates(): Coordinates {
        return this.coordinates;
    }
}