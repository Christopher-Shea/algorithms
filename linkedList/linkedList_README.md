# Description
Implement a singly linked list for use in solutions to linked list problems.

Linked List will be implemented as a JavaScript object with a head and tail pointer.
The head points to the first node in the list, and the tail to the last.
Each node will have two properties - a value, and a reference to the next node in the list.

```
{ head: {value: 'a',
         next: {value: 'b',
                next: {value: 'c',
                       next: {value: 'd',
                              next: null}}}},
  tail: {value: 'd', next: null}}
```

While this might be what your console spits out if asked to print a list, this is actually a terrible way to visualize the list. The nodes aren't really *nested* per se. Instead, each node's 'next' property is merely a *reference* to the next node.

They are more simply visualized as such:

```
{a -> b -> c -> d}
```

## Input
None

## Output
A linked list class with standard methods - add/remove head, add/remove tail, contains

## Additional Notes
* This implementation has a tail pointer. This allows for constant-time insertion at the end of the list.
* This List can be used as a Stack. 'addHead' and 'removeHead' function in constant time O(1), and take the place of 'push' and 'pop' respectively.
* This List can be used as a Queue. 'removeHead' and 'addTail' function in constant time O(1), and take the place of 'dequeue' and 'enqueue' respectively.
