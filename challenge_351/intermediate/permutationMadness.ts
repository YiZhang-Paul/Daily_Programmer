class Item {

    private _content: string;
    private _index: number;

    constructor(content: string, index: number) {

        this._content = content;
        this._index = index;
    }

    get content(): string {

        return this._content;
    }

    get index(): number {

        return this._index;
    }

    set index(value: number) {

        this._index = value;
    }
}

class IndexTracker {

    private _items: Item[];
    private _tracker: Map<number, Item>;

    constructor(items: string) {

        this._items = this.getItems(items);
        this.setTracker(this._items);
    }

    private getItems(items: string): Item[] {

        let itemList: Item[] = [];

        for(let i = 0; i < items.length; i++) {

            itemList.push(new Item(items[i], i));
        }

        return itemList;
    }

    private setTracker(items: Item[]): void {

        if(this._tracker === undefined) {

            this._tracker = new Map<number, Item>();
        }

        for(let i = 0; i < items.length; i++) {

            this.changeIndex(items[i], i);
        }
    }

    private parseNumbers(input: string): number[] {

        return input.match(/\d+/g).map(match => Number.parseInt(match));
    }

    private changeIndex(item: Item, index: number): void {

        item.index = index;
        this._tracker.set(index, item);
    }

    private spin(total: number): void {

        let items: Item[] = [];

        this._tracker.forEach((item, index) => {

            items[index] = item;
        });

        this.setTracker([

            ...items.slice(-total),
            ...items.slice(0, items.length - total)
        ]);
    }

    private exchange(index1: number, index2: number): void {
        //must keep reference to original items before exchanging
        let item1 = this._tracker.get(index1);
        let item2 = this._tracker.get(index2);

        this.changeIndex(item1, index2);
        this.changeIndex(item2, index1);
    }

    public processMove(move: string): void {

        switch(move[0]) {

            case "s" :

                this.spin(Number.parseInt(move[1]));

                break;

            case "x" :

                let indexes = this.parseNumbers(move);
                this.exchange(indexes[0], indexes[1]);

                break;

            case "p" :

                break;
        }
    }
}

let tracker = new IndexTracker("abcde");
tracker.processMove("s2");
tracker.processMove("x3/4");
console.log(tracker);