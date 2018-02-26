#include <stdio.h>
#include <stdlib.h>
#include <math.h>

#define MAX_DIGITS 150

struct customNumber {

    int *digits;
    int length;
};

struct customNumber readCustomNumber(int);
int getValue(struct customNumber *);
void raiseToPower(struct customNumber *, int);
struct customNumber copyCustomNumber(struct customNumber *);
void flipCustomNumberFromCenter(struct customNumber *);
int isLarger(struct customNumber *, struct customNumber *);
void printCustomNumber(struct customNumber *);
void freeCustomNumber(struct customNumber *);

int main(void) {

    struct customNumber number = readCustomNumber(3);
    raiseToPower(&number, 39);
    struct customNumber copy = copyCustomNumber(&number);
    flipCustomNumberFromCenter(&number);

    printf("flipped\n");
    printCustomNumber(&number);
    printf("copy\n");
    printCustomNumber(&copy);
    printf("isLarger: %d\n", isLarger(&copy, &number));

    freeCustomNumber(&number);
    freeCustomNumber(&copy);

    return 0;
}

struct customNumber readCustomNumber(int number) {

    struct customNumber customNumber;
    customNumber.digits = (int *)malloc(MAX_DIGITS * sizeof(int));
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

struct customNumber copyCustomNumber(struct customNumber * number) {

    struct customNumber copy;
    copy.digits = (int *)malloc(MAX_DIGITS * sizeof(int));
    copy.length = number->length;

    for(int i = 0; i < number->length; i++) {

        copy.digits[i] = number->digits[i];
    }

    return copy;
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

int isLarger(struct customNumber * number, struct customNumber * toCompare) {

    if(number->length != toCompare->length) {

        return number->length > toCompare->length;
    }

    for(int i = number->length - 1; i >= 0; i--) {

        if(number->digits[i] != toCompare->digits[i]) {

            return number->digits[i] > toCompare->digits[i];
        }
    }

    return 0;
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