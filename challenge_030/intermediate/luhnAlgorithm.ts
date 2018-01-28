function parseDigits(number: string): number[] {

    return number.match(/\d/g).map(digit => Number.parseInt(digit));
}

function sum(numbers: number[]): number {

    return numbers.reduce((total, current) => total + current);
}

function getAlternateSum(digits: number[]): number {

    let doubledDigits = "";

    for(let i = 0; i < digits.length; i++) {

        doubledDigits += digits[i] * (i % 2 === 0 ? 2 : 1);
    }

    return sum(parseDigits(doubledDigits));
}

function getCheckSum(number: string): number {

    let digits = parseDigits(number).reverse();

    return 10 - getAlternateSum(digits) % 10;
}

function isValidCheckSum(number: string): boolean {

    return number.slice(-1)[0] === String(getCheckSum(number.slice(0, -1)));
}

//challenge input
console.log(`%cChallenge Input:`, "color : red;");
console.log(`Check Sum for ${4992739871}: %c${getCheckSum("4992739871")}`, "color : yellow;");
console.log(`49927398716 Is Valid: %c${isValidCheckSum("49927398716")}`, "color : yellow;");
console.log(`49927398715 Is Valid: %c${isValidCheckSum("49927398715")}`, "color : yellow;");