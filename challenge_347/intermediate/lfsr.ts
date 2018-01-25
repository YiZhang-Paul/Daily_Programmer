class Register {

    private _state: string;
    private _type: string;
    private _taps: number[];

    constructor(state: string, type: string, taps: number[]) {

        this._state = state;
        this._type = type.toLowerCase();
        this._taps = taps;
    }

    get state(): string {

        return this._state;
    }

    getRegister(index): number {

        return Number.parseInt(this._state[index]);
    }

    getOutput(): number {

        let output = this.getRegister(this._taps[0]);

        this._taps.slice(1).forEach(tap => {

            output ^= this.getRegister(tap);

            if(this._type === "xnor") {

                output = output ? 0 : 1;
            }
        });

        return output;
    }

    changeState(): void {

        this._state = this.getOutput() + this._state.slice(0, -1);
    }
}

function showState(step: number, register: Register): void {

    console.log(`%c${step} %c${register.state}`, "color : yellow;", "color : violet;");
}

function getStates(taps: number[], type: string, state: string, steps: number): void {

    let register = new Register(state, type, taps);

    for(let i = 0; i <= steps; i++) {

        showState(i, register);
        register.changeState();
    }
}

//challenge input
console.log(`%cChallenge Input:`, "color : red;");
getStates([1,2], "XOR", "001", 7);
getStates([0,2], "XNOR", "001", 7);
getStates([1,2,3,7], "XOR", "00000001", 16);
getStates([1,5,6,31], "XOR", "00000000000000000000000000000001", 16);