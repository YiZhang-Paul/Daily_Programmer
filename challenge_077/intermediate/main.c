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

    return number < 2 ? 1 : number * factorial(number - 1);
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

    if(number < 5) {

        return number < 2 ? 1 : lastNonZeroDigit(factorial(number));
    }
    //n! = pow(2, a) * a! * b! where a = n / 5 and b = n % 5
    const int a = number / 5;
    const int b = number % 5;
    const int powerOfTwo = lastNonZeroDigit(pow(2, a % 4));
    const int factorialA = lastNonZeroDigitOfFactorial(a);
    const int factorialB = lastNonZeroDigitOfFactorial(b);

    return lastNonZeroDigit(powerOfTwo * factorialA * factorialB);
}