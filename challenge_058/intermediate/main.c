#include <stdio.h>
#include <stdlib.h>
#include <math.h>
//maximum number of digits a big number can hold
#define MAX_DIGITS 150

struct bigNumber {

    int digits[MAX_DIGITS]; //digits in reverse order
    int length;
};

struct bigNumber createBigNumber(int);
int getValue(struct bigNumber *);
void addDigit(struct bigNumber *, int, int);
void multiply(struct bigNumber *, int);
void toPower(struct bigNumber *, int);
struct bigNumber copyBigNumber(struct bigNumber *);
void toPalindrome(struct bigNumber *);
int isLarger(struct bigNumber *, struct bigNumber *);
int isRepdigit(struct bigNumber *, int);
void printBigNumber(struct bigNumber *);
struct bigNumber findNextPalindrome(struct bigNumber *);

int main(void) {

    struct bigNumber number1 = createBigNumber(808);
    struct bigNumber number2 = createBigNumber(999);
    struct bigNumber number3 = createBigNumber(2133);
    struct bigNumber number4 = createBigNumber(3);
    struct bigNumber number5 = createBigNumber(7);

    toPower(&number4, 39);
    toPower(&number5, 100);

    struct bigNumber *numbers[] = {

        &number1, &number2, &number3, &number4, &number5
    };

    for(int i = 0; i < sizeof(numbers) / sizeof(struct bigNumber *); i++) {

        printBigNumber(numbers[i]);
        printf(" -> ");

        struct bigNumber nextPalindrome = findNextPalindrome(numbers[i]);
        printBigNumber(&nextPalindrome);
        printf("\n");
    }

    return 0;
}

struct bigNumber createBigNumber(int value) {

    struct bigNumber number;
    number.length = 0;

    while(value != 0) {
        //extract digits of value from right to left
        number.digits[number.length++] = value % 10;
        value /= 10;
    }

    return number;
}

int getValue(struct bigNumber * number) {

    int value = 0;

    for(int i = 0; i < number->length; i++) {

        value += (int)(pow(10, i) + 0.5) * number->digits[i];
    }

    return value;
}

/**
 * note: adding digit does not mean inserting a digit.
 * e.g. adding digit 3 at index 1 of number 2222 means 2522, not 23222
 */
void addDigit(struct bigNumber * number, int digit, int index) {
    //carry over to new decimal place
    if(index == number->length) {

        number->digits[number->length++] = digit;

        return;
    }

    const int sum = digit + number->digits[index];
    number->digits[index] = sum % 10;

    if(sum > 9) {
        //add carry over to next decimal place
        addDigit(number, sum / 10, index + 1);
    }
}

void multiply(struct bigNumber * number, int digit) {

    for(int i = 0, carry = 0; i < number->length; i++) {

        const int product = digit * number->digits[i];
        number->digits[i] = (product + carry) % 10;
        //update carry over
        carry = (product + carry) / 10;
        //carry over to new decimal place
        if(i == number->length - 1 && carry > 0) {

            number->digits[number->length++] = carry;

            break;
        }
    }
}

void toPower(struct bigNumber * number, int power) {

    for(int i = 1, value = getValue(number); i < power; i++) {

        multiply(number, value);
    }
}

struct bigNumber copyBigNumber(struct bigNumber * number) {

    struct bigNumber copy;
    copy.length = number->length;

    for(int i = 0; i < number->length; i++) {

        copy.digits[i] = number->digits[i];
    }

    return copy;
}

//modify a big number into a palindrome. e.g. 55234 into 55255
void toPalindrome(struct bigNumber * number) {

    const int hasOddDigits = number->length % 2 == 1;
    const int center = hasOddDigits ?
        (number->length - 1) / 2 : number->length / 2;
    //mirror digits on left side to right side
    for(int i = center - 1, j = center + hasOddDigits; i >= 0; i--) {

        number->digits[i] = number->digits[j++];
    }
}

int isLarger(struct bigNumber * toTest, struct bigNumber * toCompare) {
    //number with more digits is larger (assuming numbers are positive)
    if(toTest->length != toCompare->length) {

        return toTest->length > toCompare->length;
    }

    for(int i = toTest->length - 1; i >= 0; i--) {
        //number with larger digit on high decimal place is larger
        if(toTest->digits[i] != toCompare->digits[i]) {

            return toTest->digits[i] > toCompare->digits[i];
        }
    }

    return 0;
}

int isRepdigit(struct bigNumber * number, int digit) {

    for(int i = 0; i < number->length; i++) {

        if(digit != number->digits[i]) {

            return 0;
        }
    }

    return 1;
}

void printBigNumber(struct bigNumber * number) {

    for(int i = number->length - 1; i >= 0; i--) {

        printf("%d", number->digits[i]);
    }
}

struct bigNumber findNextPalindrome(struct bigNumber * number) {

    struct bigNumber copy = copyBigNumber(number);
    /**
     * all repdigits with digit 9 are smaller than next palindrome by 2;
     * e.g 99 -> 101, 999 -> 1001, 9999 -> 10001, etc.
     */
    if(isRepdigit(number, 9)) {

        addDigit(&copy, 2, 0);

        return copy;
    }
    //make number palindrome to see if new value is already larger
    toPalindrome(&copy);

    if(!isLarger(&copy, number)) {
        //increase digit in center by 1 and make result palindrome again
        addDigit(&copy, 1, (copy.length - 1) / 2 + (copy.length % 2 ? 0 : 1));
        toPalindrome(&copy);
    }

    return copy;
}