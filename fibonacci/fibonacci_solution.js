// O(n) time, O(n) space
// function fibonacci(n) {
//   let fib = [0, 1];
//   while (fib.length <= n + 1) {
//     // calculate next number in series and add
//     fib.push(fib[fib.length - 2] + fib[fib.length - 1]);
//   }
//   return fib[n];
// };


// O(n) time, O(1) space
function fibonacci(n) {
  let [a, b] = [0, 1];
  while (n > 1){
    [a, b] = [b, a + b];
    n--;
  }
  // if n is 0, return 0
  return n ? b : a;
}


console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(5)); // 5
console.log(fibonacci(10)); // 55
console.log(fibonacci(12)); // 144
console.log(fibonacci(20)); // 6765
console.log(fibonacci(28)); // 317811

module.exports = fibonacci;