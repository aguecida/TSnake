import * as Constants from './constants';

export type coordinates = { x: number, y: number };

export function getRandomCoordinates(): coordinates {
    const x = Math.floor(Math.random() * Constants.canvasWidth / Constants.blockSize) * Constants.blockSize;
    const y = Math.floor(Math.random() * Constants.canvasHeight / Constants.blockSize) * Constants.blockSize;

    return { x, y };
}

export function hasCollision(newElement: coordinates, existingElements: Array<coordinates>): boolean {
    return existingElements.some(element => {
        return element.x === newElement.x && element.y === newElement.y;
    });
}

export function outOfBounds({ x, y }: coordinates): boolean {
    return x >= Constants.canvasWidth || x < 0 || y >= Constants.canvasHeight || y < 0;
}

export function getCenterCoordinates(): coordinates {
    return { x: Constants.canvasWidth / 2, y: Constants.canvasHeight / 2 };
}