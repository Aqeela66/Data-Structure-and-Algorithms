/*Implement following methods:
isEmpty: a method that checks whether the given stack is empty or not. It will return a boolean
isFull: a method that checks whether the given stack is full or not. Hint: Compare the length of array with size */

class Stack {
    //// Array is used to implement stack
    constructor() {
        this.items = [];
        this.size = 3;
    }
    // add element to top of stack
    push(item) {
        this.items.push(item);
        this.size++;
    }
    // return and remove top element in stack
    // return undefined if stack is empty
    pop() {
        //if (this.items.length == 0)
        // return "Underflow";
        return this.items.pop();
        this.size--;
    }
    peek() {
        console.log(this.items[this.items.length - 1]);
    }

    //check if the stack is empty 
    isEmpty() {
        if (this.items.length == 0) {
            return true;

        } else
            return false
    }


    isFull() {

        return this.items.length == this.size;


    }
    printstack() {
        for (let i = 0; i < this.items.length; i++)
            console.log(this.items[i]);
    }
}

//creating object for stack class
let mystack = new Stack();

mystack.push("Karachi");
mystack.push("Hyderabad");
mystack.push("Lahore");
mystack.printstack();

mystack.pop();
mystack.printstack();



mystack.isEmpty();
mystack.printstack();

mystack.isFull();
mystack.printstack();