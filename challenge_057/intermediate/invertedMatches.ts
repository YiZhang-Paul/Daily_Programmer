function readTableWithoutKeys(input: string): string[] {

    return input.match(/\d+(?=\n|[^.])/g);
}

function getValue(x: number, y: number, table: string[]): string {

    return table[y][x];
}

function isInvertedMatch(x: number, y: number, table: string[]): boolean {

    return getValue(x, y, table) === getValue(y, x, table);
}

function countInvertedMatchWithValue(input: string, value: number): number {

    let inverted = 0;
    let table = readTableWithoutKeys(input);
    //test every coordinate combination
    for(let i = 0; i < table[0].length - 1; i++) {

        for(let j = i + 1; j < table[0].length; j++) {

            const value = Number.parseInt(getValue(i, j, table));

            if(value === 1 && isInvertedMatch(i, j, table)) {

                inverted++;
            }
        }
    }

    return inverted;
}

//challenge input
console.log(`%cChallenge Input:`, "color : red;");

const table = ` ABCDEFGHIJKLMNOPQRST
               A11110101111011100010
               B10010010000010001100
               C01101110010001000000
               D10110011001011101100
               E10100100011110110100
               F01111011000111010010
               G00011110001011001110
               H01111000010001001000
               I01101110010110010011
               J00101000100010011110
               K10101001100001100000
               L01011010011101100110
               M10110110010101000100
               N10001111101111110010
               O11011010010111100110
               P01000110111101101000
               Q10011001100010100000
               R11101011100110110110
               S00001100000110010101
               T01000110011100101011`;

console.log(countInvertedMatchWithValue(table));