export enum Direction {
    Left = 37,
    Up = 38,
    Right = 39,
    Down = 40
}

export function isOppositeDirection(currentDirection: Direction, newDirection: Direction): boolean {
    switch (currentDirection) {
        case Direction.Up:
            return newDirection === Direction.Down;
        case Direction.Down:
            return newDirection === Direction.Up;
        case Direction.Left:
            return newDirection === Direction.Right;
        case Direction.Right:
            return newDirection === Direction.Left;
        default:
            return false;
    }
}