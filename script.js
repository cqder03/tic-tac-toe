const gameboardModule = (function () {
  const gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const gameboardReset = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        gameboard[i][j] = "";
      }
    }
  };

  const createX = () => {
    const x = document.createElement("img");
    x.src = "assets/icons/game-icons/x-sample.png";
    x.draggable = false;
    x.classList.add("x");
    return x;
  };

  const createO = () => {
    const o = document.createElement("img");
    o.src = "assets/icons/game-icons/o-sample.png";
    o.draggable = false;
    o.classList.add("o");
    return o;
  };

  const gameboardWrapper = document.querySelector(".gameboard-wrapper");
  gameboardWrapper.addEventListener("click", (event) => {
    let eventId = event.target.id;
    let selector = document.getElementById(`${eventId}`);

    switch (eventId) {
      case "top-left":
        if (gameModule.gameStatus() === "not started") {
          gameModule.playerTurn++;
          gameModule.gameStatus("started");
        }
        if (checkModule.checkForWinner() === undefined) {
          let cord1 = "0, 0,";
          let piece1;
          let turn1 = gameModule.takeTurn();
          gameModule.playerInput(cord1, turn1);
          if (turn1.includes("player1")) {
            piece1 = createX();
          } else if (turn1.includes("player2")) {
            piece1 = createO();
          }
          if (!selector.hasChildNodes()) {
            selector.appendChild(piece1);
          }
        }
        if (checkModule.checkForWinner() !== undefined) {
          gameModule.gameVerdict();
        }
        break;
      case "top-center":
        if (gameModule.gameStatus() === "not started") {
          gameModule.playerTurn++;
          gameModule.gameStatus("started");
        }
        if (checkModule.checkForWinner() === undefined) {
          let cord2 = "0, 1,";
          let piece2;
          let turn2 = gameModule.takeTurn();
          gameModule.playerInput(cord2, turn2);
          if (turn2.includes("player1")) {
            piece2 = createX();
          } else if (turn2.includes("player2")) {
            piece2 = createO();
          }
          if (!selector.hasChildNodes()) {
            selector.appendChild(piece2);
          }
        }
        if (checkModule.checkForWinner() !== undefined) {
          gameModule.gameVerdict();
        }
        break;
      case "top-right":
        if (gameModule.gameStatus() === "not started") {
          gameModule.playerTurn++;
          gameModule.gameStatus("started");
        }
        if (checkModule.checkForWinner() === undefined) {
          let cord3 = "0, 2,";
          let piece3;
          let turn3 = gameModule.takeTurn();
          gameModule.playerInput(cord3, turn3);
          if (turn3.includes("player1")) {
            piece3 = createX();
          } else if (turn3.includes("player2")) {
            piece3 = createO();
          }
          if (!selector.hasChildNodes()) {
            selector.appendChild(piece3);
          }
          if (checkModule.checkForWinner() !== undefined) {
            gameModule.gameVerdict();
          }
        }
        break;
      case "middle-left":
        if (gameModule.gameStatus() === "not started") {
          gameModule.playerTurn++;
          gameModule.gameStatus("started");
        }
        if (checkModule.checkForWinner() === undefined) {
          let cord4 = "1, 0,";
          let piece4;
          let turn4 = gameModule.takeTurn();
          gameModule.playerInput(cord4, turn4);
          if (turn4.includes("player1")) {
            piece4 = createX();
          } else if (turn4.includes("player2")) {
            piece4 = createO();
          }
          if (!selector.hasChildNodes()) {
            selector.appendChild(piece4);
          }
          if (checkModule.checkForWinner() !== undefined) {
            gameModule.gameVerdict();
          }
        }
        break;
      case "middle-center":
        if (gameModule.gameStatus() === "not started") {
          gameModule.playerTurn++;
          gameModule.gameStatus("started");
        }
        if (checkModule.checkForWinner() === undefined) {
          let cord5 = "1, 1,";
          let piece5;
          let turn5 = gameModule.takeTurn();
          gameModule.playerInput(cord5, turn5);
          if (turn5.includes("player1")) {
            piece5 = createX();
          } else if (turn5.includes("player2")) {
            piece5 = createO();
          }
          if (!selector.hasChildNodes()) {
            selector.appendChild(piece5);
          }
          if (checkModule.checkForWinner() !== undefined) {
            gameModule.gameVerdict();
          }
        }
        break;
      case "middle-right":
        if (gameModule.gameStatus() === "not started") {
          gameModule.playerTurn++;
          gameModule.gameStatus("started");
        }
        if (checkModule.checkForWinner() === undefined) {
          let cord6 = "1, 2,";
          let piece6;
          let turn6 = gameModule.takeTurn();
          gameModule.playerInput(cord6, turn6);
          if (turn6.includes("player1")) {
            piece6 = createX();
          } else if (turn6.includes("player2")) {
            piece6 = createO();
          }
          if (!selector.hasChildNodes()) {
            selector.appendChild(piece6);
          }
          if (checkModule.checkForWinner() !== undefined) {
            gameModule.gameVerdict();
          }
        }
        break;
      case "bottom-left":
        if (gameModule.gameStatus() === "not started") {
          gameModule.playerTurn++;
          gameModule.gameStatus("started");
        }
        if (checkModule.checkForWinner() === undefined) {
          let cord7 = "2, 0,";
          let piece7;
          let turn7 = gameModule.takeTurn();
          gameModule.playerInput(cord7, turn7);
          if (turn7.includes("player1")) {
            piece7 = createX();
          } else if (turn7.includes("player2")) {
            piece7 = createO();
          }
          if (!selector.hasChildNodes()) {
            selector.appendChild(piece7);
          }
          if (checkModule.checkForWinner() !== undefined) {
            gameModule.gameVerdict();
          }
        }
        break;
      case "bottom-center":
        if (gameModule.gameStatus() === "not started") {
          gameModule.playerTurn++;
          gameModule.gameStatus("started");
        }
        if (checkModule.checkForWinner() === undefined) {
          let cord8 = "2, 1,";
          let piece8;
          let turn8 = gameModule.takeTurn();
          gameModule.playerInput(cord8, turn8);
          if (turn8.includes("player1")) {
            piece8 = createX();
          } else if (turn8.includes("player2")) {
            piece8 = createO();
          }
          if (!selector.hasChildNodes()) {
            selector.appendChild(piece8);
          }
        }
        if (checkModule.checkForWinner() !== undefined) {
          gameModule.gameVerdict();
        }
        break;
      case "bottom-right":
        if (gameModule.gameStatus() === "not started") {
          gameModule.playerTurn++;
          gameModule.gameStatus("started");
        }
        let cord9 = "2, 2,";
        let piece9;
        let turn9 = gameModule.takeTurn();
        if (checkModule.checkForWinner() === undefined) {
          gameModule.playerInput(cord9, turn9);
          if (turn9.includes("player1")) {
            piece9 = createX();
          } else if (turn9.includes("player2")) {
            piece9 = createO();
          }
          if (!selector.hasChildNodes()) {
            selector.appendChild(piece9);
          }
        }
        if (checkModule.checkForWinner() !== undefined) {
          gameModule.gameVerdict();
        }
        break;
    }
  });

  return { gameboard, gameboardReset };
})();

