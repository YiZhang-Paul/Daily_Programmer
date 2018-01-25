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

    getRegister(index) {

        return Number.parseInt(this._state[index]);
    }

    getOutput(): number {

        let output = this.getRegister(this._taps[0]);

        this._taps.slice(1).forEach(tap => {

            output ^= this.getRegister(tap);

            if(this._type === "xnor") {

                output = ~ output;
            }
        });

        return output;
    }

    changeState(): void {

        this._state = this.getOutput() + this._state.slice(0, -1);
    }
}

let register = new Register("001", "XOR", [0, 2]);