export default class Expression {

    private _coefficient: number;
    private _term: string;
    private _power: number;

    constructor(coefficient: number, term: string, power: number) {

        this._coefficient = coefficient;
        this._term = term.toLowerCase();
        this._power = power;
    }

    get coefficient(): number {

        return this._coefficient;
    }

    get term(): string {

        return this._term;
    }

    get power(): number {

        return this._power;
    }

    get format(): string {

        const coefficient = this.coefficient === 1 ? "" : String(this.coefficient);

        return `${coefficient}${this.term}^${this.power}`;
    }
}