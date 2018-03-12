let topScore: number = 0;
let currentScore: number = 0;
const pointIncrements: number = 10;

export function newGame(): void {
    currentScore = 0;
    printScores();
}

export function incrementScore(): void {
    currentScore += pointIncrements;
    if (currentScore > topScore) topScore = currentScore;
    printScores();
}

function printScores(): void {
    let currentScoreElement = document.getElementById("current-score") as HTMLElement;
    currentScoreElement.innerText = `Current Score: ${currentScore}`;

    let topScoreElement = document.getElementById("top-score") as HTMLElement;
    topScoreElement.innerText = `Top Score: ${topScore}`;
}
