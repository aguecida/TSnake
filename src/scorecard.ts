let topScore: number = 0;
let currentScore: number = 0;
const points: number = 10;

export function newGame() {
    currentScore = 0;
    printTopScore();
    printCurrentScore();
}

export function gameOver(score: number): void {
    if (score > topScore) topScore = score;
}

export function incrementScore(): void {
    currentScore += points;
    printCurrentScore();
}

function printCurrentScore() {
    let currentScoreElement = document.getElementById("current-score") as HTMLElement;
    currentScoreElement.innerText = `Current Score: ${currentScore}`;
}

function printTopScore() {
    let topScoreElement = document.getElementById("top-score") as HTMLElement;
    topScoreElement.innerText = `Top Score: ${topScore}`;
}