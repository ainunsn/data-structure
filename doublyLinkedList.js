class DoublyNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(item) {
    let newNode = new DoublyNode(item);
    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = newNode;
    temp.next.previous = this.head;
  }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.insert(1);
doublyLinkedList.insert(2);
doublyLinkedList.insert(3);

console.log(doublyLinkedList.head.next);
