#include <stdio.h>
#include <stdlib.h>

#define DEFAULT_SEED 123456789

void swap(int *, int *);
void reverse(int, int *);
int getRandom(void);

int main(void) {

    int numbers[] = { 2, 5, 4, 3, 1 };

    return 0;
}

void swap(int * index1, int * index2) {

    const int total = *index1 + *index2;
    *index1 = total - *index1;
    *index2 = total - *index2;
}

void reverse(int total, int * array) {

    int *start = array;
    int *end = array + total - 1;

    while(start < end) {

        swap(start++, end--);
    }
}

int getRandom(void) {

    static int seed = 0;

    if(seed == 0) {

        seed = DEFAULT_SEED;
    }
    else {

        seed = ((long long)22695477 * seed + 12345) % 1073741824;
    }

    return seed;
}