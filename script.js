const gameboardModule = (function() {
    const gameboard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    const gameboardReset = () => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                gameboard[i][j] = '';
            }
        }
    }

    return {gameboard, gameboardReset
    };
})(); 

const checkModule = (function() {

    const checkForWinner = () => {
        for (let i = 0; i < 3; i++) {
            const a = gameboardModule.gameboard[i][0];
            const b = gameboardModule.gameboard[i][1];
            const c = gameboardModule.gameboard[i][2];
    
            if (a !== '' && a === b && b == c) {
                if (a.includes('player1')) {
                    return 'winner  player1';
                } else if (a.includes('player2')) {
                    return 'winner player2'
                }
            }
        }
    
        for (let i = 0; i < 3; i++) {
            const a = gameboardModule.gameboard[0][i];
            const b = gameboardModule.gameboard[1][i];
            const c = gameboardModule.gameboard[2][i];
    
            if (a !== '' && a === b && b == c) {
                if (a.includes('player1')) {
                    return 'winner  player1';
                } else if (a.includes('player2')) {
                    return 'winner player2'
                }
            }
        }
    
        for (let i = 0; i < 1; i++) {
            const a = gameboardModule.gameboard[0][0];
            const b = gameboardModule.gameboard[1][1];
            const c = gameboardModule.gameboard[2][2];
    
            if (a !== '' && a === b && b == c) {
                if (a.includes('player1')) {
                    return 'winner  player1';
                } else if (a.includes('player2')) {
                    return 'winner player2'
                }
            }
        }
    
        for (let i = 0; i < 1; i++) {
            const a = gameboardModule.gameboard[0][2];
            const b = gameboardModule.gameboard[1][1];
            const c = gameboardModule.gameboard[2][0];
    
            if (a !== '' && a === b && b == c) {
                if (a.includes('player1')) {
                    return 'winner  player1';
                } else if (a.includes('player2')) {
                    return 'winner player2'
                }
            }
        }
    
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (gameboardModule.gameboard[i][j] === '') {
                    return undefined;
                }
            }
        }
    
        return 'draw';
    }
    
    const checkField = (x, y) => {
        if (gameboardModule.gameboard[x][y] !== '') {
           alert('Pick another field');
           return;
        } 
        return true;
    }

    return { checkForWinner, checkField
    }
})();

const gameModule = (function() {
    const playerInput = (x, y, input, player) => {
        gameboardModule.gameboard[x][y] = `${input}, ${player}`;
    }
    
    const playRound = () => {
        if (checkModule.checkForWinner() === undefined) {
            let player1Choice = prompt('Player 1 enter your choice in next order: x, y, item') + ', player1';
        console.log(player1Choice);
        if (checkModule.checkField(player1Choice[0], player1Choice[3])) {
            playerInput(player1Choice[0], player1Choice[3], player1Choice[6], player1Choice.slice(9, 16));
        }
        }
        if (checkModule.checkForWinner() === undefined) {
            let player2Choice = prompt('Player 2 enter your choice in next order: x, y, item') + ', player2';
        console.log(player2Choice);
        if (checkModule.checkField(player2Choice[0], player2Choice[3])) {
            playerInput(player2Choice[0], player2Choice[3], player2Choice[6], player2Choice.slice(9, 16));
        }
        }
        
    }
    
    const playGame = () => {
        while (checkModule.checkForWinner() === undefined) {
            playRound();
        }
        if (checkModule.checkForWinner().includes('winner')) {
            if (checkModule.checkForWinner().includes('player1')) {
                gameboardModule.gameboardReset();
                gameModule.increaseScore(1);
                return 'Game ended with the winner being player1';
            } else if (checkModule.checkForWinner().includes('player2')) {
                gameboardModule.gameboardReset();
                gameModule.increaseScore(2);
                return 'Game ended with the winner being player2';
            }
        } else if (checkModule.checkForWinner().includes('draw')) {
            gameboardModule.gameboardReset();
            return 'Game ended with the draw';
        }
    }

    let player1Score = 0;
    let player2Score = 0;

    const increaseScore = (player) => {
        if (player === 1) {
            player1Score++;
        } else if (player === 2) {
            player2Score++;
        }
    }

    const showLargerScore = () => {
        if (player1Score > player2Score) {
            return 'Player 1 has higher score';
        } else if (player1Score < player2Score) {
            return 'Player 2 has higher score';
        } else if (player1Score === player2Score) {
            return `Both players have the same score`;
        }
    }

    return {
        playerInput, playRound, playGame, increaseScore, increaseScore, showLargerScore,
    }
})();



