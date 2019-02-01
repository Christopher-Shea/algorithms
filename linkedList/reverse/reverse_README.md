# Description
Write a program to reverse a singly-linked list.

```
{1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7}
```

reversed:

```
{7 -> 6 -> 5 -> 4 -> 3 -> 2 -> 1}
```

## Constraints
The list is singly linked.
If possible, do not use any additional memory.

## Input
A singly-linked list

## Output
The input list in reverse

## Additional Notes
Two solutions:
- use a stack (or array) to temporarily store the values of the node - O(n) time, O(n) space
- reverses the list in place - O(n) time, O(1) space