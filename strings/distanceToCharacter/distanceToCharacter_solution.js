// Most straightforward - 2 passes
// O(n) time, O(n) space
function distanceToCharacter(string, character) {
  let distances = [];
  let lastOccurrence = null;
  // traverse string once from left to right
  for (let i = 0; i < string.length; i++) {
    // keep track of each occurrence
    if (string[i] === character) {
      lastOccurrence = i;
    }
    // value for index will be the distance from the last occurrence, or infinity if it has not yet been encountered
    distances[i] = lastOccurrence !== null ? i - lastOccurrence : Infinity;
  }
  // reset occurrence reference
  lastOccurrence = null;
  // now traverse string from right to left
  for (let i = string.length - 1; i >= 0; i--) {
    // keep track of each occurrence
    if (string[i] === character) {
      lastOccurrence = i;
    } else {
      // value will be either the distance that is already there (if target has not been found yet)
      // or the lesser of the value that is already there and the distance from the last occurrence coming the other direction
      distances[i] = lastOccurrence !== null ? Math.min(lastOccurrence - i, distances[i]) : distances[i];
    }
  }
  return distances;
}

// This one is a bit more convoluted...
// Will solve in less than two full passes if there is more than one occurrence
// O(n) time, O(n) space
// function distanceToCharacter(string, character) {
//   let i = 0;
//   let probeLeft;
//   let probeRight;
//   let distance;
//   let distances = Array(string.length).fill(Infinity);

//   while(i < string.length) {
//     // once an occurrence is found
//     if (string[i] === character) {
//       distances[i] = 0;
//       probeLeft = i - 1;
//       probeRight = i + 1;
//       // send out a probe to the left
//       while (string[probeLeft] !== undefined) {
//         // calculate distance from the occurrence
//         distance = Math.abs(probeLeft - i);
//         // if a smaller value is encountered (which will happen for each occurrence after the first)
//         if (distance >= distances[probeLeft]) {
//           // break out of probe
//           break;
//         }
//         // otherwise set the distance value and move probe one spot to left
//         distances[probeLeft] = distance;
//         probeLeft--;
//       }
//       // send out a probe to the right
//       while (string[probeRight] !== undefined) {
//         // if another occurrence has been found
//         if (string[probeRight] === character) {
//           // fast forward i to that spot and break out of probe
//           i = probeRight;
//           break;
//         }
//         // otherwise, calculate/set the distance value and move probe one spot to right
//         distance = Math.abs(probeRight - i);
//         distances[probeRight] = distance;
//         probeRight++;
//       }
//       // once the right probe has reached the end of the array, can return the distances
//       if (probeRight === string.length) {
//         return distances;
//       }
//     } else {
//       // need to find first occurrence;
//       i++;
//     }
//   }
//   // if character was never found
//   return distances;
// };


console.log(distanceToCharacter('abcdefgfedcba', 'a'));
// [0, 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1, 0]
console.log(distanceToCharacter('abcdefghijklmnopqrstuvwxyz', 'a'));
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
console.log(distanceToCharacter('ilikealgorithms', 'i'));
// [0, 1, 0, 1, 2, 3, 4, 3, 2, 1, 0, 1, 2, 3, 4]
console.log(distanceToCharacter('iamusingatwopasssolution', 'u'));
// [3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4]
console.log(distanceToCharacter('nothere', 'z'));
// [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity]