const LinkedList = require('../linkedList.js').LinkedList;

// O(n+m) time (lengths of lists), O(1) space
function findIntersection(list1, list2) {
  // count length of lists
  let length1 = 0
  let length2 = 0;
  let counter = list1.head;
  while(counter){
      length1++;
      counter = counter.next;
  }
  counter = list2.head;
  while(counter){
      length2++;
      counter = counter.next;
  }
  // determine which list is longer and normalize
  let greater = length1 > length2 ? list1.head : list2.head;
  let lesser = length1 > length2 ? list2.head : list1.head;
  let difference = Math.abs(length1 - length2);
  while (difference) {
      greater = greater.next;
      difference--;
  }
  // move through lists together until intersection is found
  while (greater && lesser) {
      if (greater === lesser) {
          return greater;
      } else {
          greater = greater.next;
          lesser = lesser.next;
      }
  }
  // or end of lists is reached without finding intersection
  return null;
}

// finds intersection
let list1 = new LinkedList();
let list2 = new LinkedList();
for (let i = 1; i < 15; i++) {
  list1.addTail(i);
}
for (let i = 46; i < 65; i++) {
  list2.addTail(i);
}
console.log(list1.head.value); // 1
console.log(list1.tail.value); // 14
console.log(list2.head.value); // 46
console.log(list2.tail.value); // 64
let sharedTail = new LinkedList();
for (let i = 100; i < 150; i++) {
  sharedTail.addTail(i);
}
console.log(sharedTail.head.value); // 100
console.log(sharedTail.tail.value); // 149
let intersectionPoint = sharedTail.head;
list1.tail.next = intersectionPoint;
list2.tail.next = intersectionPoint;
console.log(list1.tail.next === list2.tail.next); // true
list1.tail = sharedTail.tail;
list2.tail = sharedTail.tail;
console.log(list1.tail === list2.tail); // true
console.log(list1.tail.value); // 149
console.log(list2.tail.value); // 149
console.log(findIntersection(list1, list2) === intersectionPoint); // true

// no intersection
list1 = new LinkedList();
list2 = new LinkedList();
for (let i = 1; i < 15; i++) {
  list1.addTail(i);
}
for (let i = 46; i < 65; i++) {
  list2.addTail(i);
}
console.log(findIntersection(list1, list2)); // null
