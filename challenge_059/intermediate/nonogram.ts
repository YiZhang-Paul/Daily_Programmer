function parseNumbers(input: string): number[] {

    return input.match(/\d+/g).map(match => Number.parseInt(match));
}

function readMatrix(input: string): number[][] {

    return input.split("\n").map(row => {

        return parseNumbers(row.trim());
    });
}

function getColumn(matrix: number[][], index: number): number[] {

    return matrix.map(row => row[index]);
}

function countContiguous(numbers: number[]): number[] {

    let contiguous: number[] = [];
    let counter = 0;

    for(let i = 0; i < numbers.length; i++) {

        if(numbers[i] === 1) {

            counter++;

            continue;
        }

        if(counter > 0) {

            contiguous.push(counter);
        }

        counter = 0;
    }

    if(counter > 0) {

        contiguous.push(counter);
    }

    return contiguous;
}

function createNonogram(input: string): string {

    let matrix = readMatrix(input);
    let result = "";

    matrix[0].forEach((column, index) => {

        result += `${countContiguous(getColumn(matrix, index)).join(" ")}\n`;
    });

    result += "\n";

    matrix.forEach(row => {

        result += `${countContiguous(row).join(" ")}\n`;
    });

    return result;
}


const matrix = `0 1 1 1 1 0
              1 0 0 1 1 1
              1 0 1 1 1 1
              1 1 1 1 1 1
              0 1 1 1 1 0`;

//challenge input
console.log(`%cChallenge Input:`, "color : red;");
console.log(createNonogram(matrix));