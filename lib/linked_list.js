// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }

}


// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // TODO: Implement the addToTail method here
    addToTail(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (this.length === 0) return undefined;
        else if (this.length === 1) {
            let currentNode = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return currentNode;
        } else {
            let currentTail = this.tail;
            let secondToLast = this.get(this.length - 2);
            this.tail = secondToLast;
            this.tail.next = null;
            this.length--;
            return currentTail;
        }

    }

    // TODO: Implement the addToHead method here
    addToHead(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            let currentHead = this.head;
            this.head = newNode;
            this.head.next = currentHead;
        }
        this.length++;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (this.length === 0) return undefined;
        else if (this.length === 1) {
            let currentNode = this.head;
            this.head = this.tail = null;
            // this.tail = null;
            this.length--;
            return currentNode;
        } else {
            let currentHead = this.head;
            let nextHead = this.head.next;
            this.head = nextHead;
            this.length--;
            return currentHead;
        }
    }

    // TODO: Implement the contains method here
    contains(target) {
        // const newNode = new Node(target, next); ***why do we not need to instanciate the newNode in contains and in the get
        let currentNode = this.head
        while (currentNode !== null) {
            if (currentNode.value === target) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index < 0 || index > this.length) {
            return null;
        }
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            let nextNode = currentNode.next;
            currentNode = nextNode;
        }
        return currentNode;
    }

    // TODO: Implement the set method here
    // This method replaces the value of an exisiting node for a new passed in value
    set(index, value) {
        if (this.get(index) === null) return false;
        let node = this.get(index);
        node.value = value;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, value) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) {
            this.addToHead(value);
            return true;
        }
        let newNode = new Node(value);
        let leader = this.get(index - 1);
        let holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return true;
    }
    // in this example we are insreting 50 into the second index
    // 0    1     2     3
    // 55-- 87 -- 99 --32
    //    leader      hpointer
    // 55-- 87 -- 50-- 99 --32
    // 0    1      2    3

    // TODO: Implement the remove method here
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) {
            return this.removeHead();
        }
        let removeNode = this.get(index);
        let prevNode = this.get(index - 1);
        let nextNode = this.get(index + 1);
        prevNode.next = nextNode;
        this.length--;
        return removeNode;
    }         // --
    // 55-- 87 / 50 \  99 --32
    // 0    1      2    3
    //  87 - 50 -99  87-99  50-99
    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
