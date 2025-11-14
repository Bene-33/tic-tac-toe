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

        if(availableCell()) {
 
            board[row][column].addMarker(symbol);
           
            roundCount++;

            return true;
                   
        };

         return  false;    
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

    let playerOne = ""
    let playerTwo = "";
    const setPlayerNames = document.querySelector('button[type="submit"]');

    setPlayerNames.addEventListener("click", () => {
        event.preventDefault();
        playerOne = createPlayer(document.getElementById("playerOne").value, "X");
        playerTwo = createPlayer(document.getElementById("playerTwo").value, "O");
    });
      


    const game = gameboard(playerOne, playerTwo);
    const gridContainer = document.getElementById("gameGrid");
    const gameBoard = game.getBoard();

    gameBoard.forEach((row, rIndex) => { 
        row.forEach((column, cIndex) => {
            const cellDiv = document.createElement("div");
            cellDiv.textContent = "";
            cellDiv.classList.add("gridCell");
            gridContainer.appendChild(cellDiv);

            cellDiv.addEventListener("click", () => {
                let currentPlayer = game.getRoundCount() % 2 === 0 ? playerOne : playerTwo;
                
                if (game.markCell(rIndex, cIndex, currentPlayer.playerSymbol)) {
                    cellDiv.textContent = currentPlayer.playerSymbol;
                    cellDiv.id = currentPlayer === playerOne ? "playerOne" : "playerTwo"; 
                };
                
                if (game.checkWinCondition(gameBoard) || game.checkDrawCondition(gameBoard)) {
                    return game.printWinCondition(gameBoard);
                };
            });
        });
    });
})();