#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int * getRange(int);
int getRandom(int, int);
void swap(int *, int *);
void shuffle(int *, int);
void printRange(int *, int);

int main(void) {

    int *range = getRange(100);
    shuffle(range, 100);
    printRange(range, 98);
    printf("Excluded: ");
    printRange(range + 98, 2);

    return 0;
}

int * getRange(int total) {

    int *range = malloc(sizeof *range * total);

    for(int i = 1; i <= total; i++) {

        range[i - 1] = i;
    }

    return range;
}

int getRandom(int min, int max) {

    return rand() % (max - min + 1) + min;
}

void swap(int * index1, int * index2) {

    const int total = *index1 + *index2;
    *index1 = total - *index1;
    *index2 = total - *index2;
}

void shuffle(int * range, int total) {

    for(int i = 0; i < total; i++) {

        const int swapIndex = getRandom(0, total - 1);
        swap(range + i, range + swapIndex);
    }
}

void printRange(int * range, int total) {

    for(int i = 0; i < total; i++) {

        printf("%d ", range[i]);
    }

    printf("\n");
}