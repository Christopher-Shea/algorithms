const LinkedList = require('../linkedList.js').LinkedList;
const Node = require('../linkedList.js').Node;


// Using a stack (implemented via a linked list with addHead() and removeHead() replacing push() and pop())
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

// Reverse in place - no additional memory needed
function reverseList(list) {
  let current = list.head;
  let prev = null;
  let next;
  // if list is empty, will return [empty] list as is
  while (current) {
    next = current.next;
    current.next = prev;
    // set tail to the first node
    if (prev === null) {
      list.tail = current;
    }
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
console.log(list.head.value);
console.log(list.tail.value);
// reverse and make sure head and tail are set correctly
let reversed = reverseList(list);
console.log(reversed.head.value);
console.log(reversed.tail.value);
// print out all values
let values = [];
let current = reversed.head;
while(current) {
  values.push(current.value);
  current = current.next;
}
console.log(values);