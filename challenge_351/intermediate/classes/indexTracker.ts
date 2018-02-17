import Item from "classes/item";

export default class IndexTracker {

    private _items: Item[];
    private _tracker: Map<number, Item>;

    constructor(items: string) {

        this._items = this.getItems(items);
        this.setTracker(this._items);
    }

    get items(): string {

        return this.sortItems().reduce((result, current) => {

            return result + current.content;

        }, "");
    }

    private sortItems(items: Item[] = this._items): Item[] {

        return items.slice().sort((a, b) => a.index - b.index);
    }

    private changeIndex(item: Item, index: number): void {

        item.index = index;
        this._tracker.set(index, item);
    }

    private parseNumbers(input: string): number[] {

        return input.match(/\d+/g).map(match => Number.parseInt(match));
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

    private spin(total: number): void {

        let items = this.sortItems();

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

        let indexes = this.parseNumbers(move);

        if(move[0] === "s") {

            this.spin(indexes[0]);
        }
        else if(move[0] === "x") {

            this.exchange(indexes[0], indexes[1]);
        }
        else {

            this.swapPartner(indexes[0], indexes[1]);
        }
    }
}