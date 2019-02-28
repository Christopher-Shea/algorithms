// Keep non-0 integers in same order
// O(n) time, O(1) space
function moveZeros(integers) {
  let swap;
  for (let i = 0; i < integers.length; i++) {
    // only interested in taking action when integer is 0;
    if (integers[i] === 0) {
      // give swap a value the first time it is used
      if (swap === undefined) {
        swap = i + 1;
      }
      // increment swap until it is either ouf of bounds (undefined) or a non-0 integer
      while(integers[swap] === 0) {
        swap++;
      }
      // if swap is out of bounds, there are no non-0 integers to swap with the current index
      // since everything before the current index is a non-0 integer, there are i non-0 integers
      if (swap === integers.length) {
        return i;
      }
      // if swap is in bounds AND non-0, can swap it with the 0 found at i
      [integers[i], integers[swap]] = [integers[swap], integers[i]];
      // since a 0 was just placed at swap's index, increment to use as starting point for next non-0 search
      swap++
    }
  }
  // for empty arrays and arrays with all non-zero integers
  return integers.length ? integers.length : null;
}

// If order of non-0 integers does not matter
// O(n) time, O(1) space
// function moveZeros(integers){
//   // for empty arrays
//   if (!integers.length) {
//     return null;
//   }
//   // will move towards the center from both ends of the array
//   // searching for 0s from the start, and non-0s from the back
//   let i = 0;
//   let swap = integers.length - 1;
//   while(i <= swap) {
//     // if i is a 0
//     if (!integers[i]) {
//       // check if swap is non-0
//       if (integers[swap]) {
//         // if it is, do the swap and then increment i to check next element in array
//         [integers[i], integers[swap]] = [integers[swap], integers[i]];
//         i++;
//       }
//       // in both cases - whether swap successful, or still looking for non-0, decrement swap
//       swap--;
//     } else {
//       // if i is not a 0, can leave untouched - move to next element of array
//       i++;
//     }
//   }
//   // since everything before i is a non-0 integer, there are i non-0 integers
//   return i;
// }

// Move zeros to front of array, keeping relative order of non-zeros
// O(n) time, O(1) space
// function moveZeros(integers) {
//   let swap;
//   for (let i = integers.length - 1; i >= 0; i--) {
//     if (integers[i] === 0) {
//       if (swap === undefined) {
//         swap = i - 1;
//       }
//       while(integers[swap] === 0) {
//         swap--;
//       }
//       if (swap === -1) {
//         return integers.length - 1 - i;
//       }
//       [integers[i], integers[swap]] = [integers[swap], integers[i]];
//       swap--;
//     }
//   }
//   return integers.length ? integers.length : null;
// }



// empty array
let integers = [];
console.log(moveZeros(integers)); // null

// small arrays
integers = [-1];
console.log(moveZeros(integers)); // 1
console.log(integers); // [-1]
integers = [0];
console.log(moveZeros(integers)); // 0
console.log(integers); // [0]
integers = [1, -5];
console.log(moveZeros(integers)); // 2
console.log(integers); // [1, -5]
integers = [0, -5];
console.log(moveZeros(integers)); // 1
console.log(integers); // [-5, 0]
integers = [7, 0];
console.log(moveZeros(integers)); // 1
console.log(integers); // [7, 0]
integers = [-31, 0, 0];
console.log(moveZeros(integers)); // 1
console.log(integers); // [-31, 0, 0]
integers = [0, 5, 0];
console.log(moveZeros(integers)); // 1
console.log(integers); // [5, 0, 0]
integers = [0, 0, 9];
console.log(moveZeros(integers)); // 1
console.log(integers); // [9, 0, 0]
integers = [9, 2, 0];
console.log(moveZeros(integers)); // 2
console.log(integers); // [9, 2, 0]
integers = [0, 1, 2];
console.log(moveZeros(integers)); // 2
console.log(integers); // [1, 2, 0] (first solution) or [2, 1, 0] (second solution)

// all 0s
integers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log(moveZeros(integers)); // 0
console.log(integers); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// no 0s
integers = [1, 2, -3, 4, 5, -6, 7, 8, 9, 10, 4, -5, -6, 7];
console.log(moveZeros(integers)); // 14
console.log(integers); // [1, 2, -3, 4, 5, -6, 7, 8, 9, 10, 4, -5, -6, 7]

// mixed 0s and non-0s
integers = [3, 2, 0, -8, 0, 0, 24, 9, -2, 5, 0, 9, 1, -95, 24, 54, -2, 0, 4, 8, -5, 6, 9, 0, 0];
console.log(moveZeros(integers)); // 18
console.log(integers);
// [3, 2, -8, 24, 9, -2, 5, 9, 1, -95, 24, 54, -2, 4, 8, -5, 6, 9, 0, 0, 0, 0, 0, 0, 0] (first solution)
// [3, 2, 9, -8, 6, -5, 24, 9, -2, 5, 8, 9, 1, -95, 24, 54, -2, 4, 0, 0, 0, 0, 0, 0, 0] (second solution)