class SinglyNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  insert(item) {
    if (!this.head) {
      this.head = new SinglyNode(item);
      return;
    }
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }

    temp.next = new SinglyNode(item);
    temp.next.next = this.head;
  }
}

let circularLinkedList = new CircularLinkedList();
circularLinkedList.insert(1);
circularLinkedList.insert(2);
circularLinkedList.insert(3);
