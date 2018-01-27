class Frame {

    private rolls: number[];

    constructor(rolls: number[]) {

        this.rolls = rolls;
    }

    get cleared(): boolean {

        return this.rolls[0] + this.rolls[1] === 10;
    }

    get result(): string {

        if(this.rolls[0] === 10) {

            return "X";
        }

        const rollOne = this.rolls[0] === 0 ? "-" : String(this.rolls[0]);
        const rollTwo = this.cleared ? "/" : (this.rolls[1] === 0 ? "-" : String(this.rolls[1]));

        return rollOne + rollTwo;
    }
}

function parseNumbers(input: string): number[] {

    return input.match(/\d+/g).map(number => Number.parseInt(number));
}

function getFrames(rolls: string): Frame[] {

    let pins = parseNumbers(rolls);
    let frames: Frame[] = [];

    for(let i = 0; i < pins.length; i++) {

        frames.push(new Frame(pins[i] === 10 ? [10, 0] : [pins[i], pins[i + 1]]));

        if(pins[i] !== 10) {

            i++;
        }
    }

    return frames;
}

function showFrames(frames: Frame[]): void {

    console.log(frames.map(frame => frame.result).join(" "));
}

//challenge input
console.log(`%cChallenge Input: `, "color : red;");
console.log(showFrames(getFrames("6 4 5 3 10 10 8 1 8 0 10 6 3 7 3 5 3")));
console.log(showFrames(getFrames("9 0 9 0 9 0 9 0 9 0 9 0 9 0 9 0 9 0 9 0")));
console.log(showFrames(getFrames("10 10 10 10 10 10 10 10 10 10 10 10")));
console.log(showFrames(getFrames("5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5")));
console.log(showFrames(getFrames("10 3 7 6 1 10 10 10 2 8 9 0 7 3 10 10 10")));
console.log(showFrames(getFrames("9 0 3 7 6 1 3 7 8 1 5 5 0 10 8 0 7 3 8 2 8")));