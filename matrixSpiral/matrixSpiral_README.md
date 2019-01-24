# Description
A matrix can be represented as an array of arrays.

```
[[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
```

can be represented in 2 dimensions as:

```
1   2   3   4
12  13  14  5
11  16  15  6
10  9   8   7
```

Starting at position [0,0] and collecting values in a clockwise spiral will yield the following:

```
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
```

Write a program that takes a matrix and returns an array of values found by spiraling through the matrix in a clockwise manner.

## Constraints
Spiral must start at [0,0] and move clockwise

## Input
A matrix - square (nxn) or rectangular (nxm)

## Output
An array containing the values found by spiraling through the matrix

## Additional Notes
Two solutions - longer solution operates in O(n) time, where n is the total number of values in the matrix. More concise solution makes use of matrix rotation but is less efficient.