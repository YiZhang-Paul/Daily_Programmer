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

    private groupTerms(terms: Term[]): Map<number, Term[]> {

        let groups = new Map<number, Term[]>();

        terms.forEach(term => {

            if(!groups.has(term.power)) {

                groups.set(term.power, new Array<Term>());
            }

            groups.get(term.power).push(term);
        });

        return groups;
    }

    private addTerms(terms: Term[]): Term {

        if(terms.length === 1) {

            return terms[0];
        }

        return terms.reduce((result, term) => result.add(term));
    }

    private reduceTerms(terms: Term[]): Term[] {

        let groups = Array.from(this.groupTerms(terms));

        return groups.map(group => this.addTerms(group[1]));
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