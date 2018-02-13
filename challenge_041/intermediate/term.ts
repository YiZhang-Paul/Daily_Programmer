export default class Term {

    private _coefficient: number;
    private _variable: string;
    private _power: number;

    constructor(coefficient: number, variable: string, power: number) {

        this._coefficient = coefficient;
        this._variable = variable.toLowerCase();
        this._power = power;
    }

    get coefficient(): number {

        return this._coefficient;
    }

    get variable(): string {

        return this._variable;
    }

    get power(): number {

        return this._power;
    }

    get format(): string {

        const coefficient = this.coefficient === 1 ? "" : String(this.coefficient);
        const power = this.power === 1 ? "" : `^${this.power}`;

        return `${coefficient}${this.variable}${power}`;
    }

    private isSameVariable(other: Term): boolean {

        return this.variable === other.variable;
    }

    private isSamePower(other: Term): boolean {

        return this.power === other.power;
    }

    private canAdd(other: Term): boolean {

        return this.isSameVariable(other) && this.isSamePower(other);
    }

    public add(other: Term): Term {

        if(!this.canAdd(other)) {

            throw "Cannot Add Expressions with Different Variables/Powers.";
        }

        return new Term(

            this.coefficient + other.coefficient,
            this.variable,
            this.power
        );
    }

    public multiply(other: Term): Term {

        return new Term(

            this.coefficient * other.coefficient,
            this.variable,
            this.power + other.power,
        );
    }
}