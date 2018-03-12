"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var topScore = 0;
var currentScore = 0;
var pointIncrements = 10;
function newGame() {
    currentScore = 0;
    printScores();
}
exports.newGame = newGame;
function incrementScore() {
    currentScore += pointIncrements;
    if (currentScore > topScore)
        topScore = currentScore;
    printScores();
}
exports.incrementScore = incrementScore;
function printScores() {
    var currentScoreElement = document.getElementById("current-score");
    currentScoreElement.innerText = "Current Score: " + currentScore;
    var topScoreElement = document.getElementById("top-score");
    topScoreElement.innerText = "Top Score: " + topScore;
}
//# sourceMappingURL=scorecard.js.map