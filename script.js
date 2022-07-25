const boxes = document.querySelectorAll("[data-box]");
const board = document.querySelector("[data-board]");

const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
let circleTurn;

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
    // check for win 
    // check for draw 
    // switch turn 
    swapsTurn();
    boardHover(); 
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