#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int factorial(int);
int lastNonZeroDigit(int);
int lastNonZeroDigitOfFactorial(int);

int main(void) {

    printf("%d\n", lastNonZeroDigitOfFactorial(10));
    printf("%d\n", lastNonZeroDigitOfFactorial(1000));
    printf("%d\n", lastNonZeroDigitOfFactorial(1000000000));

    return 0;
}

int factorial(int number) {

    if(number == 0) {

        return 1;
    }

    return number == 1 ? number : number * factorial(number - 1);
}

int lastNonZeroDigit(int number) {

    int digit = -1;

    while(number > 0 && digit == -1) {

        digit = number % 10;
        number /= 10;
    }

    return digit;
}

int lastNonZeroDigitOfFactorial(int number) {

    if(number < 2) {

        return 1;
    }

    if(number < 5) {

        return lastNonZeroDigit(factorial(number));
    }

    const int powerOfTwo = lastNonZeroDigit(pow(2, number / 5 % 4));
    const int factorialA = lastNonZeroDigitOfFactorial(number / 5);
    const int factorialB = lastNonZeroDigitOfFactorial(number % 5);

    return lastNonZeroDigit(powerOfTwo * factorialA * factorialB);
}