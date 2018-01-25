class Register {
    constructor(state, type, taps) {
        this._state = state;
        this._type = type.toLowerCase();
        this._taps = taps;
    }
    get state() {
        return this._state;
    }
    getRegister(index) {
        return Number.parseInt(this._state[index]);
    }
    getOutput() {
        let output = this.getRegister(this._taps[0]);
        this._taps.slice(1).forEach(tap => {
            output ^= this.getRegister(tap);
            if (this._type === "xnor") {
                output = ~output;
            }
        });
        return output;
    }
    changeState() {
        this._state = this.getOutput() + this._state.slice(0, -1);
    }
}
let register = new Register("001", "XOR", [0, 2]);
//# sourceMappingURL=lfsr.js.map