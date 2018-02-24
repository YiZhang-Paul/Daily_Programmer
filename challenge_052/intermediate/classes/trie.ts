class Node {

    private _keys = new Map<string, Node>();

    get keys(): string[] {

        return Array.from(this._keys).map(pair => pair[0]);
    }

    public hasKey(key: string): boolean {

        return this._keys.has(key);
    }

    public addKey(key: string): void {

        this._keys.set(key, new Node());
    }

    public addKeys(keys: string[]): void {

        for(let i = 0; i < keys.length; i++) {

            this.addKey(keys[i]);
        }
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

    constructor(words: string[]) {

        this.insertAll(words);
    }

    private getGroups(word: string): string[][] {

        return word.match(/\w|\(\w+\)/g).map(group => {

            return group.length === 1 ? [group] : group.match(/\w/g);
        });
    }

    public insert(groups: string[][], node: Node = this._root): void {

        if(groups && groups.length > 0) {

            let currentGroup = groups[0];
            let otherGroups = groups.slice(1);
            node.addKeys(currentGroup);

            node.keys.forEach(key => {

                this.insert(otherGroups, node.getKey(key));
            });
        }
    }

    public insertAll(words: string[]): void {

        words.forEach(word => {

            this.insert(this.getGroups(word));
        });
    }

    public contains(word: string): boolean {

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