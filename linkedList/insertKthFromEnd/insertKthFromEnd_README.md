# Description
Write a program to insert a node an offset 'k' from the end of a singly-linked list.

Given the following list:

```
{a -> b -> c -> d -> e -> f -> g}
```

a value, 'z'
and an offset, 3

```
{a -> b -> c -> d -> z -> e -> f -> g}
```

An offset of 0 will place the new node at the end of the list.
An offset equal to the length of the list will place the new node at the beginning of the list.
An offset greater than the length of the list will return the list unmodified.

## Constraints
Should be able to handle empty lists.

## Input
A singly-linked list

## Output
A return value indicating whether or not the value was inserted.

## Additional Notes
This is almost identical to the solution for 'findKthFromEnd'.
Core logic is pretty straightforward, a little extra code needed to make sure tail is updated properly and cover cases such as adding to an empty list.