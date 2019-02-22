const LinkedList = require('../linkedList.js').LinkedList;
const Node = require('../linkedList.js').Node;


function sumLists(list1, list2, order = 'backwards') {
  let sumList = new LinkedList();
  let current1 = list1.head;
  let current2 = list2.head;
  let carry = false;

  while (current1 || current2) {
    let sumValue = 0;
    if (current1) {
      sumValue += current1.value;
      current1 = current1.next;
    }
    if (current2) {
      sumValue += current2.value;
      current2 = current2.next;
    }
    if (carry) {
      sumValue += 1;
      carry = false;
    }
    if (sumValue > 9) {
      sumValue -= 10;
      carry = true;
    }
    sumList.addTail(sumValue);
  }
  if (carry) {
    sumList.addTail(1);
  }
  return sumList;
}

// add two empty lists
let list1 = new LinkedList();
let list2 = new LinkedList();
let sumList = sumLists(list1, list2);
console.log(sumList.head); // null
console.log(sumList.tail); // null

// add lists where one list is empty
let values1 = [1, 4, 8, 3];
let values2 = [];
for (let value of values1) {
  list1.addTail(value);
}
for (let value of values2) {
  list2.addTail(value);
}
sumList = sumLists(list1, list2);
let sumValues = [];
while(sumList.head) {
  sumValues.push(sumList.removeHead());
}
console.log(sumValues); // [1, 4, 8, 3]

list1 = new LinkedList();
list2 = new LinkedList();
values1 = [];
values2 = [7, 6, 0, 7];
sumValues = [];
for (let value of values1) {
  list1.addTail(value);
}
for (let value of values2) {
  list2.addTail(value);
}
sumList = sumLists(list1, list2);
while(sumList.head) {
  sumValues.push(sumList.removeHead());
}
console.log(sumValues); // [7, 6, 0, 7]

// add lists where both lists have values
list1 = new LinkedList();
list2 = new LinkedList();
// values chose to have a carried unit after lists have both been completely visited
values1 = [1, 4, 8, 3];
values2 = [7, 6, 0, 7];
sumValues = [];
for (let value of values1) {
  list1.addTail(value);
}
for (let value of values2) {
  list2.addTail(value);
}
sumList = sumLists(list1, list2);
while(sumList.head) {
  sumValues.push(sumList.removeHead());
}
console.log(sumValues); // [8, 0, 9, 0, 1]

list1 = new LinkedList();
list2 = new LinkedList();
values1 = [4, 8, 1, 8, 4, 0, 7, 1, 5, 7, 1, 2];
values2 = [8, 8, 4, 1, 9, 0, 7, 1, 5, 8, 1, 6];
sumValues = [];
for (let value of values1) {
  list1.addTail(value);
}
for (let value of values2) {
  list2.addTail(value);
}
sumList = sumLists(list1, list2);
while(sumList.head) {
  sumValues.push(sumList.removeHead());
}
console.log(sumValues); // [2, 7, 6, 9, 3, 1, 4, 3, 0, 6, 3, 8]

// lists of different lengths
list1 = new LinkedList();
list2 = new LinkedList();
values1 = [1, 4, 8, 3, 6, 9, 2];
values2 = [7, 6, 0, 7];
sumValues = [];
for (let value of values1) {
  list1.addTail(value);
}
for (let value of values2) {
  list2.addTail(value);
}
sumList = sumLists(list1, list2);
while(sumList.head) {
  sumValues.push(sumList.removeHead());
}
console.log(sumValues); // [8, 0, 9, 0, 7, 9, 2]

list1 = new LinkedList();
list2 = new LinkedList();
values1 = [1, 4, 8, 3, 6, 9, 2];
values2 = [7, 6, 0, 7, 1, 8, 9, 2, 5, 7];
sumValues = [];
for (let value of values1) {
  list1.addTail(value);
}
for (let value of values2) {
  list2.addTail(value);
}
sumList = sumLists(list1, list2);
while(sumList.head) {
  sumValues.push(sumList.removeHead());
}
console.log(sumValues); // [8, 0, 9, 0, 8, 7, 2, 3, 5, 7]