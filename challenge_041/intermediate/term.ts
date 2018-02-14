export default class Term {

    private _coefficient: number;
    private _variable: string;
    private _degree: number;

    constructor(coefficient: number, variable: string, degree: number) {

        this._coefficient = coefficient;
        this._variable = variable.toLowerCase();
        this._degree = degree;
    }

    get coefficient(): number {

        return this._coefficient;
    }

    get variable(): string {

        return this._variable;
    }

    get degree(): number {

        return this._degree;
    }

    get expression(): string {

        const coefficient = this.coefficient === 1 ? "" : String(this.coefficient);
        const degree = this.degree <= 1 ? "" : `^${this.degree}`;

        return `${coefficient}${this.variable}${degree}`;
    }

    private isSameVariable(other: Term): boolean {

        return this.variable === other.variable;
    }

    private isSameDegree(other: Term): boolean {

        return this.degree === other.degree;
    }

    private canAdd(other: Term): boolean {

        return this.isSameVariable(other) && this.isSameDegree(other);
    }

    public add(other: Term): Term {

        if(!this.canAdd(other)) {

            throw "Cannot Add Expressions with Different Variables/Degrees.";
        }

        return new Term(

            this.coefficient + other.coefficient,
            this.variable,
            this.degree
        );
    }

    public multiply(other: Term): Term {

        return new Term(

            this.coefficient * other.coefficient,
            this.variable ? this.variable : other.variable,
            this.degree + other.degree
        );
    }
}