#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int * getRange(int);
int getRandom(int, int);
void swap(int *, int *);
void shuffle(int *, int);
void printRange(int *, int);
void solveXY(long long, long long, int *, int *);
int * findMissingNumber(int *, int);

int main(void) {

    const int total = 10000;
    int *range = getRange(total);
    shuffle(range, total);
    int *missing = findMissingNumber(range, total - 2);

    printf("Excluded: ");
    printRange(range + total - 2, 2);
    printf("Missing Numbers Found: ");
    printRange(missing, 2);

    free(range);
    free(missing);

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

void solveXY(long long xPlusY, long long xSqrPlusYSqr, int * x, int * y) {

    const long long twoXTimesY = xPlusY * xPlusY - xSqrPlusYSqr;
    const long long xMinusY = sqrt(xSqrPlusYSqr - twoXTimesY);
    *x = (xPlusY + xMinusY) / 2;
    *y = xPlusY - *x;
}

int * findMissingNumber(int * range, int total) {

    int *missing = malloc(sizeof *missing * 2);
    long long realSum = total * 2 + 3;
    long long actualSum = 0;
    long long realsquare = (long long)(total + 1) * (total + 1) + (total + 2) * (total + 2);
    long long actualSquare = 0;

    for(int i = 0; i < total; i++) {

        realSum += i + 1;
        actualSum += range[i];
        realsquare += (i + 1) * (i + 1);
        actualSquare += range[i] * range[i];
    }

    solveXY(realSum - actualSum, realsquare - actualSquare, &missing[0], &missing[1]);

    return missing;
}