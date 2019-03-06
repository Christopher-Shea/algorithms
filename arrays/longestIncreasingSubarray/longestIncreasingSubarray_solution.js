// O(n) time, O(1) space
function longestIncreasingSubarray(integers) {
  // start with the assumption that there is at least one integer in the array
  // each integer by itself counts as an increasing subarray
  let workingLength = 1;
  let maxLength = 1;
  for (let i = 0; i < integers.length; i++) {
    // if the next integer in the array is larger
    if (integers[i] < integers[i + 1]) {
      // incrase the working length and check if it is larger than the current maximum length
      workingLength++;
      maxLength = Math.max(maxLength, workingLength);
    } else {
      // if next integer is smaller, reset the working length
      workingLength = 1;
    }
  }
  return integers.length ? maxLength : 0;
}


// empty array
console.log(longestIncreasingSubarray([])); // 0
// one value
console.log(longestIncreasingSubarray([0])); // 1
// all the same value
let integers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
console.log(longestIncreasingSubarray(integers)); // 1
// continuously decreasing
integers = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6];
console.log(longestIncreasingSubarray(integers)); // 1
// continually increasing
integers = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6];
console.log(longestIncreasingSubarray(integers)); // 12
// positive integers
integers = [10, 12, 3, 5, 9, 21, 1, 4, 8, 4, 0]
console.log(longestIncreasingSubarray(integers)); // 4
// positive and negative integers
integers = [9, 2, -40, 0, 102, -60, -50, 0, 8, 95, -200];
console.log(longestIncreasingSubarray(integers)); // 5

