function matrixSpiral (matrix) {
  let spiral = [];
  // declare bounds
  let iMin = 0;
  let iMax = matrix.length - 1;
  let jMin = 0;
  let jMax = matrix[0].length - 1;
  // once lower bounds are greater than upper bounds, nothing else can be collected
  while (iMin <= iMax && jMin <= jMax) {
    // collect top row, left to right within bounds
    for (let j = jMin; j <= jMax; j++) {
      spiral.push(matrix[iMin][j]);
    }
    // increment lower bound
    iMin++;
    // collect right column, top to bottom within bounds
    for (let i = iMin; i <= iMax; i++) {
      spiral.push(matrix[i][jMax]);
    }
    // decrement right bound
    jMax--;
    // check needed for rectangular matrices to avoid redundancies
    if (iMin <= iMax) {
      // collect bottom row, right to left within bounds
      for (let j = jMax; j >= jMin; j--) {
        spiral.push(matrix[iMax][j]);
      }
      // decrement upper bound
      iMax--;
    }
    // check needed for rectangular matrices to avoid redundancies
    if (jMin <= jMax) {
      // collect left column, bottom to top within bounds
      for (let i = iMax; i >= iMin; i--) {
        spiral.push(matrix[i][jMin]);
      }
      // increment left bound
      jMin++;
    }
  }
  return spiral;
}


console.log(matrixSpiral([[1, 2], [3, 4]]));
// [1, 2, 4, 3]
console.log(matrixSpiral([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));
// [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
console.log(matrixSpiral([[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18]]));
// [1, 2, 3, 4, 5, 6, 12, 18, 17, 16, 15, 14, 13, 7, 8, 9, 10, 11]
console.log(matrixSpiral([['H', 'E', 'R'], ['E', 'H', 'E'], ['G', 'O', 'I'], ['A', 'W', 'S'], ['S', 'F', 'A'], ['S', 'U', 'S'], ['E', 'N', 'E'], ['M', '!', 'C'], ['T', 'E', 'R']]));
// ['H', 'E', 'R', 'E', 'I', 'S', 'A', 'S', 'E', 'C', 'R', 'E', 'T', 'M', 'E', 'S', 'S', 'A', 'G', 'E', 'H', 'O', 'W', 'F', 'U', 'N', '!']
console.log(matrixSpiral([['T', 'H', 'E', 'S', 'P', 'I', 'R'], ['Y', 'W', 'H', 'E', 'R', 'E', 'A'], ['R', 'E', 'V', 'E', 'S', 'I', 'L']]));
// ['T', 'H', 'E', 'S', 'P', 'I', 'R', 'A', 'L', 'I', 'S', 'E', 'V', 'E', 'R', 'Y', 'W', 'H', 'E', 'R', 'E']