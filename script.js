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

function cell() {
    value = "0";
    const setMarker = (player) => {
        value = player;
    };
    const getCurrentMarker = () => value;
    return {setMarker, getCurrentMarker};
};




function gameController() {
    function createPlayer (name, symbol) {
        return {
            playerName: name, 
            playerSymbol: symbol,
        };
    };
    let playerOne = createPlayer("Hubert", "X");
    let playerTwo = createPlayer("Dieter","O");
    return {playerOne, playerTwo};
};

console.log(gameController().playerOne)
console.log(gameController().playerTwo)

const currentCell = cell();
console.log(currentCell.getCurrentMarker())

console.log(gameController())
console.log(Gameboard().board);
console.log(Gameboard().markCell())