class Frame {

    private rolls: number[];

    constructor(rolls: number[]) {

        this.rolls = this.markMissingRoll(rolls);
    }

    get cleared(): boolean {

        return this.rolls[0] + this.rolls[1] === 10;
    }

    get result(): string {

        if(this.rolls[0] === 10) {

            return "X";
        }

        if(this.cleared) {

            return this.getSymbol(this.rolls[0]) + "/";
        }

        return this.rolls.map(this.getSymbol).join("");
    }

    private markMissingRoll(rolls: number[]): number[] {

        return rolls.map(roll => roll === undefined ? -1 : roll);
    }

    private getSymbol(roll: number): string {

        if(roll === 0 || roll === -1) {

            return roll === 0 ? "-" : "";
        }

        return String(roll);
    }
}

function parseNumbers(input: string): number[] {

    return input.match(/\d+/g).map(number => {

        return Number.parseInt(number);
    });
}

function getFrames(rolls: string): Frame[] {

    let pins = parseNumbers(rolls);
    let frames: Frame[] = [];

    for(let i = 0; i < pins.length; i++) {

        if(pins[i] === 10) {

            frames.push(new Frame([10, 0]));
        }
        else {

            frames.push(new Frame([pins[i], pins[i + 1]]));
            i++;
        }
    }

    return frames;
}

function padRight(input: string, totalLength: number, pad: string): string {

    if(input.length >= totalLength) {

        return input;
    }

    return input + pad.repeat(totalLength - input.length);
}

function showFrames(frames: Frame[]): void {

    console.log(frames.map(frame => padRight(frame.result, 3, " ")).join(" "));
}

//challenge input
console.log(`%cChallenge Input: `, "color : red;");
showFrames(getFrames("6 4 5 3 10 10 8 1 8 0 10 6 3 7 3 5 3"));
showFrames(getFrames("9 0 9 0 9 0 9 0 9 0 9 0 9 0 9 0 9 0 9 0"));
showFrames(getFrames("10 10 10 10 10 10 10 10 10 10 10 10"));
showFrames(getFrames("5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5"));
showFrames(getFrames("10 3 7 6 1 10 10 10 2 8 9 0 7 3 10 10 10"));
showFrames(getFrames("9 0 3 7 6 1 3 7 8 1 5 5 0 10 8 0 7 3 8 2 8"));