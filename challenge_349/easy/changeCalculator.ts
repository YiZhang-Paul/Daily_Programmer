function sum(numbers: number[]): number {

    if(numbers.length === 0) {

        return 0;
    }

    return numbers.reduce((total, current) => total + current);
}

function findChanges(coins: number[], total: number, current: number[] = [], changes: number[][] = []): number[][] {

    if(coins.length === 0 || sum(current) === total) {

        if(sum(current) === total) {

            changes.push(current.sort((a, b) => a - b));
        }

        return null;
    }

    for(let i = 0; i < coins.length; i++) {

        findChanges(coins.slice(i + 1), total, [...current, coins[i]], changes);
    }

    return changes;
}

function parseNumbers(input: string): number[] {

    return input.match(/\d+/g).map(match => Number.parseInt(match));
}

function readConstraint(requirement: string): number {

    if(/</.test(requirement)) {
        //-2: less or equal to; -1: less than
        return /=/.test(requirement) ? -2 : -1;
    }

    if(/>/.test(requirement)) {
        //2: greater or equal to; 1: greater than
        return /=/.test(requirement) ? 2 : 1;
    }
    //0: equal to
    return 0;
}

function readRequirement(requirement: string) : number[][] {

    const [input, output] = requirement.split("\n").map(line => line.trim());

    return [parseNumbers(input), [readConstraint(output), parseNumbers(output)[0]]];
}

function findValidChanges(changes: number[][], constraint: number, limit: number): number[][] {

    if(constraint === -2) return changes.filter(change => change.length <= limit);
    else if(constraint === -1) return changes.filter(change => change.length < limit);
    else if(constraint === 0) return changes.filter(change => change.length === limit);
    else if(constraint === 1) return changes.filter(change => change.length > limit);
    else if(constraint === 2) return changes.filter(change => change.length >= limit);
    else return new Array<number[]>();
}

function removeDuplicate(changes: number[][]): number[][] {

    let duplicates = new Set<string>();
    let distinct = new Array<number[]>();

    changes.forEach(change => {

        if(!duplicates.has(change.join(""))) {

            duplicates.add(change.join(""));
            distinct.push(change);
        }
    });

    return distinct;
}

function tryChange(requirement: string): number[][] {

    let [input, output] = readRequirement(requirement);
    let changes = findChanges(input.slice(1), input[0]);

    return removeDuplicate(findValidChanges(changes, output[0], output[1]));
}

function showChanges(changes: number[][]): void {

    if(changes.length === 0) {

        console.log(`No Solution Found.`);

        return null;
    }

    changes.forEach(change => {

        console.log(`${change.join(", ")}`);
    });
}

//challenge input
console.log(`%cChallenge Input:`, "color : red;");
let requirement = `Input: 150 100 50 50 50 50
                   Output: n < 5`;
showChanges(tryChange(requirement));

requirement = `Input: 130 100 20 18 12 5 5
               Output: n < 6`;
showChanges(tryChange(requirement));

requirement = `Input: 200 50 50 20 20 10
               Output: n >= 5`;
showChanges(tryChange(requirement));