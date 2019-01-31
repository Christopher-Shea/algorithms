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
    // and set the tail pointer
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
  //     // current.next is null - at the tail
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

  // Remove head and return its value - O(1)
  removeHead() {
    // make sure the list is not empty
    if (this.head) {
      let headValue = this.head.value;
      // if the head is the only item in the list, set the tail to null
      if (!this.head.next) {
        this.tail = null;
      }
      // if there is only one item in the list, the following will set the head to null
      this.head = this.head.next;
      return headValue;
    } else {
      console.log('list is empty - no head to remove');
    }
  }

  // Remove tail and return its value - O(n)
  // Cannot perform operation in constant time without a doubly-linked list
  removeTail() {
    // make sure the list is not empty
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
      // traverse list to find second-to-last node (current.next will be the tail and current.next.next will be null)
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
      // traverse the list
      let current = this.head;
      do {
        if (current.value === target) {
          return true;
        }
        current = current.next
      } while (current);
      // current node is null, target value has not been found
      return false;
    } else {
      console.log('list is empty');
      return false;
    }
  }

  // Removes a target value from the list and returns the new head
  // Assumes that values in the list are unique;
  remove(target) {
    if (this.head) {
      // handle case where head is the target
      // can't call removeHead() because we want to return the new head, not the removed value
      if (this.head.value === target) {
        if (!this.head.next) {
          this.tail = null;
        }
        this.head = this.head.next;
        return this.head;
      }
      // traverse the list until parent of the target is found
      let current = this.head
      while (current.next !== null) {
        if (current.next.value === target) {
          // adjust next pointer for parent of target value
          current.next = current.next.next;
          // check if tail needs to be reset
          if (current.next === null) {
            this.tail = current;
          }
          return this.head;
        }
        current = current.next;
      }
      // at end of list, target not found
      console.log('list does not contain the target value');
      return this.head;
    } else {
      console.log('list is empty');
      return this.head;
    }
  };

  // Inserts a value into the list after a given target value
  // Assumes that values in the list are unique;
  insert(target, insert) {
    let newNode = new Node(insert);
    // traverse until target node is found
    let current = this.head;
    while (current.value !== target) {
      if (current.next === null) {
        // current is the tail and is not the target node
        console.log('list does not contain the target value')
        return false;
      }
      current = current.next;
    }
    // insert
    newNode.next = current.next;
    current.next = newNode;
    // check if tail needs to be reset
    if (newNode.next === null) {
      this.tail = newNode;
    }
  };

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
linked.remove(0);
linked.insert(7, 11);
linked.remove(5);
linked.insert(1, 12)
let nodeValues = [];
while(linked.head){
  nodeValues.push(linked.removeTail());
}
console.log(nodeValues); // [12, 1, 2, 3, 4, 6, 11, 7, 8, 9, 10]

for (let i = 0; i <= 10; i++) {
  linked.addTail(i);
}
linked.remove(0);
linked.insert(7, 11);
linked.remove(5);
linked.insert(1, 12)
nodeValues = [];
while(linked.tail){
  nodeValues.push(linked.removeHead());
}
console.log(nodeValues); // [1, 12, 2, 3, 4, 6, 7, 11, 8, 9, 10]