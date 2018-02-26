#include <stdio.h>
#include <stdlib.h>

struct customNumber {

    int *digits;
    int length;
};

struct customNumber readCustomNumber(int);
void printCustomNumber(struct customNumber *);
void freeCustomNumber(struct customNumber *);

int main(void) {

    struct customNumber number = readCustomNumber(2133);

    printCustomNumber(&number);

    freeCustomNumber(&number);

    return 0;
}

struct customNumber readCustomNumber(int number) {

    struct customNumber customNumber;
    customNumber.digits = (int *)malloc(150 * sizeof(int));
    customNumber.length = 0;

    while(number != 0) {

        customNumber.digits[customNumber.length++] = number % 10;
        number = (number - number % 10) / 10;
    }

    return customNumber;
}

void printCustomNumber(struct customNumber * number) {

    for(int i = number->length - 1; i >= 0; i--) {

        printf("%d", number->digits[i]);
    }
}

void freeCustomNumber(struct customNumber * number) {

    free(number->digits);
}