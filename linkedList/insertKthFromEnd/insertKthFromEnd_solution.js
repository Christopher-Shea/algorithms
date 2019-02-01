const LinkedList = require('../linkedList.js').LinkedList;
const Node = require('../linkedList.js').Node;

var insertKthFromEnd = function(list, value, k) {
  let newNode = new Node(value)
  let back = list.head;
  let front = list.head;
  // move front pointer to be [k] ahead of back
  while (k > 0) {
    // if end is reached before k is down to zero, k is greater than length of list
    // return list
    if (front === null) {
      return false;
    }
    front = front.next;
    k--;
  }
  // if k is exactly the length of list, front will be null
  // add node to front of list
  if (front === null) {
    newNode.next = list.head;
    list.head = newNode;
    // for case in which node is being added to an empty list
    if (list.tail === null) {
      list.tail = newNode;
    }
    return true;
  }
  // back and front are separated by provided k
  // move together until front is on the last node of the list (next will be null)
  while(front.next) {
    back = back.next;
    front = front.next;
  }
  // the back node will be the parent of the inserted node
  newNode.next = back.next;
  back.next = newNode;
  // inserted node is at the end of the list, update the tail
  if (newNode.next === null) {
    list.tail = newNode;
  }
  return true
};

// regular sized list
let list = new LinkedList();
for (let i = 0; i <= 15; i++) {
  list.addTail(i);
}
console.log(list.head.value); // 0
console.log(list.tail.value); // 15
console.log(insertKthFromEnd(list, 'beginning', 16)); // true
console.log(list.head.value); // beginning
console.log(list.tail.value); // 15
console.log(insertKthFromEnd(list, 'end', 0)); // true
console.log(list.head.value); // beginning
console.log(list.tail.value); // end
console.log(insertKthFromEnd(list, 'too far', 25)); // false
console.log(list.head.value); // beginning
console.log(list.tail.value); // end
console.log(insertKthFromEnd(list, 'middle', 4)); // true
console.log(insertKthFromEnd(list, 'middle', 13)); // true
let values = [];
let current = list.head;
while(current) {
  values.push(current.value);
  current = current.next;
}
console.log(values) // ['beginning', 0, 1, 2, 3, 4, 'middle', 5, 6, 7, 8, 9, 10, 11, 12, 'middle', 13, 14, 15, 'end']

// two-item list
list = new LinkedList(0);
list.addTail(1);
console.log(list.head.value); // 0
console.log(list.tail.value); // 1
console.log(insertKthFromEnd(list, 'beginning', 2)); // true
console.log(list.head.value); // beginning
console.log(list.tail.value); // 1
console.log(list.removeTail()); // 1
console.log(insertKthFromEnd(list, 'end', 0)); // true
console.log(list.head.value); // beginning
console.log(list.tail.value); // end
console.log(insertKthFromEnd(list, 'too far', 25)); // false
console.log(list.head.value); // beginning
console.log(list.tail.value); // end
console.log(insertKthFromEnd(list, 'middle', 1)); // true
console.log(insertKthFromEnd(list, 'middle', 3)); // true
values = [];
current = list.head;
while(current) {
  values.push(current.value);
  current = current.next;
}
console.log(values) // ['beginning', 'middle', 0, 'middle', 'end']

// one-item list
list = new LinkedList(0);
console.log(list.head.value); // 0
console.log(list.tail.value); // 0
console.log(insertKthFromEnd(list, 'beginning', 1)); // true
console.log(list.head.value); // beginning
console.log(list.tail.value); // 0
console.log(list.removeTail()); // 0
console.log(insertKthFromEnd(list, 'end', 0)); // true
console.log(list.head.value); // beginning
console.log(list.tail.value); // end
console.log(insertKthFromEnd(list, 'too far', 25)); // false
console.log(list.head.value); // beginning
console.log(list.tail.value); // end
console.log(insertKthFromEnd(list, 'middle', 1)); // true
console.log(insertKthFromEnd(list, 'middle', 2)); // true
values = [];
current = list.head;
while(current) {
  values.push(current.value);
  current = current.next;
}
console.log(values) // ['beginning', 'middle', 'middle', 'end']

// empty list
list = new LinkedList();
console.log(list.head); // null
console.log(list.tail); // null
console.log(insertKthFromEnd(list, 'beginning', 0)); // true
console.log(list.head.value); // beginning
console.log(list.tail.value); // beginning
list = new LinkedList();
console.log(list.head); // null
console.log(list.tail); // null
console.log(insertKthFromEnd(list, 'beginning', 1)); // false
list = new LinkedList();
console.log(list.head); // null
console.log(list.tail); // null
console.log(insertKthFromEnd(list, 'beginning', 2)); // false
