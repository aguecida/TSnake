export class Food {
    constructor() {

    }

    Draw(context: CanvasRenderingContext2D): void {
        context.fillStyle = '#e85a5a';
	    context.fillRect(10, 10, 10, 10);
    }
}