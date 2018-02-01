function parseDigits(input: string): number[] {

    return input.match(/\d/g).map(match => Number.parseInt(match));
}

function sortDigits(input: string): string {

    return parseDigits(input).sort((a, b) => a - b).join("");
}

function sum(digits: number[]): number {

    return digits.reduce((total, current) => total + current, 0);
}

function findStacks(
    boxes: number[],
    total: number,
    current: number[] = [],
    stacks: Set<string> = new Set<string>()): string[] {

    if(sum(current) === total) {

        stacks.add(sortDigits(current.join("")));

        return null;
    }

    if(boxes.length === 0) {

        return null;
    }

    for(let i = 0; i < boxes.length; i++) {

        findStacks(boxes.slice(i + 1), total, [...current, boxes[i]], stacks);
    }

    return Array.from(stacks);
}

function isValidPack(pack: string[], boxes: number[]): boolean {

    return sortDigits(pack.join("")) === sortDigits(boxes.join(""));
}

function getPacks(
    stacks: string[],
    total: number,
    boxes: number[],
    current: string[] = [],
    packs: string[][] = []): string[][] {

    if(current.length === total) {

        if(isValidPack(current, boxes)) {

            packs.push(current);
        }

        return null;
    }

    if(stacks.length === 0) {

        return null;
    }

    for(let i = 0; i < stacks.length; i++) {

        getPacks(stacks.slice(i + 1), total, boxes, [...current, stacks[i]], packs);
    }

    return packs;
}

function pack(input: string): string[][] {

    let [totalStacks, ...boxes] = parseDigits(input);

    if(sum(boxes) % totalStacks !== 0) {

        return [];
    }

    let stacks = findStacks(boxes, sum(boxes) / totalStacks);

    return getPacks(stacks, totalStacks, boxes);
}

function showPack(packs: string[][]): void {

    if(packs.length === 0) {

        console.log(`%cNo Solution Found.`, "color : tomato;");
    }
    else {

        console.log(`%c${packs[0].join("\n")}`, "color : violet;");
    }
}

const time = new Date().getTime();

//default input
console.log(`%cDefault Input:`, "color : red;");
showPack(pack("3 34312332"));

//challenge input
console.log(`%cChallenge Input:`, "color : red;");
showPack(pack("3 912743471352"));
showPack(pack("3 42137586"));
showPack(pack("9 2"));
showPack(pack("4 064876318535318"));

console.log(`%cTime Spent: %c${new Date().getTime() - time}ms`, "color : yellow;", "color : violet;");