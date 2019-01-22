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
Varies by solution provided. Some solutions accept only square matrices.
Some accept all rectangular matrices.
Some accept a directional input (1 for clockwise, -1 for counterclockwise) that will default to clockwise.
Some accept a "velocity" that indicates both the direction AND number of rotations.

## Input
Varies by solution provided. See notes above.

## Output
The rotated matrix.

## Additional Notes
Not all solutions will pass all the test cases provided. For example, the solutions designed for square matrices only will not properly rotate a rectangular matrix. Uncomment the test cases that do not pertain to the solution being tested.