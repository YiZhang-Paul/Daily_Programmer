function parseNumbers(input: string): number[] {

    return input.match(/\d+/g).map(number => {

        return Number.parseInt(number);
    });
}

function sum(numbers: number[]): number {

    return numbers.reduce((total, current) => total + current);
}

function getComplexity(expression: string): number {

    return sum(parseNumbers(expression));
}

function getOnes(total: number): number[] {

    return new Array<number>(total).fill(1);
}

function getFormulas(number: number, complexities: Map<number, string>): string[] {

    let formulas: string[] = [];
    let divisors = new Set<number>();
    let sums = new Set<number>();

    for(let i = 1; i < number; i++) {

        if(complexities.has(i)) {

            if(number % i === 0 && !divisors.has(number / i) && complexities.has(number / i)) {

                formulas.push(`(${complexities.get(i)}) * (${complexities.get(number / i)})`);
                divisors.add(number / i);
            }

            if(!sums.has(number - i) && complexities.has(number - i)) {

                formulas.push(`${complexities.get(i)} + ${complexities.get(number - i)}`);
                sums.add(number - i);
            }
        }
    }

    return formulas.length === 0 ? [getOnes(number).join(" + "), `1 * ${number}`] : formulas;
}

function getBestFormula(number: number, complexities: Map<number, string>): string {

    return getFormulas(number, complexities).reduce((best, current) => {

        return getComplexity(best) <= getComplexity(current) ? best : current;
    });
}

function findComplexities(limit: number): Map<number, string> {

    let complexity = new Map<number, string>();

    for(let i = 1; i <= limit; i++) {

        complexity.set(i, getBestFormula(i, complexity));
    }

    return complexity;
}

const time = new Date().getTime();
console.log(findComplexities(1000));
console.log(`${new Date().getTime() - time}ms`);