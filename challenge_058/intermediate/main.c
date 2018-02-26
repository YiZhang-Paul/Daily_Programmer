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
void addDigit(struct customNumber *, int, int);
void raiseToPower(struct customNumber *, int);
struct customNumber copyCustomNumber(struct customNumber *);
void flipCustomNumberFromCenter(struct customNumber *);
int isLarger(struct customNumber *, struct customNumber *);
int hasSameDigits(struct customNumber *, int);
void printCustomNumber(struct customNumber *);
void printNextPalindrome(struct customNumber *);
void freeCustomNumber(struct customNumber *);

int main(void) {

    struct customNumber number1 = readCustomNumber(808);
    printNextPalindrome(&number1);

    struct customNumber number2 = readCustomNumber(999);
    printNextPalindrome(&number2);

    struct customNumber number3 = readCustomNumber(2133);
    printNextPalindrome(&number3);

    struct customNumber number4 = readCustomNumber(3);
    raiseToPower(&number4, 39);
    printNextPalindrome(&number4);

    struct customNumber number5 = readCustomNumber(7);
    raiseToPower(&number5, 100);
    printNextPalindrome(&number5);


    freeCustomNumber(&number1);
    freeCustomNumber(&number2);
    freeCustomNumber(&number3);
    freeCustomNumber(&number4);
    freeCustomNumber(&number5);

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

void addDigit(struct customNumber * number, int digit, int index) {

    if(index == number->length) {

        number->digits[number->length++] = digit;

        return;
    }

    const int sum = digit + number->digits[index];
    number->digits[index] = sum % 10;

    if(sum >= 10) {

        addDigit(number, sum / 10, index + 1);
    }
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

int hasSameDigits(struct customNumber * number, int digit) {

    for(int i = 0; i < number->length; i++) {

        if(digit != number->digits[i]) {

            return 0;
        }
    }

    return 1;
}

void printCustomNumber(struct customNumber * number) {

    for(int i = number->length - 1; i >= 0; i--) {

        printf("%d", number->digits[i]);
    }
}

void printNextPalindrome(struct customNumber * number) {

    struct customNumber copy = copyCustomNumber(number);
    printCustomNumber(number);
    printf(" -> ");

    if(hasSameDigits(number, 9)) {

        addDigit(number, 2, 0);
    }
    else {

        flipCustomNumberFromCenter(number);

        if(!isLarger(number, &copy)) {

            const int center = number->length % 2 == 1 ?
                (number->length - 1) / 2 : (number->length - 1) / 2 + 1;
            addDigit(number, 1, center);
            flipCustomNumberFromCenter(number);
        }
    }

    printCustomNumber(number);
    printf("\n");
    freeCustomNumber(&copy);
}

void freeCustomNumber(struct customNumber * number) {

    free(number->digits);
}