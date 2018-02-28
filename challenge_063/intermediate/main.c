#include <stdio.h>
#include <stdlib.h>

#define MAX(a, b) ((a) > (b) ? (a) : (b))

#define DEFAULT_SEED 123456789

void swap(int *, int *);
void reverse(int, int *);
int getRandom(void);
int findMax(int *, int);
int findIndex(int *, int, int);
int findMaxIndex(int *, int);
void reverseSort(int *, int);
void printArray(int *, int);

int main(void) {

    int numbers[] = { 2, 5, 4, 3, 1 };
    const int size = sizeof(numbers) / sizeof(int);
    printArray(numbers, size);
    reverseSort(numbers, size);
    printArray(numbers, size);

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

int findMax(int * array, int total) {

    int max = 0;

    for(int i = 0; i < total; i++) {

        max = MAX(max, array[i]);
    }

    return max;
}

int findIndex(int * array, int total, int value) {

    for(int i = 0; i < total; i++) {

        if(value == array[i]) {

            return i;
        }
    }

    return -1;
}

int findMaxIndex(int * array, int total) {

    const int max = findMax(array, total);

    return findIndex(array, total, max);
}

void reverseSort(int * array, int total) {

    while(total) {

        const int index = findMaxIndex(array, total);
        reverse(index + 1, array);
        reverse(total, array);
        total--;
    }
}

void printArray(int * array, int total) {

    for(int i = 0; i < total; i++) {

        printf("%d ", array[i]);
    }

    printf("\n");
}