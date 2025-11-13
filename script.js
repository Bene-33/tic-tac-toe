function createPlayer (name, symbol) {

    const playerName = name;
    const playerSymbol = symbol;

    return{playerName, playerSymbol};
};

function gameboard (playerOne, playerTwo) {

    const rows = 3; 
    const columns = 3; 
    const board = [];
    const maxRounds = rows*columns;
    let roundCount = 0;

    for (let r = 0; r < rows; r++) {
        board[r] = [];

        for (let c = 0; c < columns; c++){
            board[r].push(cell());
        };
    };

    const getBoard = () => board;
    const getRoundCount = () => roundCount;

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
           
            roundCount++;

            return symbol;
                   
        };

        return board[row][column].getValue();    
    };

    function cell() {
     
        let value = "";
        
        const addMarker = (player) => {
            value = player;
     
        };
        
        const getValue = () => value;
        
        return{
            addMarker,
            getValue
        };
    };

    const printBoard = () => {
        
        const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
        console.log(boardWithCellValues)
    };

    function checkWinCondition(getBoard) {
      
        const winPatterns = [
            //row
            [[0,0] , [0,1] , [0,2]],
            [[1,0] , [1,1] , [1,2]],
            [[2,0] , [2,1] , [2,2]],
            //column
            [[0,0] , [1,0] , [2,0]],
            [[0,1] , [1,1] , [2,1]],
            [[0,2] , [1,2] , [2,2]],
            //diagonaly
            [[0,0] , [1,1] , [2,2]],
            [[0,2] , [1,1] , [2,0]]
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern; 
            const cellA = board[a[0]][a[1]].getValue();
            const cellB = board[b[0]][b[1]].getValue();
            const cellC = board[c[0]][c[1]].getValue();

            if(cellA !== "" && cellA === cellB && cellB === cellC){
              
                return cellA;
            }
        }

        return null;
    };

    function checkDrawCondition(board) {
        if(maxRounds === roundCount){

            return true
        }
    };

    const printWinCondition = (board) => {
        
        const winner = checkWinCondition(board);
        const  draw = checkDrawCondition(board);
        
        if(winner) {
        
            let winnerName = "";
        
            if (winner === playerOne.playerSymbol){
                winnerName = playerOne.playerName;
            }

            else if (winner === playerTwo.playerSymbol){
                winnerName = playerTwo.playerName;
            }
                console.log(`The winner is ${winnerName}`);
        }

        else if (draw){
            console.log("It's a draw");
        }

        else {
            return null;
         }
    };

    return {
        getBoard,
        getRoundCount, 
        markCell,
        printBoard,
        checkWinCondition,
        checkDrawCondition,
        printWinCondition,
        rows,
        columns,
    }
};




(function guiController () {

    const playerOne = createPlayer("Josh", "X");
    const playerTwo = createPlayer("Alan", "O");
    const game = gameboard(playerOne, playerTwo);
    const gridContainer = document.getElementById("gameGrid");
    const gameBoard = game.getBoard();


    gameBoard.forEach((row, rIndex) => { 
        row.forEach((column, cIndex) => {
            const cellDiv = document.createElement("div");
            cellDiv.textContent = "";
            cellDiv.classList.add("gridCell");
            gridContainer.appendChild(cellDiv);

            let currentPlayer = "";
            cellDiv.addEventListener("click", () => {
                if(game.getRoundCount() % 2 === 0){
                    currentPlayer = playerOne;
                } 
                else if (game.getRoundCount() % 2 !== 0){
                    currentPlayer = playerTwo;
                }
                    cellDiv.textContent = game.markCell(rIndex, cIndex, currentPlayer.playerSymbol);
            });
        });
    });
})();

// const game = gameboard();
// // play rounds
// game.markCell(0,0,playerOne.playerSymbol);
// game.markCell(0,1,playerOne.playerSymbol);
// game.markCell(0,2,playerOne.playerSymbol);
// game.markCell(1,0,playerOne.playerSymbol);
// game.markCell(1,1,playerTwo.playerSymbol);
// game.markCell(1,2,playerTwo.playerSymbol);
// game.markCell(2,0,playerOne.playerSymbol);
// game.markCell(2,1,playerTwo.playerSymbol);
// game.markCell(2,2,playerOne.playerSymbol);
// game.printBoard();
// game.printWinCondition();