class Queue {
    constructor(cap) {
        this.arr = [];
        this.cap = cap;
        this.front = 0;
        this.rear = 0;
    }
    enqueue(item) {
        if (this.rear == this.cap) {
            console.log("Overflow");
        }
        this.arr[this.rear] = item;
        this.rear++;
        console.log("added :", item);
        this.print();
    }
    dequeue() {

        let res = this.arr[this.front];
        this.front++;
        if (this.front === this.rear) {
            console.log("Queue is empty");
        } else {
            console.log("Item removed :", res);
            this.arr.shift();

            this.print()
        }

    }
    print() {
        console.log("Queue is :", this.arr);
        console.log(this.front, this.rear)
    }
}

let q = new Queue(3);
q.enqueue(5);
q.enqueue(4);
q.enqueue(5);
//q.enqueue(4);
q.dequeue()
q.dequeue()
q.dequeue()