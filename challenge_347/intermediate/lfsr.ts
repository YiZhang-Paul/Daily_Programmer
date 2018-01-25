interface CoprimeChecker {

    isCoprime(set: number[]): boolean;
}

class SetwiseCoprimeChecker implements CoprimeChecker {

    private getDivisors(number: number): number[] {

        let divisors = new Set<number>([number]);

        for(let i = 2; i <= Math.ceil(number / 2); i++) {

            if(number % i === 0) {

                divisors.add(i);
                divisors.add(number / i);
            }
        }

        return Array.from(divisors);
    }

    public isCoprime(set: number[]): boolean {

        return this.getDivisors(set[0]).every(divisor => {

            return set.slice(1).some(number => number % divisor !== 0);
        });
    }
}

class Register {

    private _state: string;
    private type: string;
    private taps: number[];
    private checker: CoprimeChecker;

    constructor(state: string, type: string, taps: number[], checker: CoprimeChecker) {

        this._state = state;
        this.type = type.toLowerCase();
        this.taps = taps;
        this.checker = checker;
    }

    get state(): string {

        return this._state;
    }

    private getRegister(index: number): number {

        return Number.parseInt(this._state[index]);
    }

    private getOutput(): number {

        let output = this.getRegister(this.taps[0]);

        this.taps.slice(1).forEach(tap => {

            output ^= this.getRegister(tap);

            if(this.type === "xnor") {

                output = output ? 0 : 1;
            }
        });

        return output;
    }

    public changeState(): void {

        this._state = this.getOutput() + this._state.slice(0, -1);
    }
}

function showState(step: number, register: Register): void {

    console.log(`%c${step} %c${register.state}`, "color : yellow;", "color : violet;");
}

function getStates(taps: number[], type: string, state: string, steps: number): void {

    let register = new Register(state, type, taps, new SetwiseCoprimeChecker());

    for(let i = 0; i <= steps; i++) {

        showState(i, register);
        register.changeState();
    }
}

//challenge input
console.log(`%cChallenge Input:`, "color : red;");
getStates([1, 2], "XOR", "001", 7);
getStates([0, 2], "XNOR", "001", 7);
getStates([1, 2, 3, 7], "XOR", "00000001", 16);
getStates([1, 5, 6, 31], "XOR", "00000000000000000000000000000001", 16);