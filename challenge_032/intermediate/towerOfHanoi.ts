class Stack<T> {

    private items: T[] = [];

    get size(): number {

        return this.items.length;
    }

    get isEmpty(): boolean {

        return this.size === 0;
    }

    public peek(): T {

        return this.isEmpty ? null : this.items.slice(-1)[0];
    }

    public push(item: T): void {

        this.items.push(item);
    }

    public pop(): T {

        return this.isEmpty ? null : this.items.pop();
    }
}