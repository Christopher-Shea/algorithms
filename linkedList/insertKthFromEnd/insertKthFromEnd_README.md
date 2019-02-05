# Description
Write a program to insert a node an offset 'k' from the end of a singly-linked list.

Given the following list:

```
{a -> b -> c -> d -> e -> f -> g}
```

a value, 'z'
and an offset, 3,
the modified list will be:

```
{a -> b -> c -> d -> z -> e -> f -> g}
```

An offset of 0 will place the new node at the end of the list and return true.
An offset equal to the length of the list will place the new node at the beginning of the list and return true.
An offset greater than the length of the list will return false.

## Constraints
Should be able to handle empty lists.

## Input
A singly-linked list

## Output
A return value indicating whether or not the value was inserted.

## Additional Notes
This is similar to the solution for 'findKthFromEnd'.
Core logic is pretty straightforward, a little extra code needed to make sure tail is updated properly and cover cases such as adding to an empty list.