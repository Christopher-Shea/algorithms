//British pence
const coins = [1, 2, 5, 10, 20, 50, 100, 200];

// American cents
// const coins = [1, 5, 10, 25, 50, 100]

// recursive solution
function coinSums (total) {
  let count = 0;
  (function makeChange(index, value) {
    if (index === 0) {
      count++;
    } else {
      while( value >= 0) {
        makeChange(index - 1, value);
        value -= coins[index];
      }
    }
  })(coins.length - 1, total)
  return count;
}

console.log(coinSums(5)) //4
console.log(coinSums(8)) //7
console.log(coinSums(12)) //15
console.log(coinSums(17)) //28