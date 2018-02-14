import Term from "term.js";

export default class Polynomial {

    private _terms: Term[] = [];

    constructor(terms: Term[]) {

        this._terms = this.sortTerms(terms);
    }

    get terms(): Term[] {

        return this._terms;
    }

    get expression(): string {

        let result = this._terms.reduce((final, term) => {

            return `${final}+${term.expression}`;

        }, "");

        return result.slice(1).replace(/\+-/g, " - ").replace(/\+/g, " + ");
    }

    private sortTerms(terms: Term[]): Term[] {

        return terms.sort((a, b) => b.degree - a.degree);
    }

    private groupTerms(terms: Term[]): Map<number, Term[]> {

        let groups = new Map<number, Term[]>();

        terms.forEach(term => {

            if(!groups.has(term.degree)) {

                groups.set(term.degree, new Array<Term>());
            }

            groups.get(term.degree).push(term);
        });

        return groups;
    }

    private reduceTerms(terms: Term[]): Term[] {

        let groups = Array.from(this.groupTerms(terms));

        return groups.map(group => {

            if(group[1].length === 1) {

                return group[1][0];
            }

            return group[1].reduce((result, term) => result.add(term));
        });
    }

    public multiply(other: Polynomial): Polynomial {

        let terms: Term[] = [];

        this.terms.forEach(term => {

            other.terms.forEach(otherTerm => {

                terms.push(term.multiply(otherTerm));
            });
        });

        return new Polynomial(this.reduceTerms(terms));
    }
}