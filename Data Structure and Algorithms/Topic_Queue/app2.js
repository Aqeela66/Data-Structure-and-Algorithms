/*Implement following methods. Don’t forget to increase and decrease the size when you add or remove an element from the queue.
enqueue: a method through that you can add a value to the queue
peek: a method through which you can get the value on the top of queue
dequeue: a method through which you can remove the first element of the queue */

class Queue {
    constructor() {
        this.items = [];
    }

    // add element to the queue
    enqueue(element) {
        return this.items.push(element);
    }

    // remove element from the queue
    dequeue() {
        if (this.items.length > 0) {
            return this.items.shift();
        } else
            return false;
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    printQueue() {

        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}


let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
queue.enqueue(8);
console.log(queue.items);

queue.dequeue();
console.log(queue.items);

console.log(queue.peek());
