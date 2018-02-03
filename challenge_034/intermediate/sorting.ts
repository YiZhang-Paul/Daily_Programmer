function isSorted(numbers: number[]): boolean {

    if(numbers.length <= 1) {

        return numbers.length === 1;
    }

    return numbers.slice(0, -1).every((number, index) => {

        return number <= numbers[index + 1];
    });
}

function exclude(numbers: number[], index: number): number[] {

    return [...numbers.slice(0, index), ...numbers.slice(index + 1)];
}

function popRandom(numbers: number[]): number {

    const index = Math.floor(Math.random() * numbers.length);

    return numbers.splice(index, 1)[0];
}

function shuffle(numbers: number[]): number[] {

    let shuffled: number[] = [];

    while(numbers.length !== 0) {

        shuffled.push(popRandom(numbers));
    }

    return shuffled;
}

function bogoSort1(numbers: number[], current: number[] = []): number[] {

    if(numbers.length === 0) {

        return isSorted(current) ? current : null;
    }

    for(let i = 0; i < numbers.length; i++) {

        let result = bogoSort1(exclude(numbers, i), [...current, numbers[i]]);

        if(result !== null) {

            return result;
        }
    }

    return null;
}

function bogoSort2(numbers: number[]): number[] {

    while(!isSorted(numbers)) {

        numbers = shuffle(numbers);
    }

    return numbers;
}

function stoogeSort(numbers: number[], first: number, last: number): void {

    if(first >= last) {

        return null;
    }

    if(numbers[first] > numbers[last]) {

        [numbers[first], numbers[last]] = [numbers[last], numbers[first]];
    }

    if(last - first + 1 > 2) {

        const oneThird = Math.floor((last - first + 1) / 3);
        stoogeSort(numbers, first, last - oneThird);
        stoogeSort(numbers, first + oneThird, last);
        stoogeSort(numbers, first, last - oneThird);
    }
}

//challenge input
console.log(`%cChallenge Input:`, "color : red;");

console.log("Bogo Sort(Permutation):");
console.log(bogoSort1([3, 1, 2, 4]));
console.log(bogoSort1([8, 13, 2, 0, 4]));

console.log("Bogo Sort(Shuffle):");
console.log(bogoSort2([3, 1, 2, 4]));
console.log(bogoSort2([8, 13, 2, 0, 4]));

console.log("Stooge Sort:");
let array = [3, 1, 2, 4];
stoogeSort(array, 0, array.length - 1)
console.log(array);
array = [8, 13, 2, 0, 4];
stoogeSort(array, 0, array.length - 1)
console.log(array);