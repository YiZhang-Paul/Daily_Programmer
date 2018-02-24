#include <stdio.h>
#include <stdlib.h>
#include <sys/timeb.h>

int seed = 0;

int getRandom(void);
long long getTime(void);
int compare(const void *, const void *);
long long sum(int *, int);
long long sum1000LargestRandomNumbers(void);

int main(void) {

    const long long now = getTime();
    printf("Sum of 1000 Largest Random Numbers: %lld\n", sum1000LargestRandomNumbers());
    printf("Time Spent: %lldms\n", getTime() - now);

    return 0;
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

long long getTime(void) {

    struct timeb now;
    ftime(&now);

    return (long long)now.time * 1000 + now.millitm;
}

int compare(const void * a, const void * b) {

    return *(int *)b - *(int *)a;
}

long long sum(int * numbers, int total) {

    long long result = 0;

    for(int i = 0; i < total; i++) {

        result += numbers[i];
    }

    return result;
}

long long sum1000LargestRandomNumbers(void) {

    const int total = 10000000;
    int *numbers = (int *)malloc(total * sizeof(int));

    for(int i = 0; i < total; i++) {

        *(numbers + i) = getRandom();
    }

    qsort(numbers, total, sizeof(int), compare);
    long long result = sum(numbers, 1000);
    free(numbers);

    return result;
}