const LinkedList = require('../linkedList.js').LinkedList;


// If order matters
// O(n) time, O(1) space
function partitionList(list, value) {
  // these four pointers will be used to keep track of the two partitions as the list is traversed
  // these are just references, no new nodes are created
  let lessHead = null;
  let lessTail = null;
  let greaterHead = null;
  let greaterTail = null;
  let current = list.head;
  let next;
  // traverse the list
  while(current) {
    // grab a reference to the next node in the list and then delete the current node's reference to that node
    next = current.next;
    current.next = null
    if (current.value < value) {
      if (!lessHead) {
        // if 'less-than' partition is currently empty, update both pointers
        lessHead = current;
        lessTail = current;
      } else {
        // otherwise, add the current node to the tail of the partition
        lessTail.next = current;
        lessTail = current;
      }
    } else {
      if (!greaterHead) {
        // if 'greater-than' partition is currently empty, update both pointers
        greaterHead = current;
        greaterTail = current;
      } else {
        // otherwise, add the current node to the tail of that partition
        greaterTail.next = current;
        greaterTail = current;
      }
    }
    // move to the next node
    current = next;
  }

  // if there are no nodes in the less-than partition
  if (!lessHead) {
      list.head = greaterHead;
      list.tail = greaterTail;
      return list;
  }
  // if there are no nodes in the greater-than partition
  if (!greaterHead) {
      list.head = lessHead;
      list.tail = lessTail
      return list
  }
  // merge partitions
  lessTail.next = greaterHead;
  list.head = lessHead;
  list.tail = greaterTail;
  return list;
};


// If order doesn't matter
// Also O(n) time, O(1) space
// function partitionList(list, value) {
//   // if order doesn't matter can do it with just two pointers
//   // these will act as the head and tail of a working list
//   let lessThan = null;
//   let greaterThan = null;
//   let current = list.head;
//   let next;
//   // traverse the list
//   while(current) {
//     // grab a reference to the next node in the list and then delete the current node's reference to that node
//     next = current.next;
//     current.next = null;
//     if (current.value < value) {
//       if(!lessThan) {
//         // if working list is empty
//         greaterThan = current;
//       } else {
//         // add the current node to the head of the working list
//         current.next = lessThan;
//       }
//       // set working head
//       lessThan = current;
//     } else {
//       if(!lessThan) {
//         // if working list is empty
//         lessThan = current;
//       } else {
//         // add the current node to the tail of the working list
//         greaterThan.next = current;
//       }
//       // set working tail
//       greaterThan = current;
//     }
//     // move to the next node
//     current = next;
//   }
//   list.head = lessThan;
//   list.tail = greaterThan;
//   return list;
// };


// check empty list;
let list = new LinkedList();
console.log(list.head); // null
console.log(list.tail); // null
list = partitionList(list, 20);
console.log(list.head); // null
console.log(list.tail); // null

// list with all values lessThan
for (let i = 0; i <= 15; i++) {
  list.addTail(i);
}
console.log(list.head.value); // 0
console.log(list.tail.value); // 15
list = partitionList(list, 20);
console.log(list.head.value); // 15
console.log(list.tail.value); // 0
let values = [];
while(list.head) {
  values.push(list.removeHead());
}
console.log(values); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// list with all values greaterThan
for (let i = 2; i <= 15; i++) {
  list.addTail(i);
}
console.log(list.head.value); // 2
console.log(list.tail.value); // 15
list = partitionList(list, 1);
console.log(list.head.value); // 2
console.log(list.tail.value); // 15
values = [];
while(list.head) {
  values.push(list.removeHead());
}
console.log(values); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// one item list
list = new LinkedList(6);
console.log(list.head.value); // 6
console.log(list.tail.value); // 6
list = partitionList(list, 1);
console.log(list.head.value); // 6
console.log(list.tail.value); // 6

// two item list
list.addTail(4);
console.log(list.head.value); // 6
console.log(list.tail.value); // 4
list = partitionList(list, 6);
console.log(list.head.value); // 4
console.log(list.tail.value); // 6

// large mixed list
list = new LinkedList();
values = [7, 2, 83, 21, 11, 0, 7, 91, 2, 7, 19, 8, 34, 12, 9, 23, 16, 83, 9, 40, 45, 62, 75, 34];
for (let value of values) {
  list.addTail(value);
}
console.log(list.head.value); // 7
console.log(list.tail.value); // 34
list = partitionList(list, 35);
console.log(list.head.value); // 34
console.log(list.tail.value); // 75
// print out all values
values = [];
while(list.head) {
  values.push(list.removeHead());
}
console.log(values); // [7, 2, 21, 11, 0, 7, 2, 7, 19, 8, 34, 12, 9, 23, 16, 9, 34, 83, 91, 83, 40, 45, 62, 75]
// if order doesn't matter: [34, 9, 16, 23, 9, 12, 34, 8, 19, 7, 2, 7, 0, 11, 21, 2, 7, 83, 91, 83, 40, 45, 62, 75]