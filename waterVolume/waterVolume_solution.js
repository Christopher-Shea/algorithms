// O(n^2)
// function waterVolume (heights) {
//   let lMax, rMax;
//   let water = 0;
//   // water cannot be collected at the outermost points
//   for (let i = 1; i < heights.length - 1; i++) {
//     // find the highest point to the left of the current point
//     lMax = Math.max(...heights.slice(0, i));
//     // find the hightest point to the right of the current point
//     rMax = Math.max(...heights.slice(i + 1));
//     // water cannot be collected above the smaller of these two heights (it will overflow)
//     // collected water will be equal to the smaller of the two relative maximums minus the height of the current point
//     // must correct for cases in which the current point is a local maximum - cannot collect 'negative water'
//     water += Math.max((Math.min(lMax, rMax) - heights[i]), 0);
//   }
//   return water;
// }


// O(n) -> 2 passes, 2n
// Similar to n^2 solution in theory; uses two arrays to record the relevant maximums and find the total in 2 sweeps of the input array
// function waterVolume (heights) {
//   // leftMax and rightMax will be used to collect the highest point seen so far at a given point in the input array
//   let leftMax = [];
//   let rightMax = [];
//   let max = 0;
//   let water = 0;
//   // working from left to right
//   for (let i = 0; i < heights.length; i++) {
//     // calculate what the highest point seen SO FAR is
//     max = Math.max(heights[i], max);
//     // make a note of that in the leftMax array
//     leftMax[i] = max;
//   }
//   // reset 'max' for next passthrough
//   max = 0;
//   // working from right to left
//   for (let i = heights.length - 1; i >= 0; i--) {
//     // calculate what the highest point seen SO FAR is
//     max = Math.max(heights[i], max);
//     // make a note of that in the rightMax array
//     rightMax[i] = max;
//     // once the leftMax and rightMax are known for a given point of the input array, the collected water can be calculated
//     // as above, take the smaller of the two relative maximums and subtract the current height to find the water that will be collected
//     water += (Math.min(leftMax[i], rightMax[i]) - heights[i])
//   }
//   return water;
// }


// O(n*m) -> 1 pass
// 1 pass through input array (n)
// m represents the maximum height found so far at any point through the single pass
// each point of the input array (for each n) has the possibility of requiring m operations, adding or collecting water from each bucket of the potential water library
function waterVolume (heights) {
  // increment/decrement start and end points until a local maximum is found
  // (water cannot be collected beyond these points)
  let start = 0;
  let end = heights.length - 1;
  while (heights[start + 1] >= heights[start]) {start++;}
  while (heights[end-1] >= heights[end]) {end--;}
  // if calculated start is not before the calculated end, and there is not at least one point between them, no water can be collected
  if (end - start <= 1) {
    return 0;
  }
  // as before, track of the highest point found while moving through array
  let maxIndex = start;
  let maxHeight = heights[start];
  let potentialWater = {};
  let collectedWater = 0;
  let currentHeight;
  // maxIndex is a local maximum, no water can be collected at that point
  for (let i = maxIndex + 1; i <= end; i++) {
    currentHeight = heights[i];
    if (currentHeight >= maxHeight) {
      // collect all available water
      for (let level in potentialWater) {
        collectedWater += potentialWater[level];
        potentialWater[level] = 0;
      }
      // reset max
      maxIndex = i;
      maxHeight = currentHeight;
    } else {
      // point is below the highest point encountered so far
      // add a potential water unit for each spot between the current height and the maximum height
      for (let h = maxHeight; h > currentHeight; h--) {
        potentialWater[h] = potentialWater[h] + 1 || 1;
      }
      // check if height has increased - this means that some water can be collected
      if (currentHeight > heights[i-1]) {
        for (let level in potentialWater) {
          // only collect water that is at or below the level of the current height
          if (level <= currentHeight) {
            collectedWater += potentialWater[level];
            potentialWater[level] = 0;
          }
        }
      }
    }
  }
  return collectedWater;
}


console.log(waterVolume([1, 2, 4, 5])); // 0
console.log(waterVolume([2, 4, 4, 4, 2, 1])); // 0
console.log(waterVolume([2, 4, 5, 2, 1])); // 0
console.log(waterVolume([5, 4, 3, 2, 1, 0])); // 0
console.log(waterVolume([2, 0, 2])); // 2
console.log(waterVolume([3, 2, 1, 2, 3])); // 4
console.log(waterVolume([0, 3, 2, 0, 1, 0, 2, 0, 1, 0])); // 6
console.log(waterVolume([0, 1, 2, 3, 4, 3, 4, 3])); // 1
console.log(waterVolume([6, 0, 2, 0, 1, 0, 3, 0, 2, 0, 1])); // 15
console.log(waterVolume([1, 3, 2, 4, 1, 2, 0, 3, 2, 4, 2, 1, 0, 2, 0, 4])); // 28
console.log(waterVolume([2, 3, 0, 1, 2, 3, 4, 1, 2, 3, 0, 7, 6, 5, 3, 6, 5, 4, 0, 3, 5, 4, 4, 3, 4, 1, 3, 2])); // 31
console.log(waterVolume([1, 0, 4, 0, 2, 1, 0, 3, 2, 1, 0, 1, 2, 3, 8, 0, 9, 0, 1, 2, 0, 2, 1, 5, 4, 3, 6, 0, 2, 1, 2])); // 77