const checkModule = (function () {
  const checkForWinner = () => {
    for (let i = 0; i < 3; i++) {
      const a = gameboardModule.gameboard[i][0];
      const b = gameboardModule.gameboard[i][1];
      const c = gameboardModule.gameboard[i][2];

      if (a !== "" && a === b && b == c) {
        if (a.includes("player1")) {
          return "winner  player1";
        } else if (a.includes("player2")) {
          return "winner player2";
        }
      }
    }

    for (let i = 0; i < 3; i++) {
      const a = gameboardModule.gameboard[0][i];
      const b = gameboardModule.gameboard[1][i];
      const c = gameboardModule.gameboard[2][i];

      if (a !== "" && a === b && b == c) {
        if (a.includes("player1")) {
          return "winner  player1";
        } else if (a.includes("player2")) {
          return "winner player2";
        }
      }
    }

    for (let i = 0; i < 1; i++) {
      const a = gameboardModule.gameboard[0][0];
      const b = gameboardModule.gameboard[1][1];
      const c = gameboardModule.gameboard[2][2];

      if (a !== "" && a === b && b == c) {
        if (a.includes("player1")) {
          return "winner  player1";
        } else if (a.includes("player2")) {
          return "winner player2";
        }
      }
    }

    for (let i = 0; i < 1; i++) {
      const a = gameboardModule.gameboard[0][2];
      const b = gameboardModule.gameboard[1][1];
      const c = gameboardModule.gameboard[2][0];

      if (a !== "" && a === b && b == c) {
        if (a.includes("player1")) {
          return "winner  player1";
        } else if (a.includes("player2")) {
          return "winner player2";
        }
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (gameboardModule.gameboard[i][j] === "") {
          return undefined;
        }
      }
    }

    return "draw";
  };

  return { checkForWinner };
})();

