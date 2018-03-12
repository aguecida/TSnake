import { coordinates } from "./map";
import * as Constants from './constants';

export default class Drawer {
    private static canvas: HTMLCanvasElement = document.getElementById('snake-pit') as HTMLCanvasElement;
    private static context: CanvasRenderingContext2D = Drawer.canvas.getContext('2d') as CanvasRenderingContext2D;

    static FillCanvas(color: string): void {
        for (let i = 0; i < Constants.canvasHeight; i += Constants.blockSize) {
            for (let j = 0; j < Constants.canvasWidth; j += Constants.blockSize) {
                Drawer.DrawSquare({ x: j, y: i }, color);
            }
        }
    }

    static DrawSquare({ x, y }: coordinates, color: string): void {
        Drawer.context.fillStyle = color;
        Drawer.context.fillRect(x, y, Constants.blockSize, Constants.blockSize);
    }
}