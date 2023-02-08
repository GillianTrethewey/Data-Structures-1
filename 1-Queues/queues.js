//QUEUES WITH ARRAYS:

const queue = [];

// enqueue // FIFO - so push and shift
queue.push('seahorse');
queue.push('dolphin');
queue.push('whale shark');
// ['seahorse', 'dolphin', 'whale shark']

// dequeue // FIFO - shift
queue.shift();
//returns 'seahorse', ['dolphin', 'whale shark']

queue.shift();
//returns 'dolphin', ['whale shark']

//QUEUES WITH CLASSES:

class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }
enqueue(element) {
  this.storage[this.tail] = element;
  this.tail++
}

dequeue() {
  let removed = this.storage[this.head];
  delete this.storage[this.head];
  this.head++;
  return removed;
};
}

const queue = new Queue();

queue.enqueue('seahorse');
queue.enqueue('dolphin');
queue.enqueue('whale shark');
// Queue {
//storage: { '0': 'seahorse', '1': 'dolphin', '2': 'whale shark'},
//head: 0,
//tail: 3}

const queue1 = new Queue();
const queue2 = new Queue();

queue1.enqueue('item 1');
queue1.enqueue('item 2');
queue1.enqueue('item 3');

console.log(queue1.size()); // prints 3
console.log(queue1.dequeue()); // prints 'item 1'
console.log(queue1.size()); // prints 2


queue.dequeue();
// returns 'seahorse'
// // Queue {
//storage: { '1': 'dolphin', '2': 'whale shark'},
//head: 1,
//tail: 3}

// SAMPLE QUEUE

let Queue = function() {
    // implement your Queue constructor here
    this.queue = [];
    
    
  };
  
  Queue.prototype.enqueue = function(item) {
    // add item to the queue
    this.queue.push(item);
  };
  
  Queue.prototype.dequeue = function() {
    // remove item from the front of the queue and return its value
    return this.queue.shift();
  };
  
  Queue.prototype.size = function() {
    // return number of items in queue so far
    return this.queue.length;
  };