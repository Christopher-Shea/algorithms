// O(n) time, O(1) space
function subarrayGivenSum(integers, sum) {
  // initialize window and working sum
  let start = 0;
  let end = 1;
  let workingSum = integers[0];
  // while the window is within bounds
  while (end <= integers.length) {
    // if the working sum is not as large as the target
    if (workingSum < sum) {
      // try adding another integer (expand the window)
      workingSum += integers[end];
      end ++;
    // if the working sum is larger than the target
    } else if (workingSum > sum) {
      // try subtracting an integer (contract the window)
      workingSum -= integers[start];
      start++;
    } else {
      // otherwise the sum has been found - return the target subarray
      return integers.slice(start, end);
    }
  }
  // no subarray with the target sum was found - return null
  return null;
}


function subarrayGivenSum(integers, sum) {
  // initialize window and working sum
  let subarrays =[];
  let start = 0;
  let end = 1;
  let workingSum = integers[0];
  // logic is the same for expanding and constricting the window
  while (end <= integers.length) {
    if (workingSum < sum) {
      workingSum += integers[end];
      end ++;
    } else if (workingSum > sum) {
      workingSum -= integers[start];
      start++;
    } else {
      // until a target is found
      let startZeros = 0;
      let endZeros = 0;
      // count the zeros padding the front of the subarray, if any
      while(integers[start] === 0) {
        startZeros++;
        start++;
      }
      // count the zeros padding the end of the subarray, if any
      while(integers[end] === 0) {
        endZeros++;
        end++;
      }
      // use these counts to slice the different permutations of the subarray
      for (let i = start - startZeros; i <= start; i++) {
        for (let j = end - endZeros; j <= end; j++) {
          subarrays.push(integers.slice(i, j));
        }
      }
      // expand the window to continue searching for the next subarray
      workingSum += integers[end];
      end++;
    }
  }
  return subarrays.length ? subarrays : null;
}


console.log(subarrayGivenSum([], 5)); // null
console.log(subarrayGivenSum([1, 2, 3, 4, 5], 50)); // null
console.log(subarrayGivenSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100], 100)); // [[100]]
console.log(subarrayGivenSum([25, 25, 25, 25, 50, 25], 100));
// [[25, 25, 25, 25], [25, 25, 50], [25, 50, 25]]
console.log(subarrayGivenSum([4, 8, 3, 4, 0, 9, 12, 2, 5, 5, 8, 1, 7, 2, 6], 21));
// [[0, 9, 12], [9, 12], [2, 5, 5, 8, 1], [5, 8, 1, 7]]
console.log(subarrayGivenSum([3, 4, 5, 0, 0, 12], 12));
// [
//   [3, 4, 5],
//   [3, 4, 5, 0],
//   [3, 4, 5, 0, 0],
//   [0, 0, 12],
//   [0, 12],
//   [12]
// ]
console.log(subarrayGivenSum([0, 0, 1, 1, 0, 0], 2));
// [
//   [0, 0, 1, 1],
//   [0, 0, 1, 1, 0],
//   [0, 0, 1, 1, 0, 0],
//   [0, 1, 1],
//   [0, 1, 1, 0],
//   [0, 1, 1, 0, 0],
//   [1, 1],
//   [1, 1, 0],
//   [1, 1, 0, 0]
// ]
console.log(subarrayGivenSum([1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], 7));
// [
//   [1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
//   [1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
//   [1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
//   [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 1, 1, 1, 1, 1, 1, 1],
//   [0, 1, 1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 1, 1, 1]
// ]