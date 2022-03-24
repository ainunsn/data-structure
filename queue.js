class Queue {
  constructor() {
    this.length = 0;
    this.data = [];
    this.front = 0;
  }

  //   helper function
  isEmpty() {
    return this.length == 0;
  }

  returningData() {
    let newData = new Queue(this.length);
    for (let i = 0; i <= this.length; i++) {
      if (this.data[i]) {
        newData.queue(this.data[i]);
      }
    }

    return newData.data;
  }

  queue(item) {
    this.data[this.length] = item;
    this.length++;
  }
  dequeue() {
    if (this.isEmpty()) throw new Error("queue is empty");
    let temp = this.data[0];

    this.data[this.front] = null;
    // this.length--;
    this.front++;
    return temp;
  }
}

let queue = new Queue();
queue.queue(1);
queue.queue(2);
queue.queue(3);
queue.queue(4);
queue.queue(5);
queue.dequeue();
queue.queue(3);
queue.dequeue();

console.log(queue);
console.log(queue.returningData());
