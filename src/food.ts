import { Coordinates, getRandomCoordinates, hasCollision } from "./map";
import Drawer from "./drawer";
import Snake from './snake';

export default class Food {
    private color: string = '#e85a5a';
    private coordinates: Coordinates;

    constructor() {
        this.coordinates = getRandomCoordinates();

        while (hasCollision(this.coordinates, Snake.Instance.Body)) {
            this.coordinates = getRandomCoordinates();
        }

        Drawer.DrawSquare(this.coordinates, this.color);
    }

    get Coordinates(): Coordinates {
        return this.coordinates;
    }
}