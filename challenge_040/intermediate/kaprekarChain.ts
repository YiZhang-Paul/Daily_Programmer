function getDigits(value: number): number[] {

    let digits: number[] = [];

    while(value !== 0) {

        digits.push(value % 10);
        value = (value - value % 10) / 10;
    }

    return digits.reverse();
}

function toNumber(digits: number[]): number {

    return digits.reverse().reduce((total, digit, index) => {

        return total + digit * Math.pow(10, index);

    }, 0);
}

function toAscending(value: number): number {

    let digits = getDigits(value).sort((a, b) => a - b);

    return toNumber(digits);
}

function toDescending(value: number): number {

    let digits = getDigits(value).sort((a, b) => b - a);

    return toNumber(digits);
}

function nextKaprekarNumber(value: number): number {

    return toDescending(value) - toAscending(value);
}

function getKaprekarChain(value: number): number[] {

    let chain: number[] = [value];
    let seen = new Set<number>(chain);

    while(!seen.has(nextKaprekarNumber(value))) {

        value = nextKaprekarNumber(value);
        chain.push(value);
        seen.add(value);
    }

    return chain;
}

function maxKaprekarChain(total: number): number[] {

    let max: number[] = [];

    for(let i = Math.pow(10, total), j = i * 10; i < j; i++) {

        let chain = getKaprekarChain(i);

        if(chain.length > max.length) {

            max = chain;
        }
    }

    return max;
}

//challenge input
console.log(`%cChallenge Input:`, "color : red;");
console.log(getKaprekarChain(7));
console.log(getKaprekarChain(81));
console.log(getKaprekarChain(435));
console.log(getKaprekarChain(9554));
console.log(getKaprekarChain(54994));
console.log(getKaprekarChain(125515));
console.log(getKaprekarChain(8845123));
console.log(getKaprekarChain(62346243));
console.log(getKaprekarChain(434554412));
console.log(getKaprekarChain(9456541237));

//bonus input
console.log(`%cBonus Input:`, "color : red;");
console.log(maxKaprekarChain(1));
console.log(maxKaprekarChain(2));
console.log(maxKaprekarChain(3));
console.log(maxKaprekarChain(4));