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

function getStacks(stacks: string[], total: number, boxes: number[]): string[][] {

    
}

function pack(input: string): string[][] {

    let [stack, ...boxes] = parseDigits(input);

    if(sum(boxes) % stack !== 0) {

        return null;
    }

    let stacks = findStacks(boxes, sum(boxes) / stack);

    return getStacks(stacks, stack, boxes);
}

console.log(pack("3 34312332"));