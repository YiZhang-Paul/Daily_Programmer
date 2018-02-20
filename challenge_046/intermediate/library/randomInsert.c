#include <stdlib.h>
#include "../header/utility.h"
#include "../header/randomInsert.h"

//remove random item in an array and return removed item
static int removeRandom(int * numbers, int total) {

    const int index = getRandom(0, total - 1);
    const int removed = numbers[index];
    removeIndex(numbers, index, total);

    return removed;
}

static int randomInsert(int blocks) {

    int *indexes = getRange(0, blocks);
    int slots[blocks];

    for(int i = 0; i < blocks; i++) {

        slots[removeRandom(indexes, blocks - i)] = getRandom(0, 9);
    }

    free(indexes);

    return isSorted(slots, blocks);
}

double getChance(int simulations, int blocks) {

    int wins = 0;

    for(int i = 0; i < simulations; i++) {

        wins += randomInsert(blocks);
    }

    return wins / (double)simulations;
}