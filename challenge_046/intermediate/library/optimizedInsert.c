#include <stdlib.h>
#include "../header/utility.h"
#include "../header/optimizedInsert.h"

static int countEmptyOnLeft(int * slots, int index) {

    int empty = 0;

    for(int i = 0; i < index; i++) {

        empty += slots[i] == EMPTY_SLOT ? 1 : 0;
    }

    return empty;
}

static int countEmptyOnRight(int * slots, int totalSlots, int index) {

    int empty = 0;

    for(int i = index + 1; i < totalSlots; i++) {

        empty += slots[i] == EMPTY_SLOT ? 1 : 0;
    }

    return empty;
}

static int getInsertIndexToLeft(int * slots, int index) {

    for(int i = index; i >= 0; i--) {

        if(slots[i] == EMPTY_SLOT) {

            return i;
        }
    }

    return NOT_FOUND;
}

static int getInsertIndexToRight(int * slots, int totalSlots, int index) {

    for(int i = index; i < totalSlots; i++) {

        if(slots[i] == EMPTY_SLOT) {

            return i;
        }
    }

    return NOT_FOUND;
}

static int getInsertIndex(int toInsert, int * indexes, int totalIndex, int * slots, int totalSlots) {

    int index = findIndex(slots, toInsert, totalSlots);

    if(index == -1) {

        return indexes[totalIndex * toInsert / (9 - 0 + 1)];
    }

    const int emptyOnLeft = countEmptyOnLeft(slots, index);
    const int emptyOnRight = countEmptyOnRight(slots, totalSlots, index);

    if(emptyOnLeft == emptyOnRight) {

        return toInsert < 5 ?
            getInsertIndexToLeft(slots, index) :
            getInsertIndexToRight(slots, totalSlots, index);
    }

    return emptyOnLeft > emptyOnRight ?
        getInsertIndexToLeft(slots, index) :
        getInsertIndexToRight(slots, totalSlots, index);
}

static int optimizedInsert(int blocks) {

    int *indexes = getRange(0, blocks);
    int slots[blocks];
    fill(EMPTY_SLOT, slots, blocks);

    for(int i = 0; i < blocks; i++) {

        const int digit = getRandom(0, 9);
        const int index = getInsertIndex(digit, indexes, blocks - i, slots, blocks);
        removeItem(indexes, index, blocks - i);

        if(index == NOT_FOUND) {

            free(indexes);

            return 0;
        }

        slots[index] = digit;
    }

    free(indexes);

    return isSorted(slots, blocks);
}

double getOptimizedChance(int simulations, int blocks) {

    int wins = 0;

    for(int i = 0; i < simulations; i++) {

        wins += optimizedInsert(blocks);
    }

    return wins / (double)simulations;
}