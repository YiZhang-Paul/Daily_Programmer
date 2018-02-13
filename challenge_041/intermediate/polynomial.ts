import Term from "term.js";

export default class Polynomial {

    private _terms: Term[] = [];

    constructor(terms: Term[]) {

        this._terms = this.sortTerms(terms);
    }

    get format(): string {

        let result = this._terms.reduce((result, term) => {

            return `${result}+${term.format}`;

        }, "");

        return result.slice(1).replace(/\+\-/g, " - ").replace(/\+/g, " + ");
    }

    private sortTerms(terms: Term[]): Term[] {

        return terms.sort((a, b) => a.power - b.power);
    }
}