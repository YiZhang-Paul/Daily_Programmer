#include <stdio.h>
#include <stdlib.h>

int * getRange(int);
int getRandom(int, int);
int removeIndex(int *, int, int);
int * getShuffledRange(int, int);
void printRange(int *, int);

int main(void) {

    getShuffledRange(20, 2);

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

int removeIndex(int * range, int total, int index) {

    if(index > total - 1) {

        return -1;
    }

    const int removed = range[index];

    for(int i = index; i < total - 1; i++) {

        range[i] = range[i + 1];
    }

    return removed;
}

int * getShuffledRange(int total, int exclude) {

    int *range = getRange(total);
    int *shuffled = malloc(sizeof *shuffled * total - exclude);

    for(int i = 0, remain = total; i < total - exclude; i++, remain--) {

        const int index = getRandom(0, remain - 1);
        shuffled[i] = removeIndex(range, remain, index);
    }

    printf("shuffled: ");
    printRange(shuffled, total - exclude);
    printf("excluded: ");
    printRange(range, exclude);

    free(range);

    return shuffled;
}

void printRange(int * range, int total) {

    for(int i = 0; i < total; i++) {

        printf("%d ", range[i]);
    }

    printf("\n");
}