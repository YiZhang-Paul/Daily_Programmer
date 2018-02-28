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

    const int total = 10000;
    int numbers[total];

    for(int i = 0; i < total; i++) {

        numbers[i] = getRandom();
    }

    reverseSort(numbers, total);
    printArray(numbers, total);

    return 0;
}

void swap(int * index1, int * index2) {

    const int total = *index1 + *index2;
    *index1 = total - *index1;
    *index2 = total - *index2;
}

//reverse the first N elements of a given array
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

//find index of first element found with given value
int findIndex(int * array, int total, int value) {

    for(int i = 0; i < total; i++) {

        if(value == array[i]) {

            return i;
        }
    }

    return -1;
}

//find index of maximum value in an array
int findMaxIndex(int * array, int total) {

    const int max = findMax(array, total);

    return findIndex(array, total, max);
}

void reverseSort(int * array, int total) {

    while(total) {

        const int index = findMaxIndex(array, total);
        //bring maximum value to front, then to the end of unsorted portion
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