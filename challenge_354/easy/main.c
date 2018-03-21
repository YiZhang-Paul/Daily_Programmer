#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool isPrime(int);
int * factorize(int, int *);

int main(void) {

    return 0;
}

bool isPrime(int number) {

    if(number < 2) {

        return false;
    }

    for(int i = 2; i < number; i++) {

        if(number % i == 0) {

            return false;
        }
    }

    return true;
}

int * factorize(int number, int * total) {

    int *factors = malloc(sizeof *factors);

    if(number == 1) {

        factors[(*total)++] = 1;

        return factors;
    }

    while(number != 1) {

        for(int i = 2; i <= number; i++) {

            if(isPrime(i) && number % i == 0) {

                factors = realloc(factors, sizeof *factors * (*total + 1));
                factors[(*total)++] = i;
                number /= i;

                break;
            }
        }
    }

    return factors;
}