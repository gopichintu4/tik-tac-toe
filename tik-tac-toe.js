let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleClick(index) {
  if (board[index] === '' && gameActive) {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    checkWinner();
    togglePlayer();
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
      gameActive = false;
    }
  }

  if (!board.includes('') && gameActive) {
    document.getElementById('status').innerText = 'It\'s a draw!';
    gameActive = false;
  }
}

function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;

  const cells = document.getElementsByClassName('cell');
  for (const cell of cells) {
    cell.innerText = '';
  }

  document.getElementById('status').innerText = '';
}