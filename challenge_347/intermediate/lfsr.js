class SetwiseCoprimeChecker {
    getDivisors(number) {
        let divisors = new Set([number]);
        for (let i = 2; i <= Math.ceil(number / 2); i++) {
            if (number % i === 0) {
                divisors.add(i);
                divisors.add(number / i);
            }
        }
        return Array.from(divisors);
    }
    isCoprime(set) {
        if (new Set(set).has(1)) {
            return true;
        }
        return this.getDivisors(set[0]).every(divisor => {
            return set.slice(1).some(number => number % divisor !== 0);
        });
    }
}
class Register {
    constructor(state, type, taps, checker) {
        this._state = state;
        this.type = type.toLowerCase();
        this.taps = taps;
        this.checker = checker;
    }
    get state() {
        return this._state;
    }
    get isMaximal() {
        if (this.taps.length % 2 === 1) {
            return false;
        }
        let taps = this.taps.map(tap => tap + 1);
        return this.checker.isCoprime(taps);
    }
    getRegister(index) {
        return Number.parseInt(this._state[index]);
    }
    getOutput() {
        let output = this.getRegister(this.taps[0]);
        this.taps.slice(1).forEach(tap => {
            output ^= this.getRegister(tap);
            if (this.type === "xnor") {
                output = output ? 0 : 1;
            }
        });
        return output;
    }
    changeState() {
        this._state = this.getOutput() + this._state.slice(0, -1);
    }
}
function showState(step, register) {
    console.log(`%c${step} %c${register.state}`, "color : yellow;", "color : violet;");
}
function getStates(taps, type, state, steps) {
    let register = new Register(state, type, taps, new SetwiseCoprimeChecker());
    for (let i = 0; i <= steps; i++) {
        showState(i, register);
        register.changeState();
    }
}
function getPeriodicity(taps, type, state) {
    let register = new Register(state, type, taps, new SetwiseCoprimeChecker());
    return register.isMaximal ? Math.pow(2, state.length) - 1 : null;
}
//challenge input
console.log(`%cChallenge Input:`, "color : red;");
getStates([1, 2], "XOR", "001", 7);
getStates([0, 2], "XNOR", "001", 7);
getStates([1, 2, 3, 7], "XOR", "00000001", 16);
getStates([1, 5, 6, 31], "XOR", "00000000000000000000000000000001", 16);
//bonus input
console.log(`%cBonus Input:`, "color : red;");
console.log(getPeriodicity([1, 2], "XOR", "001"));
console.log(getPeriodicity([0, 2], "XNOR", "001"));
console.log(getPeriodicity([1, 2, 3, 7], "XOR", "00000001"));
console.log(getPeriodicity([1, 5, 6, 31], "XOR", "00000000000000000000000000000001"));
//# sourceMappingURL=lfsr.js.map