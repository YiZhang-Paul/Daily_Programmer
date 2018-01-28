function parseDigits(number: string): number[] {

    return number.match(/\d/g).map(digit => Number.parseInt(digit));
}

function sum(numbers: number[]): number {

    return numbers.reduce((total, current) => total + current);
}

function getAlternateSum(digits: number[]): number {

    let alternateDigits = "";

    for(let i = 0; i < digits.length; i++) {

        alternateDigits += digits[i] * (i % 2 === 0 ? 2 : 1);
    }

    return sum(parseDigits(alternateDigits));
}

function getCheckSum(number: string): number {

    let digits = parseDigits(number).reverse();

    return 10 - getAlternateSum(digits) % 10;
}

console.log(getCheckSum("4992739871"));