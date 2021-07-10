/*Implement Queue using an array. 
Initialize it with an array which will be used to store value and a size property that will be used to track the size of queue */

class Queue {
    constructor() {
        this.items = [];
        this.size = 10;
    }
    printQueue() {

        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
    size() {
        return this.items.length;
    }
}

let queue = new Queue();
//console.log(queue.size());