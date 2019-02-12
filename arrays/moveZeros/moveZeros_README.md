# Description
Given an array of integers, move all the zeros to the end of the array, and return the number of non-zero integers.

For example, the array

```
[3, 2, 0, -8, 0, 0, 24, 9, -2, 5, 0, 9, 1, -95, 24, 54, -2, 0, 4, 8, -5, 6, 9, 0, 0]
```

will be rearranged as such:

```
[3, 2, -8, 24, 9, -2, 5, 9, 1, -95, 24, 54, -2, 4, 8, -5, 6, 9, 0, 0, 0, 0, 0, 0, 0]
```

and the result will be:

```
18 (non-zero integers)
```

## Constraints
An empty array will return null

## Input
An array of integers

## Output
The number of non-zero integers

## Additional Notes
I have completed two solutions for this problem - one in which the order of the non-0 integers is maintained, and one in which it is not. Both of these solutions do not use additional memory and are O(n) for time complexity.