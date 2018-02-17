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

    get items(): string {

        let items = this._items.slice().sort((a, b) => {

            return a.index - b.index;
        });

        return items.reduce((result, current) => {

            return result + current.content;

        }, "");
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

    private swapPartner(index1: number, index2: number): void {

        this.exchange(this._items[index1].index, this._items[index2].index);
    }

    public processMove(move: string): void {

        if(move[0] === "s") {

            this.spin(Number.parseInt(move[1]));

            return;
        }

        let indexes = this.parseNumbers(move);

        if(move[0] === "x") {

            this.exchange(indexes[0], indexes[1]);

            return;
        }

        this.swapPartner(indexes[0], indexes[1]);
    }
}

function getPrograms(input: string): string {

    return input.match(/^.+(?=\n)/)[0];
}

function getMoves(input: string): string[] {

    return input.split(",").map(move => move.trim());
}

function dance(input: string): string {

    const programs = getPrograms(input);
    const moves = input.slice(programs.length);
    let tracker = new IndexTracker(programs);

    getMoves(moves).forEach(move => {

        tracker.processMove(move);
    });

    return tracker.items;
}

let input = `abcde
             s1,x3/4,p4/1`;
console.log(dance(input));
input = `dbagcfe
         s4,s5,x5/3,x5/6,s5,s3,x0/3,x3/6,x6/0,x2/3,x3/5,s5,s5,s5,s1,s5,s3,s3,x2/3,x1/0,s1,s1,s1,s4,x1/3,x4/2,x5/1,x6/0,s2,x2/1`;
console.log(dance(input));