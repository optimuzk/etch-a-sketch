const board = document.querySelector("#div-container");
const boardHeight = 600;
boardSize(16);
let squares = selectSquares();

const sizeOfBoard = document.querySelector("#size");
const colorPicker = document.querySelector("#color");
let colorSelect = "ffff";

const resetButton = document.querySelector("#reset");
const penButton = document.querySelector("#pen");
const eraserButton = document.querySelector("#eraser");


function boardSize(squareNumber){
    let calc = boardHeight/squareNumber;
    let squareHeight = calc.toString()+"px";
    console.log(squareHeight);
    for (let i = 0; i < squareNumber**2; i++){
        const square = document.createElement("div");
        square.setAttribute("class","squares");
        square.style.height = squareHeight;
        square.style.width = squareHeight;
        board.appendChild(square);
    }
}

function selectSquares(){
    let sqrs = document.querySelectorAll(".squares");
    return sqrs;
}

function resetBoard(board){
    board.innerHTML = '';
}

function getColor(inputColor){
    return inputColor.value;
}

sizeOfBoard.addEventListener('change', (e) => {
    let valueOf = e.target.value;
    let squareNumber = valueOf.toString();
    resetBoard(board);
    boardSize(squareNumber);
    selectSquares();
});


board.addEventListener('mouseenter', () => {
    squares = selectSquares();
    squares.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.background = getColor(colorPicker);
        });
    });
})

resetButton.addEventListener('click', () => {
    resetBoard(board);
    boardSize(16);
    selectSquares();
});


eraserButton.addEventListener('click', () => {
    colorSelect = getColor(colorPicker);
    colorPicker.value = "#FFFFFF";
});

penButton.addEventListener('click', () => {
    colorPicker.value = colorSelect;
});