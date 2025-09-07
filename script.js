function createPlayer (name, symbol) {
    const playerName = name;
    const playerSymbol = symbol;

    return{playerName, playerSymbol};
};

function gameboard () {

    const rows = 3; 
    const columns = 3; 
    const board = [];

    for (let r = 0; r < rows; r++) {
        board[r] = [];
        for (let c = 0; c < columns; c++){
            board[r].push(cell());
        };
    };


    function markCell (row, column, symbol){
        const availableCell = () => {
            if(board[row][column].getValue() === "") {
                return true
            }
            else {
                return false
            };
        };
        
        if(availableCell()){
            board[row][column].addMarker(symbol);
        };
    };
    const printBoard = () => {
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
        console.log(boardWithCellValues)
    };

    return {
        board, 
        markCell,
        printBoard}
};

function cell() {
    let value = "";

    const addMarker = (player) =>{
        value = player;
    };

    const getValue =() => value;

    return{
        addMarker,
        getValue

    };

}

function gameController (){
    
};

const PlayerOne = createPlayer("Josh", "X");
const playerTwo =createPlayer("Alan", "O");
const game = gameboard()
game.printBoard();
game.markCell(1,1,PlayerOne.playerSymbol)
game.printBoard();
game.markCell(1,2,playerTwo.playerSymbol);
game.printBoard();
