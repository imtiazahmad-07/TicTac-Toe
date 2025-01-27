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

// Function to check for a win
const checkWin = () => {
    let boxText = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach(e => {
        if (boxText[e[0]].innerText === boxText[e[1]].innerText && boxText[e[2]].innerText === boxText[e[0]].innerText && boxText[e[0]].innerText !== "") {
            document.getElementsByClassName('info')[0].innerText = boxText[e[0]].innerText + " Won";
            isGameOver = true;
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px";
            music.pause();
            gameOver.play();
        }
    })
}

// Game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Add onclick listener on reset button
let reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
    let boxText = document.getElementsByClassName('boxText');
    Array.from(boxText).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isGameOver = false;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px";
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    music.play();
})