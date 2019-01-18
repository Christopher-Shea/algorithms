function rotateMatrix (matrix, velocity = 1) {
  // 4 rotations return matrix to starting point
  velocity = velocity % 4;
  // if there are no rotations to be done, return the original matrix
  if (velocity === 0 || velocity === -0) {
    return matrix;
  }
  // can convert counterclockwise motion to the corresponding clockwise motion if desired
  // if (velocity < 0) {
  //   velocity = velocity + 4;
  // }
  let rotated = [];
  // each time it is rotated 90 degrees, the number of columns will become the number of rows
  let cols = matrix[0].length;
  if (velocity > 0) {
    // clockwise rotation - for each column, start at the bottom row and gather values
    for (let j = 0; j <= cols - 1; j++) {
      rotated.push(matrix.reduceRight(((newRow, oldRow) => newRow.concat(oldRow[j])), []));
    }
  } else {
    // counterclockwise rotation - for each column, start at the top row and gather values
    for (let j = cols - 1; j >= 0; j--) {
      rotated.push(matrix.reduce(((newRow, oldRow) => newRow.concat(oldRow[j])), []));
    }
  }
  // increment/decrement velocity appropriately based on direction of motion
  velocity = velocity > 0 ? velocity - 1 : velocity + 1;
  // rotate again if needed
  return velocity === 0 ? rotated : rotateMatrix(rotated, velocity);
}

// square matrix
console.log(rotateMatrix([[1, 2], [3, 4]]));
// [[3, 1],
//  [4, 2]]
console.log(rotateMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));
// [[13, 9, 5, 1],
//  [14, 10, 6, 2],
//  [15, 11, 7, 3],
//  [16, 12, 8, 4]]

// rectangular matrix
console.log(rotateMatrix([[1, 2], [3, 4], [5, 6]]));
// [[5, 3, 1],
//  [6, 4, 2]]
console.log(rotateMatrix([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]]));
// [[11, 6, 1],
//  [12, 7, 2],
//  [13, 8, 3],
//  [14, 9, 4],
//  [15, 10, 5]]

// counterclockwise
console.log(rotateMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], -1));
// [[4, 8, 12, 16],
//  [3, 7, 11, 15],
//  [2, 6, 10, 14],
//  [1, 5, 9, 13]]
console.log(rotateMatrix([[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18]], -1));
// [[6, 12, 18],
//  [5, 11, 17],
//  [4, 10, 16],
//  [3, 9, 15],
//  [2, 8, 14],
//  [1, 7, 13]]

// multiple rotations
console.log(rotateMatrix([[1, 2], [3, 4], [5, 6]], 2));
// [[6, 5],
//  [4, 3],
//  [2, 1]]
console.log(rotateMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], -3));
// [[13, 9, 5, 1],
//  [14, 10, 6, 2],
//  [15, 11, 7, 3],
//  [16, 12, 8, 4]]
console.log(rotateMatrix([[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [13, 14, 15, 16, 17, 18]], 19));
// [[6, 12, 18],
//  [5, 11, 17],
//  [4, 10, 16],
//  [3, 9, 15],
//  [2, 8, 14],
//  [1, 7, 13]]