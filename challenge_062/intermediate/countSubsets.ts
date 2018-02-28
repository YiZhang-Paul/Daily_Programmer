//push given value into array associated with given key
function insert(map: Map<number, number[]>, key: number, value: number): void {

    if(!map.has(key)) {

        map.set(key, new Array<number>());
    }

    map.get(key).push(value);
}

//count total number of values in a map with optional key filter
function countTotal(map: Map<number, number[]>, keys: Set<number>): number {

    let total = 0;

    map.forEach((values, key) => {

        if(keys === undefined || keys.has(key)) {

            total += values.length;
        }
    });

    return total;
}

function getInitialSums(input: number[]): Map<number, number[]> {

    let sums = new Map<number, number[]>();

    for(let i = 0; i < input.length - 1; i++) {

        insert(sums, input[i], i + 1);
    }

    return sums;
}

function updateSums(sums: Map<number, number[]>, oldSum: number, startIndex: number, input: number[]): void {

    const maxValue = input.slice(-1)[0];
    //no sum should exceed largest number in input set
    if(oldSum + input[startIndex] > maxValue) {

        return;
    }

    for(let i = startIndex; i < input.length - 1; i++) {

        if(oldSum + input[i] <= maxValue) {

            insert(sums, oldSum + input[i], i + 1);
        }
    }
}

//count total number of subsets whose largest number is the sum of other numbers
function countSubset(input: number[]): number {

    let sums = getInitialSums(input);
    let inputValues = new Set(input);
    let subsets = 0;

    while(sums.size > 0) {

        let newSums = new Map<number, number[]>();

        sums.forEach((indexes, sum) => {
            //update sums and last index of number used to achieve such sums
            for(let i = indexes.length - 1; i >= 0; i--) {

                updateSums(newSums, sum, indexes[i], input);
            }
        });

        sums = newSums;
        subsets += countTotal(sums, inputValues);
    }

    return subsets;
}

//challenge input
console.log(`%cChallenge Input:`, "color : red;");
const time = new Date().getTime();

let input = [1, 2, 3, 4, 6];
console.log(countSubset(input));

input = [3, 4, 9, 14, 15, 19, 28, 37, 47, 50, 54, 56, 59, 61, 70, 73, 78, 81, 92, 95, 97, 99];
console.log(countSubset(input));

console.log(`%cTime Spent: %c${new Date().getTime() - time}ms`, "color : yellow;", "color : violet;");