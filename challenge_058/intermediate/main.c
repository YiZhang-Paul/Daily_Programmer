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
void flipCustomNumberFromCenter(struct customNumber *);
void printCustomNumber(struct customNumber *);
void freeCustomNumber(struct customNumber *);

int main(void) {

    struct customNumber number = readCustomNumber(3);

    printCustomNumber(&number);
    raiseToPower(&number, 39);
    printCustomNumber(&number);
    flipCustomNumberFromCenter(&number);
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

void flipCustomNumberFromCenter(struct customNumber * number) {

    const int hasOddDigits = number->length % 2 == 1;
    const int startLeft = hasOddDigits ?
        (number->length - 1) / 2 - 1 : number->length / 2 - 1;
    const int startRight = hasOddDigits ?
        (number->length - 1) / 2 + 1 : number->length / 2;

    for(int i = startLeft, j = startRight; i >= 0; i--) {

        number->digits[i] = number->digits[j++];
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