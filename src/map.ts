export type Coordinates = { x: number, y: number };

export function getRandomCoordinates(): Coordinates {
    const x = Math.floor(Math.random() * Constants.canvasWidth / Constants.blockSize) * Constants.blockSize;
    const y = Math.floor(Math.random() * Constants.canvasHeight / Constants.blockSize) * Constants.blockSize;

    return { x, y };
}

export function hasCollision(newElement: Coordinates, existingElements: Array<Coordinates>) {
    return existingElements.some(element => {
        return element.x === newElement.x && element.y === newElement.y;
    });
}
