#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int * getRange(int);
int getRandom(int, int);
void swap(int *, int *);
void shuffle(int *, int);
void printRange(int *, int);
void findMissingNumber(int *, int);

int main(void) {

    const int total = 1000;
    const int exclude = 2;

    int *range = getRange(total);
    shuffle(range, total);

    printf("Excluded: ");
    printRange(range + total - exclude, exclude);
    printf("Missing Number: ");
    findMissingNumber(range, total - exclude);

    free(range);

    return 0;
}

int * getRange(int total) {

    int *range = malloc(sizeof *range * total);

    for(int i = 1; i <= total; i++) {

        range[i - 1] = i;
    }

    return range;
}

int getRandom(int min, int max) {

    return rand() % (max - min + 1) + min;
}

void swap(int * index1, int * index2) {

    const int total = *index1 + *index2;
    *index1 = total - *index1;
    *index2 = total - *index2;
}

void shuffle(int * range, int total) {

    for(int i = 0; i < total; i++) {

        const int swapIndex = getRandom(0, total - 1);
        swap(range + i, range + swapIndex);
    }
}

void printRange(int * range, int total) {

    for(int i = 0; i < total; i++) {

        printf("%d ", range[i]);
    }

    printf("\n");
}

void findMissingNumber(int * range, int total) {

    long long totalSum = (total + 1) + (total + 2);
    long long realSum = 0;
    long long totalSquare = (long long)(total + 1) * (total + 1) + (total + 2) * (total + 2);
    long long realSquare = 0;

    for(int i = 0; i < total; i++) {

        totalSum += i + 1;
        realSum += range[i];
        totalSquare += (i + 1) * (i + 1);
        realSquare += range[i] * range[i];
    }

    const long long xPlusY = totalSum - realSum;
    const long long xSquarePlusYSquare = totalSquare - realSquare;
    const long long twoXTimesY = xPlusY * xPlusY - xSquarePlusYSquare;
    const long long xMinusY = sqrt(xSquarePlusYSquare - twoXTimesY);
    const long long x = (xPlusY + xMinusY) / 2;
    const long long y = xPlusY - x;

    printf("%lld\n", x);
    printf("%lld\n", y);
}