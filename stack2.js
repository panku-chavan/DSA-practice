

class Stack{
    constructor(cap){
        this.cap=cap;
        this.arr=[];
        this.top=-1;
    }
    push(i){
        if(this.top==this.cap-1){
            console.log("Overflow");
        }
        this.top++;
        this.arr[this.top]=i;
        console.log(i,"pushed");
        this.print();
    }
    pop(){
        if(this.top==-1){
            console.log("underflow");
        }
        let res=this.arr[this.top];
        this.top--;
        console.log(res, "popped");
        this.arr.pop()
        this.print()
    }
    peek(){
        if(this.top==-1){
            console.log('Enmpty')
        }
        console.log("Top of the stack is :",this.arr[this.top]);
        this.print();
    }
    print(){
        console.log("Stack is",this.arr);
    }
}

let s1=new Stack(4);
s1.push(4);
s1.peek();
s1.push(5);
s1.push(8);
s1.push(1);
s1.push(9);
s1.pop();
