const generatePlayerBoard = (numberOfRows, numberOfColumns) => {

  let board = [

  ];

  for (rowCount = 0; rowCount < numberOfRows; rowCount++) {
    let row = [];
    for (columnCount = 0; columnCount < numberOfColumns; columnCount++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};


const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {

  let board = [

  ];

  for (rowCount = 0; rowCount < numberOfRows; rowCount++) {
    let row = [];
    for (columnCount = 0; columnCount < numberOfColumns; columnCount++) {
      row.push(' ');
    }
    board.push(row);
  }

  let numberOfBombsPlaced = 0;

  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = Math.floor(Math.random()*numberOfRows);
    let randomColumnIndex = Math.floor(Math.random()*numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    /*we'll make sure later that bombs aren't placed on tops of existing
    bombs when we learn control flow*/
    numberOfBombsPlaced++;
  }

  return board;

};

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3,4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
