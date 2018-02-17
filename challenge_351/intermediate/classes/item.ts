export default class Item {

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