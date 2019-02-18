const LinkedList = require('../linkedList.js').LinkedList;

// O(n) time, O(n) space
function removeDuplicates(list) {
  // initialize reference dictionary
  let values = {};
  let current = list.head;
  let prev;
  while(current) {
    // if value has already been seen
    if (current.value in values) {
      // adjust prev's next pointer to skip current node
      prev.next = current.next;
      // if the tail was just deleted, reset the tail
      if (current.next === null) {
        list.tail = prev;
      }
    } else {
      // otherwise add current value to dictionary
      values[current.value] = true;
      // move prev forward
      prev = current;
    }
    // in both cases, move current forward
    current = current.next;
  }
  return list;
}

// O(n^2) time, O(1) space
// function removeDuplicates(list) {
//   let current = list.head;
//   let search;
//   while(current) {
//     // for every distinct node, use another pointer to search rest of list
//     search = current;
//     while(search.next) {
//       // if the node in front of search has a duplicate value
//       if (search.next.value === current.value) {
//         // adjust pointer to skip it
//         search.next = search.next.next;
//         // if the tail was just deleted, reset the tail
//         if (search.next === null) {
//           list.tail = search;
//         }
//       } else {
//         // otherwise move search forwards
//         search = search.next;
//       }
//     }
//     current = current.next;
//   }
//   return list;
// }


// empty list
let list = new LinkedList()
console.log(list.head); // null
console.log(list.tail); // null
list = removeDuplicates(list);
console.log(list.head); // null
console.log(list.tail); // null

// all duplicates
let values = ['a', 'a', 'a', 'a'];
for (let value of values) {
  list.addTail(value);
}
console.log(list.length()); // 4
list = removeDuplicates(list);
console.log(list.length()); // 1
console.log(list.head.value); // a
console.log(list.tail.value); // a
list.removeHead();
console.log(list.head); // null
console.log(list.tail); // null

// no duplicates
values = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
for (let value of values) {
  list.addTail(value);
}
console.log(list.length()); // 11
console.log(list.head.value); // a
console.log(list.tail.value); // k
list = removeDuplicates(list);
console.log(list.length()); // 11
console.log(list.head.value); // a
console.log(list.tail.value); // k
let nodeValues = [];
while(list.head){
  nodeValues.push(list.removeHead());
}
console.log(nodeValues); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
console.log(list.head); // null
console.log(list.tail); // null

// some duplicates
values = ['a', 'b', 'c', 'd', 'b', 'e', 'f', 'a', 'g', 'h', 'c', 'i', 'b', 'j', 'k', 'f'];
for (let value of values) {
  list.addTail(value);
}
console.log(list.length()); // 16
console.log(list.head.value); // a
console.log(list.tail.value); // f
list = removeDuplicates(list);
console.log(list.length()); // 11
console.log(list.head.value); // a
console.log(list.tail.value); // k
nodeValues = [];
while(list.head){
  nodeValues.push(list.removeHead());
}
console.log(nodeValues); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
console.log(list.head); // null
console.log(list.tail); // null