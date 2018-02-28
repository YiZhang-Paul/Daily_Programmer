function insertIndex(sums: Map<number, number[]>, sum: number, index: number): void {

    if(!sums.has(sum)) {

        sums.set(sum, new Array<number>());
    }

    sums.get(sum).push(index);
}

function countValues(sums: Map<number, number[]>, values: Set<number>): number {

    let total = 0;

    sums.forEach((indexes, sum) => {

        if(values.has(sum)) {

            total += indexes.length;
        }
    });

    return total;
}

let time = new Date().getTime();
let input = [3, 4, 9, 14, 15, 19, 28, 37, 47, 50, 54, 56, 59, 61, 70, 73, 78, 81, 92, 95, 97, 99];
//let input = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997, 1009, 1013, 1019, 1021];
let total = 0;
let values = new Set(input);
let sums = new Map<number, number[]>();

for(let i = 0; i < input.length - 1; i++) {

    insertIndex(sums, input[i], i + 1);
}

do {

    let newSums = new Map<number, number[]>();

    sums.forEach((indexes, sum) => {

        for(let i = indexes.length - 1; i >= 0; i--) {

            if(sum + input[indexes[i]] > input.slice(-1)[0]) {

                break;
            }

            for(let j = indexes[i]; j < input.length - 1; j++) {

                insertIndex(newSums, sum + input[j], j + 1);
            }
        }
    });

    sums = newSums;
    total += countValues(sums, values);

} while(sums.size > 0);

console.log(total);
console.log(new Date().getTime() - time + "ms");