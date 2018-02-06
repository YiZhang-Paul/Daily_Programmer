#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int countDigits(int);
int getDigitsOnRight(int, int);
int getDigitsOnLeft(int, int);

int main() {

    printf("%d ", getDigitsOnRight(153, 2));
    printf("%d", getDigitsOnLeft(157551, 3));

    return 0;
}

int countDigits(int number) {

    return (int)log10((double)number) + 1;
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