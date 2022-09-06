function NodeFactory(data = null, nextNode = null) {
  return { data, nextNode };
}
const LinkedList = (head = null) => {
  function append(value) {
    let newNode = NodeFactory(value);
    if (head) {
      while (head.nextNode) {
        head = head.nextNode;
      }
      head.nextNode = newNode;
      return newNode;
    }
  }
  function prepend(value) {
    let newNode = NodeFactory(value);
    if (this.head) {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
    return newNode;
  }
  function size() {
    let size = 0;
    if (this.head == null) return size;
    else {
      let temp = this.head;
      size = 1;
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
        ++size;
      }
      return size;
    }
  }
  function getHead() {
    return this.head;
  }
  function getTail() {
    let temp = this.head;
    if (temp == null) {
      return temp;
    } else {
      while (temp.nextNode !== null) {
        temp = temp.nextNode;
      }
      return temp;
    }
  }
  function getIndex(index) {
    let current = this.head;
    let previous = null;
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.nextNode;
    }
    return current;
  }
  function pop() {
    if (!this.head.nextNode) {
      this.head = null;
      return;
    }
    let pointer = this.getIndex(this.size() - 2);
    pointer.nextNode = null;
    return this.head;
  }

  //  find, toString, insertAt, removeAt
  function contains(value) {
    let current = this.head;
    let previous = null;
    for (let i = 0; i < list.size(); i++) {
      if (value !== current.data) {
        previous = current;
        current = current.nextNode;
      } else if (value == current.data) {
        return true;
      }
    }
    return false;
  }
  function find(value) {
    let current = this.head;
    let previous = null;
    for (let i = 0; i < list.size(); i++) {
      if (value !== current.data) {
        previous = current;
        current = current.nextNode;
      } else if (value == current.data) {
        return i;
      }
    }
    return null;
  }

  function toString() {
    let current = this.head;

    if (current.data == null) {
      console.log('null');
    } else if (current.data !== null) {
      for (let i = 0; i < list.size(); i++) {
        console.log(current.data.toString());
        current = current.nextNode;
      }
    }
  }

  return {
    getIndex,
    head,
    append,
    prepend,
    size,
    getHead,
    getTail,
    pop,
    contains,
    find,
    toString,
  };
};

let node1 = NodeFactory(22);
let node2 = NodeFactory(56);

let list = LinkedList(node1);
node1.nextNode = node2;

list.append('scotty');
console.log(list.head.nextNode.data);

console.log(list.find(22));

function sum(x,y){
    return total= x+y
}


