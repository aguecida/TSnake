export class Snake {
    private static _instance: Snake;

    private constructor() { }

    static get Instance(): Snake {
        return this._instance || (this._instance = new Snake());
    }

    static Grow() {

    }

    static Move() {
        console.log('MOVING');
    }
}