const gameModule = (function () {
  let player1Score = 0;
  let player2Score = 0;
  let tieScore = 0;
  let playerTurn = 1;
  let gameState = "not started";

  const gameStatus = (optional) => {
    if (optional === "started") {
      gameState = "started";
    } else if (optional === "not started") {
      gameState = "not started";
    } else if ((optional = "finished"));

    return gameState;
  };

  const playerInput = (cords, playerinput) => {
    gameboardModule.gameboard[cords[0]][cords[3]] = `${playerinput}`;
  };

  const takeTurn = () => {
    if (playerTurn % 2 === 0 && playerTurn !== 0) {
      playerTurn++;
      console.log(playerTurn);
      return " o, player2";
    } else if (
      (playerTurn % 1 === 0 && playerTurn % 2 !== 0) ||
      playerTurn === 0
    ) {
      playerTurn++;
      console.log(playerTurn);
      return "x, player1";
    }
  };

  const gameVerdict = () => {
    if (checkModule.checkForWinner().includes("winner")) {
      if (checkModule.checkForWinner().includes("player1")) {
        gameModule.increaseScore(1);
        gameModule.endGame();
        console.log("Game ended with the winner being player1");
      } else if (checkModule.checkForWinner().includes("player2")) {
        gameModule.increaseScore(2);
        gameModule.endGame();
        console.log("Game ended with the winner being player2");
      }
    } else if (checkModule.checkForWinner().includes("draw")) {
      gameModule.increaseScore("tie");
      gameModule.endGame();
      console.log("Game ended with the tie");
    }
  };

  const increaseScore = (player) => {
    if (player === 1) {
      player1Score++;
      document.querySelector(".player1-score-span").textContent =
        gameModule.showScore("player1");
    } else if (player === 2) {
      player2Score++;
      document.querySelector(".player2-score-span").textContent =
        gameModule.showScore("player2");
    } else if (player === "tie") {
      tieScore++;
      document.querySelector(".tie-score-span").textContent =
        gameModule.showScore("tie");
    }
  };

  const showScore = (optional) => {
    if (optional === "player1") {
      return player1Score;
    } else if (optional === "player2") {
      return player2Score;
    } else if (optional === "tie") {
      return tieScore;
    }
  };

  const buttonAvailiability = (arg) => {
    const btns = document.querySelectorAll(".gameboard-wrapper button");
    if (arg === true) {
      for (let btn of btns) {
        btn.disabled = false;
      }
    } else if (arg === false) {
      for (let btn of btns) {
        btn.disabled = true;
      }
    }
  };

  const newGame = () => {
    gameboardModule.gameboardReset();
    buttonAvailiability(true);
    playerTurn = 1;
    let child = document.querySelectorAll("button > *");
    for (let one of child) {
      one.parentNode.removeChild(one);
    }
  };

  const endGame = () => {
    buttonAvailiability(false);
  };

  const resetScore = () => {
    player1Score = 0;
    player2Score = 0;
    tieScore = 0;
    document.querySelector(".player1-score-span").textContent = player1Score;
    document.querySelector(".player2-score-span").textContent = player2Score;
    document.querySelector(".tie-score-span").textContent = tieScore;
  };

  const resetGame = () => {
    newGame();
    resetScore();
    document.querySelector(".player-name1").textContent = "PLAYER1";
    document.querySelector(".player-name2").textContent = "PLAYER2";
  };

  const gameControls = document.querySelector(".buttons-wrapper");
  gameControls.addEventListener("click", (event) => {
    let eventId = event.target.id;

    switch (eventId) {
      case "new-game":
        gameModule.newGame();
        break;
      case "reset-game":
        gameModule.resetGame();
        break;
    }
  });

  return {
    playerInput,
    takeTurn,
    increaseScore,
    showScore,
    gameStatus,
    playerTurn,
    gameVerdict,
    endGame,
    newGame,
    resetGame,
  };
})();
