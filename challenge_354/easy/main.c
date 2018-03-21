#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MIN(a, b) ((a) < (b) ? (a) : (b))

bool isPrime(int);
void getPrimes(int, bool);
long long * factorize(long long, int *);
void compareFactorSum(long long *, int, int, long long, long long, long long *);
long long findSmallestSum(long long);

int *primes = NULL;
int totalPrimes = 0;

int main(void) {

    getPrimes(10000, false);

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

void getPrimes(int limit, bool recursive) {

    if(primes == NULL) {

        primes = malloc(sizeof *primes);
        primes[totalPrimes++] = 2;
    }

    if(recursive) {

        if(!isPrime(limit)) {

            return;
        }

        primes = realloc(primes, sizeof *primes * (totalPrimes + 1));
        primes[totalPrimes++] = limit;

        return;
    }

    if(primes[totalPrimes - 1] < limit) {

        for(int i = primes[totalPrimes - 1] + 1; i <= limit; i++) {

            getPrimes(i, true);
        }
    }
}

long long * factorize(long long number, int * total) {

    long long *factors = malloc(sizeof *factors);

    for(int i = 0; i < totalPrimes; i++) {

        if(number % primes[i] == 0) {

            factors = realloc(factors, sizeof *factors * (*total + 1));
            factors[(*total)++] = primes[i];
            number /= primes[i];
            i = -1;
        }
    }

    factors = realloc(factors, sizeof *factors * (*total + 1));
    factors[(*total)++] = number;

    return factors;
}

void compareFactorSum(long long * factors, int counter, int total, long long factor, long long number, long long * sum) {

    if(counter == total) {

        const long long newSum = factor + number / factor;
        *sum = *sum == 0 ? newSum : MIN(*sum, newSum);

        return;
    }

    compareFactorSum(factors, counter + 1, total, factor * factors[counter], number, sum);
    compareFactorSum(factors, counter + 1, total, factor, number, sum);
}

long long findSmallestSum(long long number) {

    long long sum = 0;
    int totalFactors = 0;
    long long *factors = factorize(number, &totalFactors);
    compareFactorSum(factors, 0, totalFactors, 1, number, &sum);

    free(factors);

    return sum;
}