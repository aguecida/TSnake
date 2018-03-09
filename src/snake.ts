export class Snake {
    private static _instance: Snake;
    private static color: string = '#6fda6f';
    private static size: number = 3;
    private static initialLength: number = 3;
    private static blockSize: number = 10;
    private static coordinates: Array<{ x: number, y: number }> = [];
    private static startingHead = { x: 600 / 2, y: 400 / 2 };

    private constructor() {
        
    }

    static get Instance(): Snake {
        return this._instance || (this._instance = new Snake());
    }

    static Create(context: CanvasRenderingContext2D): void {
        this.coordinates = [];
        for (let i = 0; i < this.initialLength; i++) {
            this.coordinates.push({ x: this.startingHead.x, y: this.startingHead.y + i * this.blockSize });
            context.fillStyle = this.color;
            context.fillRect(this.startingHead.x, this.startingHead.y + i * this.blockSize, this.blockSize, this.blockSize);
        }
    }

    static Draw(context: CanvasRenderingContext2D): void {
        // this.coordinates.forEach(coordinate => {

        // });

        // for (let i = 0; i < this.coordinates.length; i++) {
        //     context.fillStyle = this.color;
	    //     context.fillRect(this.head.x * i, this.head.y * i, this.blockSize * i, this.blockSize * i);
        // }
    }

    static Move(context: CanvasRenderingContext2D) {
        let tail = this.coordinates.pop() as { x:number, y: number };
        
        context.fillStyle = '#555';
        context.fillRect(tail.x, tail.y, this.blockSize, this.blockSize);

        this.coordinates.unshift({ x: this.coordinates[0].x, y: this.coordinates[0].y - this.blockSize });

        context.fillStyle = this.color;
        context.fillRect(this.coordinates[0].x, this.coordinates[0].y, this.blockSize, this.blockSize);
        
    }
}