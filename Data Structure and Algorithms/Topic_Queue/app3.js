/*Implement following methods:
isEmpty: a method that checks whether the given queue is empty or not. It will return a boolean
isFull: a method that checks whether the given queue is full or not. Hint: Compare the length of array with size */

class Queue {
    constructor() {
        this.items = [1, 2, 3, 4, 5];
    }


    isEmpty() {
        if (this.items.length == 0) {
            console.log("Its Empty");
        }
        else {
            console.log("Its NOT Empty");
        }
    }

    isFull() {
        if (this.items.length != 0) {
            console.log("Queue is Full");
        }
        else {
            console.log("Queue is Empty");
        }
    }
    printQueue() {

        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}

let queue = new Queue();

queue.isEmpty();
//console.log(queue.isEmpty());

queue.isFull();
//console.log(queue.isFull());
