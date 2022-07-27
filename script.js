const boxes = document.querySelectorAll("[data-box]");
const board = document.querySelector("[data-board]");
const winnerMessage = document.querySelector("[data-winnerMessage]");
let winner = document.querySelector("[data-winner-text]");
const resetBtn = document.querySelector("[data-reset]");

const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
let circleTurn;
let WINNING_LIST = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

startGame();
function startGame(){
    circleTurn = false;
    boxes.forEach((box) => {
        box.addEventListener("click", handleClick, {once : true});
    });
    boardHover();
}

function handleClick(e) {
    // place mark 
    const singleBox = e.target;
    const currentBoxClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    putMark(singleBox, currentBoxClass);
    if( win(currentBoxClass)){
        endGame(false);
    }else if(isDraw()){
        endGame(true)
    }else{
        swapsTurn();
        boardHover();
    }
}

function putMark(singleBox, currentBoxClass){
    singleBox.classList.add(currentBoxClass)
}

function swapsTurn(){
    circleTurn = !circleTurn;
}

function boardHover(){
    board.classList.remove(X_CLASS);
    board.classList.remove(CIRCLE_CLASS);
    if(circleTurn){
        board.classList.add(CIRCLE_CLASS);
    }else{
        board.classList.add(X_CLASS);
    }
}

function win(currentBoxClass){
    return WINNING_LIST.some((item) => {
        return item.every(index => {
            return boxes[index].classList.contains(currentBoxClass);
        })
    });
}

function endGame(draw) {
    if(draw){
        winner.innerText = "Draw!"
    }else{
        winner.innerText = circleTurn? "O Wins!" : "X Wins!"
    }
    winnerMessage.classList.add("show");
}

function isDraw(){
    return [...boxes].every(element => {
        return element.classList.contains(CIRCLE_CLASS) || 
        element.classList.contains(X_CLASS);
    })
}

resetBtn.addEventListener("click", () => {
    window.location.reload();
    console.log("clicked")
})