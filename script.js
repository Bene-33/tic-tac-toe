function createPlayer (){

};

function Gameboard () {

    const rows = 3; 
    const columns = 3; 
    const board = [];

    for (let r = 0; r < rows; r++) {
        board[r] = [];
        for (let c = 0; c < columns; c++){
            board[r].push(" ");
        };
    };


    function markCell (){
        //identify empty Cells
    };

    return {board, markCell}
    
};

console.log(Gameboard().board);

function gameController (){

};