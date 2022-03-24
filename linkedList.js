class SinglyNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtTheEnd(item) {
    let newNode = new SinglyNode(item);
    let temp = this.head;
    if (!temp) {
      this.head = newNode;
      return;
    }
    while (temp.next) {
      temp = temp.next;
    }

    temp.next = newNode;
  }
  insertAtBeginning(item) {
    let temp = this.head;
    let newNode = new SinglyNode(item);
    newNode.next = temp;
    this.head = newNode;
  }

  deleteAtTheEnd() {
    let temp = this.head;
    while (temp.next.next) {
      temp = temp.next;
    }
    temp.next = null;
  }

  deleteAtBeginning() {
    let temp = this.head.next;
    this.head = temp;
  }

  search(item) {
    let temp = this.head;
    let position = -1;
    let data = null;

    while (temp) {
      position++;

      if (temp.data == item) {
        data = temp.data;
        break;
      }
      temp = temp.next;
    }

    if (data) return position;
    return -1;
  }
}

let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.insertAtTheEnd(1);
singlyLinkedList.insertAtTheEnd(2);
singlyLinkedList.insertAtTheEnd(3);
singlyLinkedList.insertAtBeginning(4);

singlyLinkedList.deleteAtTheEnd();
singlyLinkedList.deleteAtBeginning();

// search position
console.log(singlyLinkedList.search(1));

console.log(singlyLinkedList.head);
