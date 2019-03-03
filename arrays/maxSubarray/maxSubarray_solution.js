// O(n) time, O(1) space
function maxSubarray(integers) {
  // start with the first integer as the maximum sum
  let maxSum = integers[0];
  let workingSum = integers[0];
  // starting with the second integer
  for (let i = 1; i < integers.length; i++) {
    // every integer must be incorporated into the workingSum
    // consider - will carrying over the current workingSum provide a more positive value than the current integer alone?
    // the workingSum can be negative if no positive integers have been encountered yet
    // the workingSum can also incorporate negative integers as long as there are also enough positive integers to make the workingSum net positive
    workingSum = Math.max(integers[i] + workingSum, integers[i]);
    // check if a new maximum sum has been found;
    maxSum = Math.max(maxSum, workingSum);
  }
  return integers.length ? maxSum : null;
};


// empty
console.log(maxSubarray([])); // null
// one value
console.log(maxSubarray([-50])); // -50
// all negative
let integers = [-60, -5, -3, -1, -9, -54, -73];
console.log(maxSubarray(integers)); // -1
// all positive
integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(maxSubarray(integers)); // 55
// mixed
integers = [7, 1, -5, 0, 2, 98, -104, 6, 8, 10, -6, 3];
console.log(maxSubarray(integers)); // 103
