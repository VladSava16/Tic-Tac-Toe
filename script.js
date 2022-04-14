let currentPlayer = 1;

const gameBoard = (() => {
    let board = [-1, -2, -3, -4, -5, -6, -7, -8, -9];
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('click', (e) => {
            displayController.updateBoard(e.target.dataset.cellpos, currentPlayer);
            checkWinner();
        });
    });
    const checkWinner = () =>{
        if((board[0] === board[1] && board[1] === board[2]) || (board[0] === board[3] && board[3] === board[6]) || (board[0] === board[4] && board[4] === board[8]))
            alert(`The winner is Player ${board[0]}`);
        else if(board[1] === board[4] && board[4] === board[7])
            alert(`The winner is Player ${board[1]}`);
        else if((board[2] === board[4] && board[4] === board[6]) || (board[2] === board[5] && board[5] === board[8]))
            alert(`The winner is Player ${board[2]}`);
        else if((board[3] === board[4] && board[4] === board[5]))
            alert(`The winner is Player ${board[3]}`);
        else if((board[6] === board[7] && board[7] === board[8]))
            alert(`The winner is Player ${board[6]}`);
    };
    return {board, checkWinner};
})();
const displayController = (() => {
    const updateBoard = (pos, playerId) =>{
        if(gameBoard.board[pos - 1] < 0){
            gameBoard.board[pos - 1] = playerId;
            let cell = document.querySelector(`[data-cellpos = "${pos}"]`);
            if(gameBoard.board[pos - 1] == 0){
                let sign = document.createElement('div');
                sign.classList.add('zero');
                cell.appendChild(sign);
                currentPlayer = 1;
            }
            else{
                let forwardSlash = document.createElement('div');
                let backSlash = document.createElement('div');
                forwardSlash.classList.add('forwardslash');
                backSlash.classList.add('backslash');
                cell.appendChild(forwardSlash);
                cell.appendChild(backSlash);
                currentPlayer = 0;
            }
        }
    }
    return{updateBoard};
})();