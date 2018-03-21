#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MIN(a, b) ((a) < (b) ? (a) : (b))

typedef long long llong;

bool isPrime(int);
void getPrimes(int);
llong * factorize(llong, int *);
void compareFactorSum(llong *, int, int, llong, llong, llong *);
llong findSmallestSum(llong);

int *primes = NULL;
int totalPrimes = 0;

int main(void) {

    getPrimes(10000);

    printf("%lld\n", findSmallestSum(12));
    printf("%lld\n", findSmallestSum(456));
    printf("%lld\n", findSmallestSum(4567));
    printf("%lld\n", findSmallestSum(12345));
    printf("%lld\n", findSmallestSum(1234567891011));

    free(primes);

    return 0;
}

bool isPrime(int number) {

    for(int i = 0; i < totalPrimes; i++) {

        if(number % primes[i] == 0) {

            return false;
        }
    }

    return true;
}

//build a list of prime numbers up to given limit
void getPrimes(int limit) {

    if(primes == NULL) {
        //initialize list
        primes = malloc(sizeof *primes);
        primes[totalPrimes++] = 2;
    }

    for(int i = primes[totalPrimes - 1] + 1; i <= limit; i++) {

        if(isPrime(i)) {
            //keep building up the list with previous prime numbers found
            primes = realloc(primes, sizeof *primes * (totalPrimes + 1));
            primes[totalPrimes++] = i;
        }
    }
}

llong * factorize(llong number, int * total) {

    *total = 0;
    llong *factors = malloc(sizeof *factors);
    //store current number at beginning of factors list
    factors[(*total)++] = number;

    for(int i = 0; i < totalPrimes; i++) {

        if(*factors % primes[i] == 0) {

            factors = realloc(factors, sizeof *factors * (*total + 1));
            factors[(*total)++] = primes[i];
            *factors /= primes[i];
            //check from the first prime number again
            i = -1;
        }
    }

    return factors;
}

void compareFactorSum(llong * factors, int counter, int total, llong factor, llong number, llong * sum) {

    if(counter == total) {

        const llong newSum = factor + number / factor;
        *sum = *sum == 0 ? newSum : MIN(*sum, newSum);

        return;
    }
    //check situations when current factor is/is not used
    compareFactorSum(factors, counter + 1, total, factor * factors[counter], number, sum);
    compareFactorSum(factors, counter + 1, total, factor, number, sum);
}

llong findSmallestSum(llong number) {

    llong sum = 0;
    int totalFactors = 0;
    llong *factors = factorize(number, &totalFactors);
    compareFactorSum(factors, 0, totalFactors, 1, number, &sum);

    free(factors);

    return sum;
}