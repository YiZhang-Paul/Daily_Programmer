#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int values[3];
int primes[] = {

    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61,
    67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137,
    139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211,
    223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283,
    293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379,
    383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461,
    463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563,
    569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643,
    647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739,
    743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829,
    839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937,
    941, 947, 953, 967, 971, 977, 983, 991, 997
};

bool isPrime(int);
int maxPrimeIndex(int);
bool findPrimes(int, int, int *);
int sum(int *, int);
void printResult(int *, int);

int main(void) {

    const int length = sizeof values / sizeof(int);

    findPrimes(11, 0, values);
    printResult(values, length);

    findPrimes(35, 0, values);
    printResult(values, length);

    findPrimes(111, 0, values);
    printResult(values, length);

    findPrimes(17, 0, values);
    printResult(values, length);

    findPrimes(199, 0, values);
    printResult(values, length);

    findPrimes(287, 0, values);
    printResult(values, length);

    findPrimes(53, 0, values);
    printResult(values, length);

    return 0;
}

bool isPrime(int number) {

    for(int i = 0; i < sizeof primes / sizeof(int); i++) {

        if(number == primes[i]) {

            return true;
        }
    }

    return false;
}

//find index of maximum prime number that is smaller than given value
int maxPrimeIndex(int number) {

    for(int i = 0; i < sizeof primes / sizeof(int); i++) {

        if(primes[i] >= number) {

            return i - 1;
        }
    }

    return -1;
}

//find three prime numbers that add up to given value
bool findPrimes(int number, int counter, int * result) {

    if(counter == 2) {

        if(isPrime(number)) {

            result[counter] = number;
        }

        return isPrime(number);
    }
    //find all prime numbers that is smaller than remaining value
    int max = maxPrimeIndex(number);

    if(max == -1) {

        return false;
    }
    //greedily search for maximum prime value that is smaller than remaining value
    for(int i = max; i >= 0; i--) {

        result[counter] = primes[i];

        if(findPrimes(number - primes[i], counter + 1, result)) {

            return true;
        }
    }

    return false;
}

int sum(int * numbers, int total) {

    int result = 0;

    for(int i = 0; i < total; i++) {

        result += numbers[i];
    }

    return result;
}

void printResult(int * numbers, int total) {

    printf("%d = ", sum(numbers, total));

    for(int i = 0; i < total; i++) {

        printf("%d%s", numbers[i], i == total - 1 ? "" : " + ");
    }

    printf("\n");
}