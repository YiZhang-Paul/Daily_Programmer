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
    private _tracker: Map<Item, number>;

    constructor(items: string) {

        this._items = this.getItems(items);
        this._tracker = this.getTracker(this._items);
    }

    private getItems(items: string): Item[] {

        let itemList: Item[] = [];

        for(let i = 0; i < items.length; i++) {

            itemList.push(new Item(items[i], i));
        }

        return itemList;
    }

    private getTracker(items: Item[]): Map<Item, number> {

        let tracker = new Map<Item, number>();

        for(let i = 0; i < items.length; i++) {

            tracker.set(items[i], i);
        }

        return tracker;
    }

    private spin(total: number): void {

        let items: Item[] = [];

        this._tracker.forEach((index, item) => {

            items[item.index] = item;
        });

        items = [...items.slice(-total), ...items.slice(0, items.length - total)];

        for(let i = 0; i < items.length; i++) {

            items[i].index = i;
            this._tracker.set(items[i], i);
        }
    }

    public processMove(move: string): void {

        switch(move[0]) {

            case "s" :

                this.spin(Number.parseInt(move[1]));
        }
    }
}

let tracker = new IndexTracker("abcde");
tracker.processMove("s2");
console.log(tracker);