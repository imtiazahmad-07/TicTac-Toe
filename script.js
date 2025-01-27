let music = new Audio('music.mp3');
let audioTurn = new Audio('ting.mp3');
let gameOver = new Audio('gameover.mp3');
let isGameOver = false;
let turn = "X";

// Function to change the turn
const changeTurn = () => {
    music.play();
    return turn === "X" ? "0" : "X";
}
