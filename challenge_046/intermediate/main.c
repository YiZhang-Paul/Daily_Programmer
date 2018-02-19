#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define BLOCKS 8

int * getRange(int, int);
int pickNumber(int, int);
int isSorted(int *, int);
void removeItem(int *, int, int);
int removeRandom(int *, int);
int randomInsert(void);
double getChance(int);

int main(void) {

    srand(time(NULL));

    printf("Win Rate: %%%0.2f\n", getChance(100000) * 100);

    return 0;
}

int * getRange(int start, int total) {

    int *range = (int *)malloc(total * sizeof(int));

    for(int i = 0; i < total; i++) {

        range[i] = start + i;
    }

    return range;
}

int pickNumber(int min, int max) {

    return rand() % (max + 1 - min) + min;
}

int isSorted(int * numbers, int total) {

    for(int i = 0; i < total - 1; i++) {

        if(numbers[i] > numbers[i + 1]) {

            return 0;
        }
    }

    return 1;
}

void removeItem(int * numbers, int index, int total) {

    for(int i = index; i < total - 1; i++) {

        const int temporary = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temporary;
    }
}

int removeRandom(int * numbers, int total) {

    const int index = pickNumber(0, total - 1);
    const int removed = numbers[index];
    removeItem(numbers, index, total);

    return removed;
}

int randomInsert(void) {

    int *indexes = getRange(0, BLOCKS);
    int insertions[BLOCKS];

    for(int i = 0; i < BLOCKS; i++) {

        insertions[removeRandom(indexes, BLOCKS - i)] = pickNumber(0, 9);
    }

    free(indexes);

    return isSorted(insertions, BLOCKS);
}

double getChance(int total) {

    int wins = 0;

    for(int i = 0; i < total; i++) {

        wins += randomInsert();
    }

    return wins / (double)total;
}