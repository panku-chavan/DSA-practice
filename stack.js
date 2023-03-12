//refer this program for better understanding of stack.

class Stack {
    constructor(capacity) {
        this.top = -1;
        this.arr = [];
        this.capacity = capacity;
    }

    push(item) {
        if (this.top === this.capacity-1) {
            console.log("Stack Overflow.");
        }
        this.top++;
        this.arr[this.top] = item;
        console.log(item, "Got pushed in stack.");
        this.print();
    }
    pop() {
        if (this.top === -1) {
            console.log("Stack Underflow");
        }
        let result = this.arr[this.top];
        this.top--;
        console.log(result, "Got popped in stack.");
        
        this.arr.pop();
        this.print();
    }
    peek() {
        if(this.top===-1){
            console.log("stack is empty, so there is no items at top of stack.");
            this.print();
        }
        console.log("Top of the stack is", this.top);
        this.print();
    }
    isEmpty(){
        if(this.top===-1){
            console.log("Stack is empty now.");
            this.print()
        }
        else{
            console.log(`Stack is not empty, there are ${this.arr.length} elements in stack.`);
            this.print();
        }
    }
    isFull(){
        if(this.top===this.capacity){
            console.log("Stack is Full.");
            this.print();
        }else{
            console.log(`Stack is not full. there are ${this.capacity-this.top-1} items space available in stack.`);
            this.print();
        }
    }
    print(){
        console.log("Stack is :",...this.arr)
    }
}

let s1= new Stack(5);
s1.push(2);
s1.push(5);
s1.push(9);
s1.push(5);
s1.push(9);
s1.pop();
s1.peek();
s1.isEmpty();
s1.isFull();
