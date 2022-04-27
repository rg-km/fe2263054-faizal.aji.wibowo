// Dari inisiasi stack dengan maksimal elemen sebanyak 10, implementasikan operasi peek.

module.exports = class Stack {
    constructor() {
        // TODO: answer here
        this.data = [];
        this.size = 10;
        this.top = -1;
    }

    push(elemen) {
        // TODO: answer here
        if (this.data.length >= this.size){
            throw 'stack overflow'
        } else {
            this.top++;
            return this.data.push(elemen);
        }
    }

    pop() {
        // TODO: answer here
        if (this.top < 0){
            throw 'stack underflow'
        } else {
            this.top--;
            return this.data.pop();
        }
    }

    isEmpty() {
        return this.top === -1;
    }

    peek() {
        // TODO: answer here
        if (this.isEmpty()){
            throw 'stack is empty'
        } else {
            return this.data[this.top];
        }
    }
}
