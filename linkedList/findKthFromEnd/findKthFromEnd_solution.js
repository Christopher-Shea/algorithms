const LinkedList = require('../linkedList.js').LinkedList;

// Naive solution - O(n) two passes with one pointer
// function findKthFromEnd(list, k) {
//   // check edge cases
//   let current = list.head;
//   if (!current || !k) {
//     return null;
//   }
//   // find length of list;
//   let length = 0;
//   while(current) {
//     current = current.next;
//     length++;
//   }
//   // edge case
//   if (k > length) {
//     return null;
//   }
//   // find target value
//   current = list.head;
//   let target = length - k;
//   while (target) {
//     current = current.next;
//     target--;
//   }
//   return current.value;
// }


// Optimal solution - O(n) one pass using two pointers
function findKthFromEnd(list, k) {
  let back = list.head;
  let front = list.head;
  // move front k nodes in front of back
  while (k > 0) {
    // k greater than length of list
    if (front === null) {
      return null;
    }
    front = front.next;
    k--;
  }
  // move pointers together until front is null (at the end of the list)
  while (front) {
    front = front.next;
    back = back.next;
  }
  // if k is 0, back will be null and will not have a value
  if (back) {
    return back.value;
  }
  return null;
}


// Regular sized list
let list = new LinkedList();
for (let i = 0; i <= 15; i++) {
  list.addTail(i);
}
console.log(findKthFromEnd(list, 0)); // null
console.log(findKthFromEnd(list, 1)); // 15
console.log(findKthFromEnd(list, 8)); // 8
console.log(findKthFromEnd(list, 15)); // 1
console.log(findKthFromEnd(list, 16)); // 0
console.log(findKthFromEnd(list, 17)); // null
console.log(findKthFromEnd(list, 18)); // null

// Two-item list
list = new LinkedList(0);
list.addTail(1);
console.log(findKthFromEnd(list, 0)); // null
console.log(findKthFromEnd(list, 1)); // 1
console.log(findKthFromEnd(list, 2)); // 0
console.log(findKthFromEnd(list, 3)); // null

// One-item list
list = new LinkedList(0);
console.log(findKthFromEnd(list, 0)); // null
console.log(findKthFromEnd(list, 1)); // 0
console.log(findKthFromEnd(list, 2)); // null

// Empty list
list = new LinkedList();
console.log(findKthFromEnd(list, 0)); // null
console.log(findKthFromEnd(list, 1)); // null
console.log(findKthFromEnd(list, 2)); // null