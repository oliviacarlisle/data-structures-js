class Queue {
    constructor() {
        this.data = new Map();
        this.head = 0;
        this.tail = 0;
        this.length = 0;
    }

    push(value) {
        this.data.set(this.tail, value);
        this.tail++;
        this.length++;
    }

    shift() {
        if (!this.length) return undefined;
        const value = this.data.get(this.head);
        this.data.delete(this.head);
        this.head++;
        this.length--;
        return value;
    }

    peek() {
        if (!this.length) return undefined;
        return this.data.get(this.head);
    }
}
