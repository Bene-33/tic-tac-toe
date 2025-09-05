function createPlayer (name,symbol) {
    let playerName = name;
    let playerSymbol = symbol;
    return {playerName, playerSymbol};
};
const playerOne = createPlayer("Hubert", "X")
const playerTwo = createPlayer("Dieter","O")
console.log(playerOne, playerTwo)

function Gameboard () {

    const rows = 4; 
    const columns = 4; 
    const board = [];

    for (let r = 0; r < rows; r++) {
        board[r] = [];
        for (let c = 0; c < columns; c++){
            board[r].push(cell());
        };
    };

    const markCell = (row, column , playerSymbol) => {
        const availableCell = board.filter((row) => row !== "X" || "O");

        if(!availableCell) return;
        
        return availableCell;
    }
    
    return {board, markCell};
    
};
console.log(Gameboard().board)
console.log(Gameboard().markCell())

function cell() {
    value = "";

    const setMarker = (player) => {
        value = player;
    };
    
    const getCurrentMarker = () => value;

    return {setMarker, getCurrentMarker};
};

const currentCell = cell();
currentCell.setMarker(playerOne.playerSymbol)
console.log(currentCell.getCurrentMarker())



function gameController() {

};
