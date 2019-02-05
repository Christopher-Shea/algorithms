// the key to this problem is recognizing that a given step can be reached two ways:
// either taking a double step from the step two below or taking a single step from the step one below
// this pattern follows the fibonacci sequence


// Using existing fibonacci function
// const fibonacci = require('../fibonacci/fibonacci_solution.js');
// function stairSteps(n) {
//   return n ? fibonacci(n + 1) : 0;
// }

// Can also tweak fibonacci solution to start with [1, 1] instead of [0, 1]
// function stairSteps(n) {
//   let [a, b] = [1, 1];
//   while (n > 1){
//     [a, b] = [b, a + b];
//     n--;
//   }
//   return n ? b : 0;
// }

// Dynamic solution
function stairSteps(n) {
  const steps = [0, 1, 2];
  // starting on the third step
  for (let i = 3; i <= n; i++) {
    // give index an initial value
    steps[i] = 0;
    // add number of solutions created by taking a single-step from one step below
    steps[i] += steps[i - 1];
    // add number of solutions created by taking a double-step from two steps below
    steps[i] += steps[i - 2];
  }
  return steps[n];
}


// If triple-steps are allowed
// function tripleSteps(n) {
//   let [a, b, c] = [1, 1, 2];
//   while (n > 1){
//     [a, b, c] = [b, c, a + b + c];
//     n--;
//   }
//   return n ? b : 0;
// }

// Dynamic triple-steps
function tripleSteps(n) {
  const steps = [1, 1, 2];
  // starting on the third step
  for (let i = 3; i <= n; i++) {
    // give index an initial value
    steps[i] = 0;
    // add number of solutions created by taking a single-step from one step below
    steps[i] += steps[i - 1];
    // add number of solutions created by taking a double-step from two steps below
    steps[i] += steps[i - 2];
    // add number of solutions created by taking a triple-step from three steps below
    steps[i] += steps[i - 3];
  }
  return n ? steps[n] : 0;
}

console.log(stairSteps(0)); // 0
console.log(stairSteps(1)); // 1
console.log(stairSteps(2)); // 2
console.log(stairSteps(5)); // 8
console.log(stairSteps(10)); // 89
console.log(stairSteps(12)); // 233
console.log(stairSteps(20)); // 10946
console.log(stairSteps(28)); // 514229


console.log(tripleSteps(0)); // 0
console.log(tripleSteps(1)); // 1
console.log(tripleSteps(2)); // 2
console.log(tripleSteps(3)); // 4
console.log(tripleSteps(4)); // 7
console.log(tripleSteps(5)); // 13
console.log(tripleSteps(6)); // 24
console.log(tripleSteps(10)); // 274
