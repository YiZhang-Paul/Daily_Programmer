#include <stdio.h>
#include <stdlib.h>
#include <sys/timeb.h>

#define MIN(a, b) ((a) < (b) ? (a) : (b))

long long getTime(void);
int getRandom(void);
int getMinimum(int *, int);
int findIndex(int *, int, int);
long long getTotal(int *, int);
long long sumLargestRandomValues(int, int);

int main(void) {

    const long long now = getTime();
    printf("Sum of 1000 Largest Random Numbers: %lld\n", sumLargestRandomValues(1000, 10000000));
    printf("Time Spent: %dms\n", (int)(getTime() - now));

    return 0;
}

//retrieve current time in milliseconds
long long getTime(void) {

    struct timeb now;
    ftime(&now);

    return (long long)now.time * 1000 + now.millitm;
}

int getRandom(void) {
    //seed for generating next pseudo random value
    static int seed = 0;

    seed = seed == 0 ?
        123456789 : ((long long)22695477 * seed + 12345) % 1073741824;

    return seed;
}

int getMinimum(int * numbers, int total) {

    int minimum = numbers[0];

    for(int i = 1; i < total; i++) {

        minimum = MIN(minimum, numbers[i]);
    }

    return minimum;
}

//find first index where given value is found
int findIndex(int * numbers, int value, int total) {

    for(int i = 0; i < total; i++) {

        if(value == numbers[i]) {

            return i;
        }
    }

    return -1;
}

long long getTotal(int * numbers, int total) {

    long long result = 0;

    for(int i = 0; i < total; i++) {

        result += numbers[i];
    }

    return result;
}

/**
 * this function generates M number of random values
 * then calculate the sum of N largest values where N <= M
 */
long long sumLargestRandomValues(int toSum, int total) {

    if(toSum > total) {

        return -1;
    }
    //largest values to sum
    int values[toSum];

    for(int i = 0, minimum = -1; i < total; i++) {

        const int value = getRandom();

        if(i < toSum) {

            values[i] = value;
            minimum = i == toSum - 1 ? getMinimum(values, toSum) : minimum;
        }
        else if(value > minimum) {
            //get rid of minimum value if any larger value is generated
            values[findIndex(values, minimum, toSum)] = value;
            minimum = getMinimum(values, toSum);
        }
    }

    return getTotal(values, toSum);
}