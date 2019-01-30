class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor (value = null) {
    // allow option to instantiate with a node
    if (value) {
      let initialNode = new Node(value);
      this.head = initialNode;
      this.tail = initialNode;
    } else {
    this.head = null;
    this.tail = null;
    }
  }

  // Add to tail, using tail pointer - O(1)
  addTail(value) {
    let newTail = new Node(value);
    // if there is no head, the list is empty - set the head to the incoming node
    if (!this.head) {
      this.head = newTail;
    } else {
    // otherwise, update the current tail's 'next' pointer to the incoming node
      this.tail.next = newTail;
    }
    // set the tail pointer
    this.tail = newTail;
  }

  // Add to tail, if tail pointer is not being used - O(n)
  // addTail(value) {
  //   let newTail = new Node(value);
  //   if (!this.head) {
  //     this.head = newTail
  //   } else {
  //     let current = this.head;
  //     while (current.next) {
  //       current = current.next;
  //     }
  //     // current.next is null - at end of list
  //     current.next = newTail;
  //   }
  // }

  // Add to head - O(1)
  addHead(value) {
    let newHead = new Node(value);
    // if there is no head, the list is empty - set the head to the incoming node
    if (!this.tail) {
      this.tail = newHead;
    } else {
      newHead.next = this.head;
    }
    this.head = newHead;
  }

  // Remove head and return the value of the removed node - O(1)
  removeHead() {
    // first make sure the list is not empty
    if (this.head) {
      let headValue = this.head.value;
      // if the head is the only item in the list, set the tail to null
      if (!this.head.next) {
        this.tail = null;
      }
      // this also covers the case where there is only one item in the list - head will be set to null as well
      this.head = this.head.next;
      return headValue;
    } else {
      console.log('list is empty - no head to remove');
    }
  }

  // Remove tail and return the value of the removed node - O(n)
  // Cannot perform operation in constant time without a doubly-linked list
  removeTail() {
    // first make sure the list is not empty
    if (this.head) {
      let tailValue;
      // if there is only one item in the list, set the head to null
      // could also just call removeHead()
      if (!this.head.next) {
        tailValue = this.head.value;
        this.head = null;
        this.tail = null;
        return tailValue;
      }
      // find second-to-last node (.next.next will be null)
      let current = this.head;
      while(current.next.next) {
        current = current.next;
      }
      tailValue = current.next.value;
      current.next = null;
      this.tail = current;
      return tailValue;
    } else {
      console.log('list is empty - no tail to remove');
    }
  }

  // Search list to see if a value is present - O(n)
  contains(target) {
    if (this.head) {
      let current = this.head;
      do {
        if (current.value === target) {
          return true;
        }
        current = current.next
      } while (current);
      return false;
    } else {
      console.log('list is empty');
      return false;
    }
  }
}

const linked = new LinkedList();
console.log(linked.head, linked.tail); // null, null
linked.addTail('tail');
console.log(linked.head.value, linked.tail.value); // 'tail', 'tail'
console.log(linked.head.next, linked.tail.next); // null, null
console.log(linked.removeTail()); // 'tail'
console.log(linked.head, linked.tail); // null, null
linked.addHead('head');
console.log(linked.head.value, linked.tail.value); // 'head', 'head'
console.log(linked.head.next, linked.tail.next); // null, null
console.log(linked.removeHead()); // 'head'
console.log(linked.head, linked.tail); // null, null

for (let i = 0; i <= 10; i++) {
  linked.addHead(i);
}
let nodeValues = [];
while(linked.head){
  nodeValues.push(linked.removeTail());
}
console.log(nodeValues); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i <= 10; i++) {
  linked.addTail(i);
}
nodeValues = [];
while(linked.tail){
  nodeValues.push(linked.removeHead());
}
console.log(nodeValues); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]