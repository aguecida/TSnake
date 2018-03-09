import { Coordinates } from "./types";

export class Drawer {
    private static canvas: HTMLCanvasElement = document.getElementById('snake-pit') as HTMLCanvasElement;
    private static context: CanvasRenderingContext2D = Drawer.canvas.getContext('2d') as CanvasRenderingContext2D;

    static ClearCanvas() {
        Drawer.context.fillStyle = Constants.canvasColor;
        Drawer.context.fillRect(0, 0, Drawer.canvas.width, Drawer.canvas.height);
    }

    static DrawSquare({ x, y }: Coordinates, color: string): void {
        Drawer.context.fillStyle = color;
        Drawer.context.fillRect(x, y, Constants.blockSize, Constants.blockSize);
    }
}