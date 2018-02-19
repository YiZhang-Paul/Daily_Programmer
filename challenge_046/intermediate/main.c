#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define BLOCKS 8

int * getRange(int, int);
int pickNumber(int, int);
int isSorted(int *, int);
int findIndex(int *, int, int);
void removeIndex(int *, int, int);
void removeItem(int *, int, int);
int removeRandom(int *, int);
int randomInsert(void);
double getChance(int);
int fill(int, int *, int);
int getInsertIndexToLeft(int *, int);
int getInsertIndexToRight(int *, int, int);
int getInsertIndexToLeft(int *, int);
int getInsertIndexToRight(int *, int, int);
int getInsertIndex(int, int *, int, int *, int);
int optimizedInsert(void);
double getOptimizedChance(int);

int main(void) {

    srand(time(NULL));

    //printf("Win Rate: %%%0.2f\n", getChance(1000000) * 100);
    printf("Win Rate: %%%0.2f\n", getOptimizedChance(1000000) * 100);

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

int findIndex(int * numbers, int number, int total) {

    for(int i = 0; i < total; i++) {

        if(numbers[i] == number) {

            return i;
        }
    }

    return -1;
}

void removeIndex(int * numbers, int index, int total) {

    for(int i = index; i < total - 1; i++) {

        const int temporary = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = temporary;
    }
}

void removeItem(int * numbers, int item, int total) {

    int index = findIndex(numbers, item, total);

    if(index != -1) {

        removeIndex(numbers, index, total);
    }
}

int removeRandom(int * numbers, int total) {

    const int index = pickNumber(0, total - 1);
    const int removed = numbers[index];
    removeIndex(numbers, index, total);

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

int fill(int toFill, int * numbers, int total) {

    for(int i = 0; i < total; i++) {

        numbers[i] = toFill;
    }
}

int getInsertIndexToLeft(int * insertions, int index) {

    for(int i = index; i >= 0; i--) {

        if(insertions[i] == -1) {

            return i;
        }
    }

    return -1;
}

int getInsertIndexToRight(int * insertions, int totalInsert, int index) {

    for(int i = index; i < totalInsert; i++) {

        if(insertions[i] == -1) {

            return i;
        }
    }

    return -1;
}

int countEmptyOnLeft(int * insertions, int index) {

    int empty = 0;

    for(int i = 0; i < index; i++) {

        empty += insertions[i] == -1 ? 1 : 0;
    }

    return empty;
}

int countEmptyOnRight(int * insertions, int totalInsert, int index) {

    int empty = 0;

    for(int i = index + 1; i < totalInsert; i++) {

        empty += insertions[i] == -1 ? 1 : 0;
    }

    return empty;
}

int getInsertIndex(int toInsert, int * indexes, int totalIndex, int * insertions, int totalInsert) {

    int index = findIndex(insertions, toInsert, totalInsert);

    if(index == -1) {

        return indexes[totalIndex * toInsert / (9 - 0 + 1)];
    }

    const int emptyOnLeft = countEmptyOnLeft(insertions, index);
    const int emptyOnRight = countEmptyOnRight(insertions, totalInsert, index);

    if(emptyOnLeft == emptyOnRight) {

        return toInsert < 5 ?
            getInsertIndexToLeft(insertions, index) :
            getInsertIndexToRight(insertions, totalInsert, index);
    }

    return emptyOnLeft > emptyOnRight ?
        getInsertIndexToLeft(insertions, index) :
        getInsertIndexToRight(insertions, totalInsert, index);
}

int optimizedInsert(void) {

    int *indexes = getRange(0, BLOCKS);
    int insertions[BLOCKS];
    fill(-1, insertions, BLOCKS);

    for(int i = 0; i < BLOCKS; i++) {

        const int digit = pickNumber(0, 9);
        const int index = getInsertIndex(digit, indexes, BLOCKS - i, insertions, BLOCKS);
        removeItem(indexes, index, BLOCKS - i);

        if(index == -1) {

            free(indexes);

            return 0;
        }

        insertions[index] = digit;
    }

    free(indexes);

    return isSorted(insertions, BLOCKS);
}

double getOptimizedChance(int total) {

    int wins = 0;

    for(int i = 0; i < total; i++) {

        wins += optimizedInsert();
    }

    return wins / (double)total;
}