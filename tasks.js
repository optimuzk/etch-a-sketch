const board = document.querySelector("#div-container");
const boardHeight = 600;
boardSize(16);

const sizeOfBoard = document.querySelector("#size");
const colorPicker = document.querySelector("#color");
let colorSelect = colorPicker.value;

function boardSize(squareNumber){
    let calc = boardHeight/squareNumber;
    let squareHeight = calc.toString()+"px";
    console.log(squareHeight);
    for (let i = 0; i < squareNumber**2; i++){
        const square = document.createElement("div");
        square.setAttribute("id","squares");
        square.style.height = squareHeight;
        square.style.width = squareHeight;
        board.appendChild(square);
    }
}

function resetBoard(board){
    board.innerHTML = '';
}

sizeOfBoard.addEventListener('change', (e) => {
    let valueOf = e.target.value;
    let squareNumber = valueOf.toString();
    resetBoard(board);
    boardSize(squareNumber);
});

colorPicker.addEventListener('change', (e) => {
    let colorSelect = e.target.value;
    console.log(colorSelect);
})


