/*
 ***************************************************************
 * Very basic implementation to understand linking
 ***************************************************************
 */

/* const n1 = {
  data: 100
};

const n2 = {
  data: 200
};

n1.next = n2;
console.log(n1)
// { data: 100, next: { data: 200 } }
*/

/*
 ***************************************************************
 * Use a class Node to create the nodes instead of object literal
 ***************************************************************
 */
//    Head
// ____________
// |      |   |
// | 100  |   |  => points to next node
// |      |   |
// ------------
//   Data   Next

/*class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

const n1 = new Node(100); // defaults to next = null
console.log(n1);
*/
// Node { data: 100, next: null }

/*
 ***************************************************************
 * Use a class Node plus class LinkedList to create Linked List
 ***************************************************************
 */

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert first node (new Head)
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert last node (new Tail)
  insertLast(data) {
    let node = new Node(data);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  // Insert new node at given index
  insertAt(data, index) {
    // If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    // If first index
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; // Node before index
      count++;
      current = current.next; // Node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }
  // Remove node at given index
  removeAt(index) {
    // If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    let previous;
    let current = this.head;
    let count = 0;

    // Remove first
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current; // Node before index
        count++;
        current = current.next; // Node after index
      }

      previous.next = current.next;

      this.size--;
    }
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Get data at a given index
  getAt(index) {
    // If index is out of range
    if (index > 0 && index > this.size) {
      return;
    }
    let count = 0;
    let current = this.head;

    while (current) {
      if (count == index) {
        console.log(current.data);
      }
      current = current.next;
      count++;
    }
    return null;
  }

  // Print Out Data
  printListData() {
    let current = this.head; // start at head
    while (current) {
      console.log(current.data);
      current = current.next; // move to next node
    }
    console.log("\n");
  }
}

const ll = new LinkedList();
//console.log("empty ll - head", ll.head);
// empty ll - head null
ll.insertFirst(100);
//console.log("one node - head", ll.head);
// one node - head Node { data: 100, next: null }
ll.insertFirst(200);
//console.log("two nodes - head", ll.head);
// two nodes - head Node { data: 200, next: Node { data: 100, next: null } }
ll.insertFirst(300);
//console.log("three nodes - head", ll.head);
// three nodes - head Node {
//  data: 300,
//  next: Node { data: 200, next: Node { data: 100, next: null } }
//}

ll.insertAt(500, 2);

//ll.printListData();
//ll.getAt(2);
ll.printListData();
ll.removeAt(2);
ll.printListData();
ll.clearList();
ll.printListData();
