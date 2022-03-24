class Stack {
  constructor(size) {
    this.length = 0;
    this.size = size;
    this.data = [];
  }

  //   helper function
  isEmpty() {
    return this.length == 0;
  }

  isFull() {
    return this.length == this.size;
  }

  returningData() {
    let newData = new Stack(this.length);
    for (let i = 0; i < this.size; i++) {
      if (this.data[i]) {
        newData.append(this.data[i]);
      }
    }

    return newData.data;
  }

  append(item) {
    if (this.isFull()) {
      throw new Error("stack is full");
    }
    this.data[this.length] = item;
    this.length++;
  }

  delete() {
    if (this.isEmpty()) {
      throw new Error("stack is empty");
    }
    let temp = this.data[this.length - 1];
    this.data[this.length - 1] = null;
    this.length--;

    return temp;
  }
}

let stack = new Stack(5);
stack.append(10);
stack.append(9);
stack.append(7);
stack.append(6);
stack.append(9);

// delete stack
stack.delete();
stack.delete();
stack.delete();
stack.append(8);

console.log(stack.returningData());

/**reverse string using stack */

function reverseString(string) {
  const stack = new Stack(string.length);
  for (let i = 0; i < string.length; i++) {
    stack.append(string[i]);
  }

  let reversedString = "";
  for (let i = 0; i < string.length; i++) {
    reversedString += stack.delete();
  }

  return reversedString;
}

reverseString("hello");
