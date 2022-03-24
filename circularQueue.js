class CircularQueue {
  constructor(size) {
    this.front = 0;
    this.rear = 0;
    this.size = size;
    this.data = [];
    this.length = 0;
  }

  //   helper
  isEmpty() {
    return this.length == 0;
  }

  isFull() {
    return this.length == this.size;
  }

  queue(item) {
    if (this.isFull()) throw new Error("queue is full");
    this.data[this.rear % this.size] = item;
    this.rear++;
    this.length++;
  }
  dequeue() {
    if (this.isEmpty()) throw new Error("queue is empty");
    this.data[this.front] = null;
    this.front++;
    this.length--;

    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    }
  }
}

let circularQueue = new CircularQueue(6);
circularQueue.queue(1);
circularQueue.queue(2);
circularQueue.queue(3);
circularQueue.queue(4);
circularQueue.queue(5);
circularQueue.queue(6);

circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.dequeue();
circularQueue.queue(1);
circularQueue.dequeue();

console.log(circularQueue);
