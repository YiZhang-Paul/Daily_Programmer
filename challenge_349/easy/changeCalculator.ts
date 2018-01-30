function sum(numbers: number[]): number {

    if(numbers.length === 0) {

        return 0;
    }

    return numbers.reduce((total, current) => total + current);
}

function findChanges(coins: number[], total: number, current: number[] = [], changes: number[][] = []): number[][] {

    if(coins.length === 0 || sum(current) === total) {

        if(sum(current) === total) {

            changes.push(current);
        }

        return null;
    }

    for(let i = 0; i < coins.length; i++) {

        findChanges(coins.slice(i + 1), total, [...current, coins[i]], changes);
    }

    return changes;
}

console.log(findChanges([100, 50, 50, 50, 50], 150));
console.log(findChanges([100, 20, 18, 12, 5, 5], 130));
console.log(findChanges([50, 50, 20, 20, 10], 200));