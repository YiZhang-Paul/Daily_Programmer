#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int factorial(int);
int getLast(int);
int getLastPower(int);
int lastNonZeroDigit(int);

int main(void) {

    printf("%d\n", lastNonZeroDigit(10));
    printf("%d\n", lastNonZeroDigit(1000));
    printf("%d\n", lastNonZeroDigit(1000000000));

    return 0;
}

int factorial(int number) {

    if(number == 0) {

        return 1;
    }

    return number == 1 ? number : number * factorial(number - 1);
}

int getLast(int number) {

    int digit = 0;

    while(number > 0 && digit == 0) {

        digit = number % 10;
        number /= 10;
    }

    return digit;
}

int getLastPower(int power) {

    if(power == 0) {

        return 1;
    }

    return getLast(pow(2, power % 4));
}

int lastNonZeroDigit(int number) {

    if(number < 2) {

        return 1;
    }

    return getLast(getLastPower(number / 5) * lastNonZeroDigit(number / 5) * getLast(factorial(number % 5)));
}