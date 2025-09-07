function Gameboard () {

    const rows = 3; 
    const columns = 3; 
    const board = [];

    for (let r = 0; r < rows; r++) {
        board[r] = [];
        for (let c = 0; c < columns; c++){
            board[r].push(cell().setMarker("X"));
        };
    };

    return {board}
    
};

function cell() {
    let value = " ";
    const setMarker = (player) => {
        value = player;
    };
    const getCurrentMarker = () => value;
    return {setMarker, getCurrentMarker};
};





function createPlayer (name, symbol) {
    return {
        playerName: name, 
        playerSymbol: symbol,
    };
};

function gameController() {

};


const currentCell = cell();
 console.log(currentCell.setMarker("X"))

console.log(Gameboard().board);
