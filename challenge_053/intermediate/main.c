#include <stdio.h>
#include <stdlib.h>
#include <sys/timeb.h>

#define MIN(a, b) ((a) < (b) ? (a) : (b))

int seed = 0;

long long getTime(void);
int getRandom(void);
int findMinimum(int *, int);
int findIndex(int *, int, int);
long long sum(int *, int);
long long sum1000LargestRandomNumbers(void);

int main(void) {

    const long long now = getTime();
    printf("Sum of 1000 Largest Random Numbers: %lld\n", sum1000LargestRandomNumbers());
    printf("Time Spent: %dms\n", (int)(getTime() - now));

    return 0;
}

long long getTime(void) {

    struct timeb now;
    ftime(&now);

    return (long long)now.time * 1000 + now.millitm;
}

int getRandom(void) {

    if(seed == 0) {

        seed = 123456789;
    }
    else {

        seed = ((long long)22695477 * seed + 12345) % 1073741824;
    }

    return seed;
}

int findMinimum(int * numbers, int total) {

    int minimum = numbers[0];

    for(int i = 1; i < total; i++) {

        minimum = MIN(numbers[i], minimum);
    }

    return minimum;
}

int findIndex(int * numbers, int value, int total) {

    for(int i = 0; i < total; i++) {

        if(value == numbers[i]) {

            return i;
        }
    }

    return -1;
}

long long sum(int * numbers, int total) {

    long long result = 0;

    for(int i = 0; i < total; i++) {

        result += numbers[i];
    }

    return result;
}

long long sum1000LargestRandomNumbers(void) {

    int numbers[1000];
    int minimum = 0;

    for(int i = 0; i < 10000000; i++) {

        const int number = getRandom();

        if(i < 1000) {

            numbers[i] = number;

            if(i == 999) {

                minimum = findMinimum(numbers, 1000);
            }

            continue;
        }

        if(number > minimum) {

            numbers[findIndex(numbers, minimum, 1000)] = number;
            minimum = findMinimum(numbers, 1000);
        }
    }

    return sum(numbers, 1000);
}