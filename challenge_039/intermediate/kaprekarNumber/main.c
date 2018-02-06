#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int countDigits(int);
int getDigitsOnRight(int, int);
int getDigitsOnLeft(int, int);
int isKaprekar(int);

int main() {

    printf("%d", isKaprekar(9));
    printf("%d", isKaprekar(297));

    return 0;
}

int countDigits(int number) {

    return (int)log10(number) + 1;
}

int getDigitsOnRight(int number, int digits) {

    if(digits > countDigits(number)) {

        return 0;
    }

    return number % (int)(pow(10, digits) + 0.5);
}

int getDigitsOnLeft(int number, int digits) {

    int length = countDigits(number);

    if(digits > length) {

        return 0;
    }

    return number / (int)(pow(10, length - digits) + 0.5);
}

int isKaprekar(int number) {

    int length = countDigits(number);
    int square = (int)(pow(number, 2) + 0.5);
    int leftDigits = getDigitsOnLeft(square, countDigits(square) - length);
    int rightDigits = getDigitsOnRight(square, length);

    return leftDigits + rightDigits == number;
}