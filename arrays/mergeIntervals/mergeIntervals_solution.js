// Time complexity - assume O(nlogn) if sorting is needed, O(n) without sorting (one pass)
// Space complexity is O(n), as merged intervals are added to a new array
// Could use splice() to mutate input array directly and save memory, but this would greatly increase the time complexity (due to array re-indexing)
function mergeIntervals(intervals, sorted = false) {
    // if intervals are not sorted, sort them by interval start
    if (!sorted) {
        intervals = intervals.sort((a, b) => a[0] - b[0]);
    }
    // initialize output array
    let merged = [];
    // iterate through input
    for (let i = 0; i < intervals.length; i++) {
        // since intervals are now sorted, just need to compare to the last member of merged array
        let lastMerged = merged[merged.length - 1];
        // if the current interval's start is greater than the last merged's end, none of the following intervals
        // will overlap, so add it to the merged and it will be the new comparison point
        if (!merged.length || intervals[i][0] > lastMerged[1]) {
            merged.push(intervals[i]);
        } else {
            // otherwise, if the start of the current interval is contained within the last merged interval
            // compare the ends to see if the merged's end needs to be extended
            if (intervals[i][1] > lastMerged[1]) {
                lastMerged[1] = intervals[i][1];
            }
            // if none of these cases are met, the current interval is wholly contained within the last merged interval
            // and can be disregarded
        }
    }
    return merged;
};


console.log(mergeIntervals([])); // []
let intervals = [[1, 4], [2, 6], [7, 10], [8, 12], [12, 13]];
console.log(mergeIntervals(intervals, true)); // [[1, 6], [7, 13]]
intervals.push([3, 4], [5, 6], [8, 9], [10, 13]);
console.log(mergeIntervals(intervals)); // [[1, 6], [7, 13]]
intervals.push([15, 20], [20, 25]);
console.log(mergeIntervals(intervals)); // [[1, 6], [7, 13], [15, 25]]
intervals.push([14, 14], [16, 24]);
console.log(mergeIntervals(intervals)); // [[1, 6], [7, 13], [14, 14], [15, 25]]
intervals.push([0, 50])
console.log(mergeIntervals(intervals)); // [[0, 50]]

module.exports = mergeIntervals;