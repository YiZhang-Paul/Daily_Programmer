import Term from "term.js";
import Polynomial from "polynomial.js";

function isConstant(input: string): boolean {

    return /^-?\d+$/.test(input);
}

function parseCoefficient(input: string): number {

    if(/^-/.test(input)) {

        return /^-\d/.test(input) ? Number.parseInt(input.match(/^-\d+/)[0]) : -1;
    }

    if(/^\D/.test(input)) {

        return 1;
    }

    return Number.parseInt(input.match(/^\d+/)[0]);
}

function parseVariable(input: string): string {

    if(isConstant(input)) {

        return "";
    }

    return input.match(/[a-zA-Z]/)[0];
}

function parseDegree(input: string): number {

    if(isConstant(input)) {

        return 0;
    }

    return /\^/.test(input) ? Number.parseInt(input.match(/-?\d+$/)[0]) : 1;
}

function parseTerm(input: string): Term {

    return new Term(

        parseCoefficient(input),
        parseVariable(input),
        parseDegree(input)
    );
}

function parsePolynomial(input: string): Polynomial {

    let terms = input.replace(/\s/g, "")
                     .match(/-?\d*[a-zA-Z]+(\^\d+)?|-?\d+/g)
                     .map(term => parseTerm(term));

    return new Polynomial(terms);
}

function reduceFormula(formula: string): string {

    return formula.match(/\([^\(\)]+\)/g)
                  .map(expression => parsePolynomial(expression))
                  .reduce((result, polynomial) => result.multiply(polynomial))
                  .expression;
}

//challenge input
console.log(`%cChallenge Input:`, "color : red;");
console.log(reduceFormula("(2x + 6)(7x + 3)"));
console.log(reduceFormula("(2x^2 + 3x)(5x^2 + 9x)"));
console.log(reduceFormula("(x - 6x^4 + 3)(2x^3 - 16x^7)"));
console.log(reduceFormula("(44x^4 - x^2 + 3x)(9x^6 - 5x^2 + 9)"));