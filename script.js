function createPlayer (name,symbol) {
    let playerName = name;
    let playerSymbol = symbol;
    return {playerName, playerSymbol};
};

const player1 = createPlayer("Hubert", "X")
const player2 = createPlayer("Dieter","O")

console.log(player1, player2)