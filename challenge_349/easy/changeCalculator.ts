function sum(numbers: number[]): number {

    return numbers.reduce((total, current) => total + current, 0);
}

function findChanges(coins: number[], total: number, current: number[] = [], changes: number[][] = []): number[][] {

    if(sum(current) === total) {

        changes.push(current.sort((a, b) => a - b));

        return null;
    }

    if(coins.length === 0) {

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

    const [input, output] = requirement.split("\n");
    const constraint = readConstraint(output);
    const limit = parseNumbers(output)[0];

    return [parseNumbers(input), [constraint, limit]];
}

function findValidChanges(changes: number[][], constraint: number, limit: number): number[][] {

    if(constraint === -2) return changes.filter(change => change.length <= limit);
    if(constraint === -1) return changes.filter(change => change.length < limit);
    if(constraint === 0) return changes.filter(change => change.length === limit);
    if(constraint === 1) return changes.filter(change => change.length > limit);
    if(constraint === 2) return changes.filter(change => change.length >= limit);
    return new Array<number[]>();
}

function toStrings(inputs: number[][]): string[] {

    return inputs.map(input => input.join(","));
}

function toNumbers(inputs: string[]): number[][] {

    return inputs.map(input => parseNumbers(input));
}

function removeDuplicate(inputs: string[]): string[] {

    return Array.from(new Set(inputs));
}

function findDistinctChanges(changes: number[][]): number[][] {

    let distinct = removeDuplicate(toStrings(changes));

    return toNumbers(distinct);
}

function tryChange(requirement: string): number[][] {

    let [input, output] = readRequirement(requirement);

    let changes = findValidChanges(

        findChanges(input.slice(1), input[0]),
        output[0],
        output[1]
    );

    return findDistinctChanges(changes);
}

function showChanges(changes: number[][]): void {

    if(changes.length === 0) {

        console.log(`%cNo Solution Found.`, "color : tomato;");

        return null;
    }

    changes.forEach(change => {

        console.log(`%c${change.join(", ")}`, "color : violet;");
    });
}

//challenge input
console.log(`%cChallenge Input:`, "color : red;");
let requirement = `Input: 150 100 50 50 50 50
                   Output: n < 5`;
console.log(`%c${requirement.split("\n").map(line => line.trim()).join("\n")}:`, "color : yellow;");
showChanges(tryChange(requirement));

requirement = `Input: 130 100 20 18 12 5 5
               Output: n < 6`;
console.log(`%c${requirement.split("\n").map(line => line.trim()).join("\n")}:`, "color : yellow;");
showChanges(tryChange(requirement));

requirement = `Input: 200 50 50 20 20 10
               Output: n >= 5`;
console.log(`%c${requirement.split("\n").map(line => line.trim()).join("\n")}:`, "color : yellow;");
showChanges(tryChange(requirement));