#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define MIN(a, b) ((a) < (b) ? (a) : (b))

long long * factorize(long long, int *);
void compareFactorSum(long long *, int, int, long long, long long, long long *);
long long findSmallestSum(long long);

int main(void) {

    printf("%lld\n", findSmallestSum(12));
    printf("%lld\n", findSmallestSum(456));
    printf("%lld\n", findSmallestSum(4567));
    printf("%lld\n", findSmallestSum(12345));
    printf("%lld\n", findSmallestSum(1234567891011));

    return 0;
}

long long * factorize(long long number, int * total) {

    long long *factors = malloc(sizeof *factors);
    int primes[] = { 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53,
        59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113,
        127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181,
        191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251,
        257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317,
        331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397,
        401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463,
        467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557,
        563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619,
        631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701,
        709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787,
        797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863,
        877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953,
        967, 971, 977, 983, 991, 997
    };

    for(int i = 0; i < sizeof primes / sizeof(int); i++) {

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