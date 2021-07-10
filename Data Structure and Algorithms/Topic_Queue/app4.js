/*Implement following methods:
clear: a method that clears queue
toString: a method that converts all members of queue into string */

class Queue {
    constructor() {
        this.items = [1, 2, 3, 4, 5];
    }

    clear() {
        this.items = []
        this.size = 0;
        console.log('Queue is cleared!')
        return this.items;
    }

    toStringMethod() {
        let str;
        str = this.items.toString();
        console.log(str);
    }
    printQueue() {

        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}

let queue = new Queue();
queue.toStringMethod();

queue.clear();
console.log(queue.items);
