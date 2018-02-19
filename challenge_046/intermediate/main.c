#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define Max(a, b) ((a) > (b) ? (a) : (b))
#define BLOCKS 8

int * getRange(int, int);
int pickNumber(int, int);
int isSorted(int *, int);
void removeItem(int *, int, int);
int removeRandom(int *, int);
int randomInsert(void);
double getChance(int);
int fill(int, int *, int);
int hasOtherNumber(int *, int);
int findLargerIndex(int, int *, int);
int findSmallerIndex(int, int *, int);
int getMatchingIndex(int *, int, int, int);
int getInsertIndex(int, int *, int, int *, int);
int optimizedInsert(void);
double getOptimizedChance(int);

int main(void) {

    srand(time(NULL));

    //printf("Win Rate: %%%0.2f\n", getChance(1000000) * 100);

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

int fill(int toFill, int * numbers, int total) {

    for(int i = 0; i < total; i++) {

        numbers[i] = toFill;
    }
}

int hasOtherNumber(int * insertions, int totalInsert) {

    for(int i = 0; i < totalInsert; i++) {

        if(insertions[i] != -1) {

            return 1;
        }
    }

    return 0;
}

int findLargerIndex(int toInsert, int * insertions, int totalInsert) {

    if(!hasOtherNumber(insertions, totalInsert)) {

        return toInsert;
    }

    for(int i = totalInsert - 1; i > 0; i--) {

        if(insertions[i] == -1 && insertions[i - 1] != -1 && toInsert > insertions[i - 1]) {

            return i;
        }
    }

    return -1;
}

int findSmallerIndex(int toInsert, int * insertions, int totalInsert) {

    if(!hasOtherNumber(insertions, totalInsert)) {

        return toInsert;
    }

    for(int i = 0; i < totalInsert - 1; i++) {

        if(insertions[i] == -1 && toInsert < insertions[i + 1]) {

            return i;
        }
    }

    return -1;
}

int getMatchingIndex(int * indexes, int totalIndex, int start, int end) {

    for(int i = 0; i < totalIndex; i++) {

        if(indexes[i] >= start && indexes[i] <= end) {

            return indexes[i];
        }
    }

    return -1;
}

int getInsertIndex(int toInsert, int * indexes, int totalIndex, int * insertions, int totalInsert) {

    const int smallerIndex = findSmallerIndex(toInsert, insertions, totalInsert);
    const int largerIndex = findLargerIndex(toInsert, insertions, totalInsert);

    if(smallerIndex == -1 && smallerIndex == largerIndex) {

        return -1;
    }

    if(smallerIndex != largerIndex && (smallerIndex == -1 || largerIndex == -1)) {

        if(smallerIndex == -1) {

            return getMatchingIndex(indexes, totalIndex, largerIndex, totalInsert - 1);
        }

        return getMatchingIndex(indexes, totalIndex, 0, smallerIndex);
    }

    return smallerIndex >= largerIndex ?
        getMatchingIndex(indexes, totalIndex, smallerIndex, largerIndex) : -1;
}

int optimizedInsert(void) {

    int *indexes = getRange(0, BLOCKS);
    int insertions[BLOCKS];
    fill(-1, insertions, BLOCKS);

    for(int i = 0; i < BLOCKS; i++) {

        const int digit = pickNumber(0, 9);
        const int index = getInsertIndex(digit, indexes, BLOCKS - i, insertions, BLOCKS);

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