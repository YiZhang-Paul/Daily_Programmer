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

console.log(bogoSort1([3, 1, 2, 4]));
console.log(bogoSort1([8, 13, 2, 0, 4]));