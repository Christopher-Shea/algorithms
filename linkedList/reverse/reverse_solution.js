const LinkedList = require('../linkedList.js').LinkedList;


// Using a stack (implemented via a linked list with addHead() and removeHead() replacing push() and pop())
// O(n) time and space complexity
// function reverseList(list) {
//   const stack = new LinkedList();
//   while(list.head) {
//     stack.addHead(list.removeHead());
//   }
//   while(stack.head) {
//     list.addTail(stack.removeHead());
//   }
//   return list;
// }

// Using a regular ol' array
// function reverseList(list) {
//   let values = [];
//   while(list.head) {
//     values.push(list.removeHead());
//   }
//   while(values.length) {
//     list.addTail(values.pop());
//   }
//   return list;
// }

// Reverse in place - O(n) time and O(1) space
function reverseList(list) {
  let current = list.head;
  let prev = null;
  let next;
  while (current) {
    // grab reference to next node in list
    next = current.next;
    // now that next node is safely referenced, can reset the current node's 'next' to the previous node
    current.next = prev;
    // set tail to the first node
    if (prev === null) {
      list.tail = current;
    }
    // update previous and current node references
    prev = current;
    current = next;
  }
  list.head = prev;
  return list;
}


// build list and check head and tail
let list = new LinkedList();
for (let i = 0; i <= 15; i++) {
  list.addTail(i);
}
console.log(list.head.value); // 0
console.log(list.tail.value); // 15
// reverse and make sure head and tail are set correctly
let reversed = reverseList(list);
console.log(reversed.head.value); // 15
console.log(reversed.tail.value); // 0
// print out all values
let values = [];
let current = reversed.head;
while(current) {
  values.push(current.value);
  current = current.next;
}
console.log(values); // [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

// empty list
list = new LinkedList();
console.log(list.head); // null
console.log(list.tail); // null
reversed = reverseList(list);
console.log(list.head); // null
console.log(list.tail); // null

// list with one node
list = new LinkedList('single item');
console.log(list.head.value); // single item
console.log(list.tail.value); // single item
console.log(list.head.next); // null
console.log(list.tail.next); // null
reversed = reverseList(list);
console.log(list.head.value); // single item
console.log(list.tail.value); // single item
console.log(list.head.next); // null
console.log(list.tail.next); // null

// list with two nodes
list = new LinkedList('first item');
list.addTail('second item');
console.log(list.head.value); // first item
console.log(list.tail.value); // second item
console.log(list.head.next); // {value: 'second item', next: null}
console.log(list.tail.next); // null
reversed = reverseList(list);
console.log(list.head.value); // second item
console.log(list.tail.value); // first item
console.log(list.head.next); // {value: 'first item', next: null}
console.log(list.tail.next); // null