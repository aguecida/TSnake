"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var topScore = 0;
var currentScore = 0;
var points = 10;
function newGame() {
    currentScore = 0;
    printTopScore();
    printCurrentScore();
}
exports.newGame = newGame;
function gameOver(score) {
    if (score > topScore)
        topScore = score;
}
exports.gameOver = gameOver;
function incrementScore() {
    currentScore += points;
    printCurrentScore();
}
exports.incrementScore = incrementScore;
function printCurrentScore() {
    var currentScoreElement = document.getElementById("current-score");
    currentScoreElement.innerText = "Current Score: " + currentScore;
}
function printTopScore() {
    var topScoreElement = document.getElementById("top-score");
    topScoreElement.innerText = "Top Score: " + topScore;
}
//# sourceMappingURL=scorecard.js.map