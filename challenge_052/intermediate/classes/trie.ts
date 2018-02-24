class Node {

    private _keys = new Map<string, Node>();

    public hasKey(key: string): boolean {

        return this._keys.has(key);
    }

    public addKey(key: string): void {

        this._keys.set(key, new Node());
    }

    public getKey(key: string): Node {

        if(!this.hasKey(key)) {

            throw "Key not found.";
        }

        return this._keys.get(key);
    }
}

export default class Trie {

    private _root = new Node();

    public insert(word: string): void {

        let node = this._root;

        for(let i = 0; i < word.length; i++) {

            const key = word[i];

            if(!node.hasKey(key)) {

                node.addKey(key);
            }

            node = node.getKey(key);
        }
    }

    public isPrefix(word: string): boolean {

        let node = this._root;

        for(let i = 0; i < word.length; i++) {

            if(!node.hasKey(word[i])) {

                return false;
            }

            node = node.getKey(word[i]);
        }

        return true;
    }
}