# Description
Given a singly-linked list with numeric values, and an input value x, partition the list such that all values less than x appear before all values greater than or equal to x (not necessarily separated by x - values equal to x can appear anywhere in the partition greater than or equal to x).

Given the following list and a value 8,

```
{15 -> 6 -> 8 -> 4 -> 2 -> 10 -> 12 -> 3 -> 2 -> 1 -> 9}
```

the partitioned list will look like this:

```
{6 -> 4 -> 2 -> 3 -> 2 -> 1 -> 15 -> 8 -> 10 -> 12 -> 9}
```

## Constraints
Do not use additional memory.
Maintain the relative order of values to other values within the same partition.

## Input
A singly-linked list

## Output
The partitioned list

## Additional Notes
Two solutions:
- one in which the relative order is maintained within partitions (code much more verbose)
- one in which the order is not maintained (order for right partition is still maintained, but left is reversed)