// British coins
const coins = [1, 2, 5, 10, 20, 50, 100, 200];

// American coins
// const coins = [1, 5, 10, 25, 50, 100];

// Recursive solution - time complexity is exponential! O(2^n)
// function coinSums(total) {
//   let count = 0;
//   (function makeChange(index, value) {
//     // base case - if 0th index of coin array is reached, a solution has been found
//     if (index === 0) {
//       count++;
//     } else {
//       // subtract the current coin as many times as possible while retaining a positive difference
//       // each time the current coin successfully fits into the remaining total,
//       // shift the current coin to the next smallest value and continue searching for a solution
//       while( value >= 0) {
//         // first, avoid current coin altoether and get possible combinations using only smaller coin values
//         makeChange(index - 1, value);
//         // update value by subtracting value of current coin
//         value -= coins[index];
//       }
//     }
//   })(coins.length - 1, total)
//   return count;
// }

// Dynamic programming solution
// Space complexity - O(n)
// Time complexity - O(mn) where m is number of coins available, and n is the input value
function coinSums(total) {
  // dynamically build the set of solutions for all totals UP TO the input total value
  // for a given total value, the number of solutions for that value will be represented by the integer found at that index in the array
  const sums = [];
  // technically, there is 1 way to produce a total of 0
  sums[0] = 1;
  // go through the set of available coins from smallest to largest
  for (let i = 0; i < coins.length; i++) {
    // when working with a given coin, do not consider larger coins
    let currentCoin = coins[i];
    // do not consider totals less than the value of the currentCoin, because it will not 'fit' and the number of solutions will remain unchanged
    for (let j = currentCoin; j <= total; j++) {
      // for first pass through sums array, need to initialize values at all indices
      sums[j] = sums[j] || 0;
      // 'j' is the current total value that is being considered
      // each new solution for 'j' that involves the currentCoin involves not only the currentCoin, but also whatever difference is left after subtracting the value of the currentCoin
      // the value found in the sums array at the index calculated by 'j - currentCoin' represents the number of ways to produce that difference
      // add this to the previous number of solutions for 'j', before the currentCoin was considered
      sums[j] += sums[j - currentCoin];
    }
  }
  // return the last value of the array
  return sums[total];
}


console.log(coinSums(5)); // 4
console.log(coinSums(8)); // 7
console.log(coinSums(12)); // 15
console.log(coinSums(17)); // 28