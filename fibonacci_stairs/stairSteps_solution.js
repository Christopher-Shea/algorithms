// the key to this problem is recognizing that a given step can be reached two ways:
// taking a double step from the step two below
// taking a single step from the step one below
// and that these totals follow the fibonacci sequence

// fibonacci solution
// there is 1 way to reach zero steps - by not taking ANY
// will be returning the n + 1 position in the fibonacci sequence
// function stairSteps (n) {
//   if (n === 0) {
//     return 0;
//   }
//   let [a, b] = [0, 1];
//   while (n > 0){
//     [a, b] = [b, a + b];
//     n--;
//   }
//   return b;
// }

// dynamic solution
function stairSteps (n) {
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

console.log(stairSteps(0)); // 0
console.log(stairSteps(1)); // 1
console.log(stairSteps(2)); // 2
console.log(stairSteps(5)); // 8
console.log(stairSteps(10)); // 89
console.log(stairSteps(12)); // 233
console.log(stairSteps(20)); // 10946
console.log(stairSteps(28)); // 514229