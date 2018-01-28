class Formula {

    private _expression: string;
    private _complexity: number;

    constructor(expression: string) {

        this._expression = expression;
        this._complexity = this.calculateComplexity();
    }

    get expression(): string {

        return this._expression;
    }

    get complexity(): number {

        return this._complexity;
    }

    private parseNumbers(input: string): number[] {

        return input.match(/\d+/g).map(match => {

            return Number.parseInt(match);
        });
    }

    private sum(numbers: number[]): number {

        return numbers.reduce((total, current) => total + current);
    }

    private calculateComplexity(): number {

        return this.sum(this.parseNumbers(this._expression));
    }
}

function getOnes(total: number): number[] {

    return new Array<number>(total).fill(1);
}

function isBetter(formulas: Map<number, Formula>, number1: number, number2: number, toCompare: Formula): boolean {

    if(!formulas.has(number1) || !formulas.has(number2)) {

        return false;
    }

    return formulas.get(number1).complexity + formulas.get(number2).complexity < toCompare.complexity;
}

function combine(formula1: Formula, formula2: Formula, operator: string): Formula {

    if(!new Set<string>("*+").has(operator)) {

        throw "Invalid Operator.";
    }

    if(operator === "*") {

        return new Formula(`(${formula1.expression}) * (${formula2.expression})`);
    }

    return new Formula(`${formula1.expression} + ${formula2.expression}`);
}

function getFormula(number: number, formulas: Map<number, Formula>): Formula {

    let best = new Formula(getOnes(number).join(" + "));

    for(let i = 1; i < number; i++) {

        if(formulas.has(i)) {

            if(number % i === 0 && isBetter(formulas, i, number / i, best)) {

                best = combine(formulas.get(i), formulas.get(number / i), "*");
            }

            if(isBetter(formulas, i, number - i, best)) {

                best = combine(formulas.get(i), formulas.get(number - i), "+");
            }
        }
    }

    return best;
}

function findComplexities(limit: number): Map<number, Formula> {

    let formulas = new Map<number, Formula>();

    for(let i = 1; i <= limit; i++) {

        formulas.set(i, getFormula(i, formulas));
    }

    return formulas;
}

const time = new Date().getTime();
console.log(findComplexities(10000));
console.log(`${new Date().getTime() - time}ms`);