// Two Dimensional Arrays
let matrix = [];

for (let i = 0; i < 5; i += 1) {
  matrix[i] = [];
}

for (let row = 0; row < 5; row += 1) {
  for (let col = 0; col < 5; col += 1) {
    matrix[row][col] = (row + 1) * (col + 1);
  }
}

console.log('matrix', matrix)
console.log('matrix[2][3]', matrix[2][3])