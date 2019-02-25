const mergeIntervals = require('../../arrays/mergeIntervals/mergeIntervals_solution.js');

// By going through the string in order, the intervals will naturally be sorted by starting index
// However, JavaScript objects do not guarantee insertion order, so the values must be sorted before merging
// Thus, time complexity is O(nlogn)
// function partitionLabels(string) {
//   let intervals = {};
//   // iterate through string and build set of intervals for each distinct character
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] in intervals) {
//       // if character is already in dictionary, adjust interval end point to current index
//       intervals[string[i]][1] = i;
//     } else {
//       // if character is not in dictionary, initialize its interval
//       intervals[string[i]] = [i, i];
//     }
//   }
//   // grab all intervals, merge them, and map the merged intervals to their respective lengths
//   return mergeIntervals(Object.values(intervals), false).map(interval => interval[1] - interval[0] + 1);
// }

// Using a JavaScript Map, which does guarantee insertion order, means intervals do not need to be sorted
// The Map methods are a little clunkier (must call get() and set() to access values)
// However, by avoiding the .sort() before merging, time complexity shrinks to O(n)
function partitionLabels(string) {
  let intervalMap = new Map();
  // iterate through string and build set of intervals for each distinct character
  for (let i = 0; i < string.length; i++) {
    let interval = intervalMap.get(string[i]);
    if (interval) {
      // if character is already in dictionary, adjust interval end point to current index
      interval[1] = i;
      intervalMap.set(string[i], interval);
    } else {
      // if character is not in dictionary, initialize its interval
      intervalMap.set(string[i], [i, i]);
    }
  }
  // JavaScript maps work differently than Objects
  // Cannot map through the values() in the same way (calling Map.values() yields an iterator object)
  // Can use Map.forEach() to push values to an array, and then call mergeIntervals on that array
  let intervalArray = [];
  intervalMap.forEach(value => intervalArray.push(value));
  // now call imported mergeIntervals function, with true for the optional sorted argument
  return mergeIntervals(intervalArray, true).map(interval => interval[1] - interval[0] + 1);

  }


console.log(partitionLabels('')); // []
console.log(partitionLabels('abcdefg')); // [1, 1, 1, 1, 1, 1, 1]
console.log(partitionLabels('assssssssabcbdrdr')); // [10, 3, 4]
console.log(partitionLabels('asvdssccavcvsdxryqzrqpzryprxghonogojklgh')); // [14, 14, 12]
console.log(partitionLabels('wasvdssccavcvsdxryqzrqpzryprxghonogojklghw')); // [42]
