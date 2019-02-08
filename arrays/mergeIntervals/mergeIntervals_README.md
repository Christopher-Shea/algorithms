# Description
Given an array of intervals (represented as arrays themselves), return an array in which all overlapping intervals are merged. The following intervals will be merged as such:

```
[[3, 8], [4, 10]] -> [[3, 10]] // overlap
```

```
[[2, 6], [6, 8]] -> [[2, 8]] // overlap on boundary
```

```
[[1, 10], [4, 9]] -> [[1, 10]] // one interval contained wholly within another
```

```
[[5, 7], [11, 14]] -> [[5, 7], [11, 14]] // not merged
```

## Constraints
Should be able to handle an empty array.
Cannot assume that the array is sorted to begin with.

## Input
An array of intervals, represent as arrays

## Output
An array of merged intervals

## Additional Notes
Have added a parameter to indicate if the input array is sorted (by interval start)