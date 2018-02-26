#include <stdio.h>
#include <stdlib.h>
#include <math.h>

struct customNumber {

    int *digits;
    int length;
};

struct customNumber readCustomNumber(int);
int getValue(struct customNumber *);
void raiseToPower(struct customNumber *, int);
void printCustomNumber(struct customNumber *);
void freeCustomNumber(struct customNumber *);

int main(void) {

    struct customNumber number = readCustomNumber(7);

    printCustomNumber(&number);
    raiseToPower(&number, 100);
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
        number /= 10;
    }

    return customNumber;
}

int getValue(struct customNumber * number) {

    int value = 0;

    for(int i = 0; i < number->length; i++) {

        value += (int)(pow(10, i) + 0.5) * number->digits[i];
    }

    return value;
}

void raiseToPower(struct customNumber * number, int power) {

    int value = getValue(number);

    for(int i = 1; i < power; i++) {

        for(int j = 0, carry = 0; j < number->length; j++) {

            const int product = value * number->digits[j];
            number->digits[j] = (product + carry) % 10;
            carry = (product + carry) / 10;

            if(carry > 0 && j == number->length - 1) {

                number->digits[++number->length - 1] = carry;

                break;
            }
        }
    }
}

void printCustomNumber(struct customNumber * number) {

    for(int i = number->length - 1; i >= 0; i--) {

        printf("%d", number->digits[i]);
    }

    printf("\n");
}

void freeCustomNumber(struct customNumber * number) {

    free(number->digits);
}