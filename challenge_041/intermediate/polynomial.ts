import Term from "term.js";

export default class Polynomial {

    private _terms: Term[] = [];

    constructor(terms: Term[]) {

        this._terms = this.sortTerms(terms);
    }

    get terms(): Term[] {

        return this._terms;
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

    public multiply(other: Polynomial): Polynomial {

        let terms: Term[] = [];

        this.terms.forEach(term => {

            other.terms.forEach(otherTerm => {

                terms.push(term.multiply(otherTerm));
            });
        });

        return new Polynomial(terms);
    }
}