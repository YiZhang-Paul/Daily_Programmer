const time = new Date().getTime();

let input = [3, 4, 9, 14, 15, 19, 28, 37, 47, 50, 54, 56, 59, 61, 70, 73, 78, 81, 92, 95, 97, 99];
let values = new Set(input);
let sums = input.slice(0, -1).map((value, index) => [value, index]);
let total = 0;

while(true) {

    let newSums: number[][] = [];

    for(let i = 0; i < sums.length; i++) {

        for(let j = sums[i][1] + 1; j < input.length - 1; j++) {

            const newSum = sums[i][0] + input[j];
            newSums.push([newSum, j]);

            if(values.has(newSum)) {

                total++;
            }
        }
    }

    if(sums.length === newSums.length) {

        break;
    }

    sums = newSums;
}

console.log(total);
console.log(new Date().getTime() - time + "ms");