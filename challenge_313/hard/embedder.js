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

    getCommonLetters(word1, word2) {

        return Array.from(word1).filter(letter => word2.includes(letter));
    }

    getRange(start, count) {

        let range = new Array(count).fill(0);

        return range.map((number, index) => index + start);
    }

    getCombination(options, total, current = [], combinations = []) {

        if(current.length === total || options.length === 0) {

            if(current.length === total) {

                combinations.push(current);
            }

            return [[]];
        }

        for(let i = 0; i < options.length; i++) {

            let otherOptions = options.slice(i + 1);
            let newCurrent = [...current, options[i]];
            this.getCombination(otherOptions, total, newCurrent, combinations);
        }

        return combinations;
    }

    excludeIndexes(array, indexes) {

        let excluded = array.slice();

        indexes.sort((a, b) => b - a).forEach(index => {

            excluded.splice(index, 1);
        });

        return excluded;
    }

    maxCommonPattern(word1, word2) {

        let common = this.getCommonLetters(word1, word2);
        let indexes = this.getRange(0, common.length);

        for(let i = 0; i < Math.min(2, common.length); i++) {

            let excludes = this.getCombination(indexes, i);

            for(let j = 0; j < excludes.length; j++) {

                let remain = this.excludeIndexes(common, excludes[j]);

                if(this.isEmbedded(remain.join(""), word2)) {

                    return remain;
                }
            }
        }

        for(let i = 1; i < common.length; i++) {

            let remain = common.slice(i);

            if(this.isEmbedded(remain.join(""), word2)) {

                return remain;
            }
        }

        return null;
    }

    segmentize(word, breakpoints) {

        let segments = [];

        for(let i = 0; i < breakpoints.length; i++) {

            const index = word.indexOf(breakpoints[i]) + 1;
            segments.push(word.slice(0, index));
            word = word.slice(index);
        }

        segments[segments.length - 1] += word;

        return segments;
    }

    replace(word, index, toReplace) {

        return word.slice(0, index) + toReplace + word.slice(index + 1);
    }

    embed(toEmbed, embedded) {

        let pattern = this.maxCommonPattern(toEmbed, embedded);
        let segments = this.segmentize(toEmbed, pattern);

        for(let i = 0, index = -1; i < pattern.length; i++) {

            index = embedded.indexOf(pattern[i], index + 1);
            embedded = this.replace(embedded, index, segments[i]);
        }

        return embedded;
    }
}