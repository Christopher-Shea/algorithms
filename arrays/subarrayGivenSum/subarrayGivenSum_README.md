# Description
Given an array of non-negative integers and a sum, find the first subarray that sums to the given value.

For example, given the following array and a sum, 21

```
[4, 8, 3, 4, 0, 9, 12, 2, 5, 5, 8, 1, 7, 2, 6]
```

return

```
[0, 9, 12]
```

## Constraints


## Input
An array of integers and an integer value

## Output
The subarray that sums to the given value, or null if the subarray does not exist.

## Additional Notes
I have taken the solution a step further to return ALL subarrays that sum to the given value. The main consideration for this variation is accounting for zeros that may exist on either side of a subarray and not contriubte to the sum, but will exist in distinct subarrays nonetheless.