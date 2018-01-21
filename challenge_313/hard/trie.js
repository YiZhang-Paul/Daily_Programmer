/* jslint esversion: 6 */
class Trie {

    constructor(words) {

        this.root = {};
        this.addList(words);
    }

    add(word) {

        let node = this.root;

        for(let i = 0; i < word.length; i++) {

            if(!node.hasOwnProperty(word[i])) {

                node[word[i]] = {};
            }

            node = node[word[i]];
        }
    }

    addList(words) {

        words.forEach(word => {

            this.add(word);
        });
    }

    traverse(word) {

        let node = this.root;

        for(let i = 0; i < word.length; i++) {

            if(!node.hasOwnProperty(word[i])) {

                return null;
            }

            node = node[word[i]];
        }

        return node;
    }

    isPrefix(word) {

        let node = this.traverse(word);

        if(node === null) {

            return false;
        }

        return Object.keys(node).length > 0;
    }
}