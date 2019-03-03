// Keep non-0 integers in same order
// O(n) time, O(1) space
// function moveZeros(integers) {
//   let swap;
//   for (let i = 0; i < integers.length; i++) {
//     // only interested in taking action when integer is 0;
//     if (integers[i] === 0) {
//       // give swap a value the first time it is used
//       if (swap === undefined) {
//         swap = i + 1;
//       }
//       // increment swap until it is either ouf of bounds (undefined) or a non-0 integer
//       while(integers[swap] === 0) {
//         swap++;
//       }
//       // if swap is out of bounds, there are no non-0 integers to swap with the current index
//       // since everything before the current index is a non-0 integer, there are i non-0 integers
//       if (swap === integers.length) {
//         return i;
//       }
//       // if swap is in bounds AND non-0, can swap it with the 0 found at i
//       [integers[i], integers[swap]] = [integers[swap], integers[i]];
//       // since a 0 was just placed at swap's index, increment to use as starting point for next non-0 search
//       swap++
//     }
//   }
//   // for empty arrays and arrays with all non-zero integers
//   return integers.length ? integers.length : null;
// }


// Another approach with fewer conditional boundary checks
// function moveZeros(integers) {
//   let swap = 0;
//   let i = 0;
//   while (i < integers.length) {
//     if (integers[i] !== 0) {
//       // once i has found a non-zero integer, bring it back to swap's location
//       // (this swap is not necessary until a zero has been encountered, because i and swap will have the same value)
//       [integers[i], integers[swap]] = [integers[swap], integers[i]]
//       // increase swap - will either be equal to i if no zeros have been encountered, or an index at which a zero can be found
//       swap++
//     }
//     // send i out to search for the next non-zero to bring to the front
//     i++
//   }
//   // once i has reached the end of the array, swap will either be i (if no zeros found) or one index ahead of the last integer in the array
//   return integers.length ? swap : null;
// };


// Another approach using the same logic as previous solution, but overwrites values rather than swap them
// Marginally faster performance
function moveZeros(integers) {
	let swap = 0;
	for(let i = 0; i < integers.length; i++){
		if(integers[i] !== 0){
    	integers[swap] = integers[i];
			swap++;
		}
  }
  // store position of swap before sending it forward to overwrite with zeros
  let nonZeros = swap;
	while(swap < integers.length){
		integers[swap] = 0;
		swap++;
  }
  return integers.length ? nonZeros : null;
};




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

// ------------------------------------------------------------------
// Move zeros to front of array, keeping relative order
// (Tweak of first three solutions above)
// ------------------------------------------------------------------
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

// function moveZeros(integers) {
//   let swap = integers.length - 1;
//   let i = integers.length - 1;
//   while (i >= 0) {
//     if(integers[i] !== 0) {
//       [integers[swap], integers[i]] = [integers[i], integers[swap]];
//       swap--;
//     }
//     i--;
//   }
//   return integers.length ? integers.length - 1 - swap : null;
// }

// function moveZeros(integers) {
//   if (!integers.length) {
//     return null;
//   }
//   let swap = integers.length - 1;
//   for (let i = integers.length - 1; i >= 0; i--) {
//     if (integers[i] !== 0) {
//       integers[swap] = integers[i];
//       swap--;
//     }
//   }
//   let nonZeros = integers.length - 1 - swap;
//   while(swap >= 0) {
//     integers[swap] = 0;
//     swap--;
//   }
//   return nonZeros;
// }

// order doesn't matter
// function moveZeros(integers){
//   if (!integers.length) {
//     return null;
//   }
//   let i = integers.length - 1;
//   let swap = 0;
//   while(i >= swap) {
//     if (integers[i] === 0) {
//       if (integers[swap]) {
//         [integers[i], integers[swap]] = [integers[swap], integers[i]];
//         i--;
//       }
//       swap++;
//     } else {
//       i--;
//     }
//   }
//   // since everything before i is a non-0 integer, there are i non-0 integers
//   return integers.length - 1 - i;;
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