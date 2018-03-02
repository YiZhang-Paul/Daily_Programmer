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

    const int total = 1000000;
    const int exclude = 2;

    int *range = getRange(total);
    shuffle(range, total);
    int *missing = findMissingNumber(range, total - exclude);

    printf("Excluded: ");
    printRange(range + total - exclude, exclude);
    printf("Missing Numbers: ");
    printRange(missing, exclude);

    free(range);
    free(missing);

    return 0;
}

//retrieve all integers from 1 to N
int * getRange(int total) {

    int *range = malloc(sizeof *range * total);

    for(int i = 0; i < total; i++) {

        range[i] = i + 1;
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

//shuffle an integer array in-place
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

//solve for x and y, given the value of x + y and x^2 + y^2
void solveXY(long long xPlusY, long long xSquarePlusYSquare, int * x, int * y) {
    //2xy = (x + y) * (x + y) - (x^2 + y^2)
    const long long twoXTimesY = xPlusY * xPlusY - xSquarePlusYSquare;
    //(x - y) * (x - y) = x^2 - 2xy + y^2 = (x^2 + y^2) - (2xy)
    const long long xMinusY = sqrt(xSquarePlusYSquare - twoXTimesY);
    *x = (xPlusY + xMinusY) / 2;
    *y = xPlusY - *x;
}

int * findMissingNumber(int * range, int total) {

    int *missing = malloc(sizeof *missing * 2);
    long long realSum = (total + 1) + (total + 2); //sum of all numbers including missing numbers
    long long actualSum = 0;                       //sum of all numbers except missing numbers
    //sum of squares of all numbers including missing numbers
    long long realSquare = (long long)(total + 1) * (total + 1) + (long long)(total + 2) * (total + 2);
    long long actualSquare = 0;                    //sum of squares of all numbers except missing numbers

    for(int i = 0; i < total; i++) {

        realSum += i + 1;
        actualSum += range[i];
        realSquare += (long long)(i + 1) * (i + 1);
        actualSquare += (long long)range[i] * range[i];
    }

    solveXY(realSum - actualSum, realSquare - actualSquare, missing, missing + 1);

    return missing;
}