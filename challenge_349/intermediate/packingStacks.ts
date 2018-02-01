function parseDigits(input: string): number[] {

    return input.match(/\d/g).map(match => Number.parseInt(match));
}

function sortDigits(input: number[]): number[] {

    return input.sort((a, b) => a - b);
}

function sum(digits: number[]): number {

    return digits.reduce((total, current) => total + current, 0);
}

function findStacks(

    boxes: number[],
    totalSize: number,
    current: number[] = [],
    stacks: Set<string> = new Set<string>()

): string[] {

    if(sum(current) === totalSize) {

        stacks.add(sortDigits(current).join(""));

        return null;
    }

    if(boxes.length === 0) {

        return null;
    }

    for(let i = 0; i < boxes.length; i++) {

        findStacks(boxes.slice(i + 1), totalSize, [...current, boxes[i]], stacks);
    }

    return Array.from(stacks);
}

function isValidPack(pack: string[], boxes: string): boolean {

    let boxesInPack = parseDigits(pack.join(""));

    return sortDigits(boxesInPack).join("") === boxes;
}

function getPacks(

    stacks: string[],
    totalStacks: number,
    boxes: string,
    current: string[] = [],
    packs: string[][] = []

): string[][] {

    if(current.length === totalStacks || stacks.length === 0) {

        if(isValidPack(current, boxes)) {

            packs.push(current);
        }

        return null;
    }

    for(let i = 0; i < stacks.length; i++) {

        getPacks(stacks.slice(i + 1), totalStacks, boxes, [...current, stacks[i]], packs);
    }

    return packs;
}

function pack(input: string): string[][] {

    let [totalStacks, ...boxes] = parseDigits(input);

    if(sum(boxes) % totalStacks !== 0) {

        return [];
    }

    let stacks = findStacks(boxes, sum(boxes) / totalStacks);

    return getPacks(stacks, totalStacks, sortDigits(boxes).join(""));
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