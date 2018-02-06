#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int getLength(int);
int digitsOnLeft(int, int);
int digitsOnRight(int, int);
int isKaprekar(int);
void findKaprekar(int);

int main() {

    findKaprekar(1000);

    return 0;
}

int getLength(int number) {

    return (int)log10(number) + 1;
}

int digitsOnLeft(int number, int digits) {

    int length = getLength(number);

    if(digits > length) {

        return 0;
    }

    return number / (int)(pow(10, length - digits) + 0.5);
}

int digitsOnRight(int number, int digits) {

    if(digits > getLength(number)) {

        return 0;
    }

    return number % (int)(pow(10, digits) + 0.5);
}

int isKaprekar(int number) {

    int digits = getLength(number);
    int square = (int)(pow(number, 2) + 0.5);
    int leftDigits = digitsOnLeft(square, getLength(square) - digits);
    int rightDigits = digitsOnRight(square, digits);

    return leftDigits + rightDigits == number;
}

void findKaprekar(int limit) {

    for(int i = 1; i <= limit; i++) {

        if(isKaprekar(i)) {

            printf("%d\n", i);
        }
    }
}