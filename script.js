function createPlayer (name,symbol) {
    let playerName = name;
    let playerSymbol = symbol;
    return {playerName, playerSymbol};
};

const player1 = createPlayer("Hubert", "X")
const player2 = createPlayer("Dieter","O")

console.log(player1, player2)

function createGameboard () {
    const rows = 4; 
    const columns = 4; 
    const board = [];
    
    for (let r = 0 ; r < rows; r++) {
        board[r] =[];
        for (let c = 0; c < columns; c++){
            board[r].push(0);
        }
    }

    return {board};
};

console.log(createGameboard().board)

function markField () {

}

function gameController() {
    
}
