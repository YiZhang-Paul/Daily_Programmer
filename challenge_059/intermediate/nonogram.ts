function parseNumbers(input: string): number[] {

    return input.match(/\d+/g).map(match => Number.parseInt(match));
}

function readMatrix(input: string): number[][] {

    return input.split("\n").map(row => parseNumbers(row));
}

function getColumn(matrix: number[][], columnIndex: number): number[] {

    return matrix.map(row => row[columnIndex]);
}

//count total number of each contiguous groups in an array
function countContiguous(array: number[], value: number): number[] {

    let contiguous: number[] = [];

    for(let i = 0, counter = 0; i < array.length; i++) {

        if(array[i] === value) {

            counter++;
        }
        //when other values are found or reaching end of array
        if(array[i] !== value || i === array.length - 1) {

            if(counter > 0) {

                contiguous.push(counter);
            }

            counter = 0;
        }
    }

    return contiguous;
}

function createNonogram(input: string, contiguous: number): string {

    let matrix = readMatrix(input);
    let nonogram = "";
    //create nonogram by column
    for(let i = 0; i < matrix[0].length; i++) {

        let column = getColumn(matrix, i);
        nonogram += `${countContiguous(column, contiguous).join(" ")}\n`;
    }

    nonogram += "\n";
    //create nonogram by row
    matrix.forEach(row => {

        nonogram += `${countContiguous(row, contiguous).join(" ")}\n`;
    });

    return nonogram;
}

//challenge input
console.log(`%cChallenge Input:`, "color : red;");

const matrix = `0 1 1 1 1 0
                1 0 0 1 1 1
                1 0 1 1 1 1
                1 1 1 1 1 1
                0 1 1 1 1 0`;

console.log(createNonogram(matrix, 1));