# Description
A matrix can be represented as an array of arrays.

```
[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
```

can be represented in 2 dimensions as:

```
1   2   3   4
5   6   7   8
9   10  11  12
13  14  15  16
```

When rotated 90 degrees clockwise, the same matrix will look like this:

```
13  9   5  1
14  10  6  2
15  11  7  3
16  12  8  4
```

Write a program that takes a matrix and rotates it.

## Constraints
None

## Input
A matrix represented as an array of arrays - the array can be square (nxn) or rectangular (nxm).
A "velocity" that indicates the direction and number of 90-degree rotations to make.
A positive velocity describes a clockwise rotation, a negative velocity counterclockwise.

## Output
The rotated matrix.

## Additional Notes