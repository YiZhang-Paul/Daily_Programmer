/* jslint esversion: 6 */
class Embedder {

    isEmbedded(suspect, reference) {

        if(suspect.length >= reference.length) {

            return suspect === reference;
        }

        for(let i = 0, j = 0; i < reference.length; i++) {

            if(reference[i] !== suspect[j]) {

                continue;
            }

            if(++j === suspect.length) {

                return true;
            }
        }

        return false;
    }

    getSharedLetters(word1, word2) {

        let shared = [];

        for(let i = 0; i < word1.length; i++) {

            if(word2.includes(word1[i])) {

                shared.push(word1[i]);
            }
        }

        return shared.join("");
    }

    maxSharedPatterns(word1, word2) {

        let shared = this.getSharedLetters(word1, word2);

        for(let i = 0; i < shared.length; i++) {

            const segment = shared.slice(i);

            if(this.isEmbedded(segment, word2)) {

                return segment;
            }
        }

        return null;
    }

    segmentize(word, breakpoints) {

        let segments = [];

        for(let i = 0; i < breakpoints.length; i++) {

            const index = word.indexOf(breakpoints[i]);
            segments.push(word.slice(0, index + 1));
            word = word.slice(index + 1);
        }

        if(word.length) {

            segments[segments.length - 1] += word;
        }

        return segments;
    }

    replace(word, index, toReplace) {

        return word.slice(0, index) + toReplace + word.slice(index + 1);
    }

    embed(toEmbed, embedded) {

        let pattern = this.maxSharedPatterns(toEmbed, embedded);
        let segments = this.segmentize(toEmbed, pattern);

        for(let i = 0, index = -1; i < pattern.length; i++) {

            index = embedded.indexOf(pattern[i], index + 1);
            embedded = this.replace(embedded, index, segments[i]);
        }

        return embedded;
    }
}