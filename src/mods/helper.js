export function emptyIndex(gameArrC, value = true) {
    const gameArrCopy = gameArrC.slice();
    const emptyIndex = gameArrCopy
      .map((item, i) => {
        if (item === null) {
          return i;
        } else {
          return null;
        }
      })
      .filter((item) => item !== null);
    const random = Math.floor(Math.random() * emptyIndex.length);
    if (value) {
      return emptyIndex[random];
    } else return emptyIndex;
  }
  
  export function getWinner(board) {
    let winner = null;
    const winnerCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    winnerCombination.forEach((comb) => {
      const [a, b, c] = comb;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        winner = board[a];
      }
    });
    if (emptyIndex(board, false).length === 0 && !winner) {
      winner = "tie";
    }
    return winner;
  }
  
  export function evaluate(board, depth, yourChoice) {
    const result = getWinner(board);
    if (result) {
      return result === yourChoice ? 10 - depth : depth + 10;
    }
    if (emptyIndex(board, false).length === 0) {
      return 0;
    }
  }
  
  export function minimax(
    board,
    depth,
    isMaximizing,
    yourChoice,
    computerChoice
  ) {
    const score = evaluate(board, depth, yourChoice, computerChoice);
  
    if (score !== undefined) {
      return score;
    }
  
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = computerChoice;
          bestScore = Math.max(
            bestScore,
            minimax(board, depth + 1, false, yourChoice, computerChoice)
          );
          board[i] = null;
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {
          board[i] = yourChoice;
          bestScore = Math.min(
            bestScore,
            minimax(board, depth + 1, true, yourChoice, computerChoice)
          );
          board[i] = null;
        }
      }
      return bestScore;
    }
  }
  
  export function bestMove(arr, yourChoice, computerChoice) {
    let bestScore = -Infinity;
    let move;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === null) {
        arr[i] = computerChoice;
        let score = minimax(arr, 0, false, yourChoice, computerChoice);
        arr[i] = null;
        if (score > bestScore) {
          move = i;
          bestScore = score;
        }
      }
    }
  
    return move;
  }
  