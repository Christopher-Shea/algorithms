// Only for square matrices, does not take a directional input
// Rotates concentric squares until center is reached
// function rotateMatrix (matrix) {
//   const l = matrix.length - 1;
//   for (let i = 0; i < matrix.length/2; i++) {
//     // move diagonally in towards the center of the square
//     for (let j = i; j < l - i; j++) {
//       // take advantage of rotation pattern formed by equivalent points on each side of the square
//       [matrix[i][j], matrix[j][l-i], matrix[l-i][l-j], matrix[l-j][i]] =
//       [matrix[l-j][i], matrix[i][j], matrix[j][l-i], matrix[l-i][l-j]];
//     }
//   }
//   return matrix;
// }


// Only for square matrices - rotation 90 degrees clockwise OR counterclockwise
// Builds a new matrix while looping through input
// function rotateMatrix (matrix, direction = 1) {
//   const edge = matrix.length - 1;
//   const rotated = [];
//   for (let i = 0; i <= edge; i++) {
//     let newRow = [];
//     for (let j = 0; j <= edge; j++) {
//       newRow.push(direction > 0 ? matrix[edge-j][i] : matrix[j][edge-i]);
//     }
//     rotated.push(newRow);
//   }
//   return rotated;
// }


// Same constraints as function above - square matrices, either direction
// Same general logic, just used map to return the rotated matrix and had fun with a little code golf
// rotateMatrix = (m, d = 1) => m.map((r, i) => r.map((v, j) => d > 0 ? m[m.length-1-j][i] : m[j][m.length-1-i]));


// Square OR rectangular matrices, clockwise OR counterclockwise
// function rotateMatrix (matrix, direction = 1) {
//   const rotated = [];
//   const cols = matrix[0].length;
//   if (direction > 0) {
//     // clockwise rotation - values in first column become the first row, etc.
//     for(let j = 0; j < cols; j++) {
//       // from each row in the matrix, grab the value from the given column
//       // reverse gathered values to maintain proper rotated order
//       let newRow = matrix.map(row => row[j]).reverse();
//       rotated.push(newRow);
//     }
//   } else {
//     // counterclockwise rotation - values in the last column become the first row, etc.
//     for(let j = cols - 1; j >= 0; j--) {
//       // from each row in the matrix, grab the value from the given column
//       let newRow = matrix.map(row => row[j]);
//       rotated.push(newRow);
//     }
//   }
//   return rotated;
// };


// Square OR rectangular matrices, clockwise OR counterclockwise, any number of times
// Same logic as previous solution, but using reduceRight/reduce instead of map.reverse/map
function rotateMatrix (matrix, velocity = 1) {
  // 4 rotations return matrix to starting point
  velocity = velocity % 4;
  // if there are no rotations to be done, return the original matrix
  if (velocity === 0 || velocity === -0) {
    return matrix;
  }
  const rotated = [];
  if (velocity > 0) {
    // clockwise rotation - start at first column and gather values from bottom
    for (let j = 0; j < matrix[0].length; j++) {
      rotated.push(matrix.reduceRight(((newRow, oldRow) => newRow.concat(oldRow[j])), []));
    }
  } else {
    // counterclockwise rotation - start at last column and gather values from top
    for (let j = matrix[0].length - 1; j >= 0; j--) {
      rotated.push(matrix.reduce(((newRow, oldRow) => newRow.concat(oldRow[j])), []));
    }
  }
  // increment/decrement velocity appropriately based on direction of motion
  velocity = velocity > 0 ? velocity - 1 : velocity + 1;
  // rotate again if needed
  return velocity === 0 ? rotated : rotateMatrix(rotated, velocity);
}

module.exports = rotateMatrix;

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