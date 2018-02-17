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

            this._tracker = new Map<Item, number>();
        }

        for(let i = 0; i < items.length; i++) {

            items[i].index = i;
            this._tracker.set(items[i], i);
        }
    }

    private spin(total: number): void {

        let items: Item[] = [];

        this._tracker.forEach((index, item) => {

            items[item.index] = item;
        });

        this.setTracker([

            ...items.slice(-total),
            ...items.slice(0, items.length - total)
        ]);
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