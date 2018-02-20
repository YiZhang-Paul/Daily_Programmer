#include <stdlib.h>
#include "../header/utility.h"
#include "../header/randomInsert.h"

//get a range of numbers from m to m + n - 1
int * getRange(int start, int total) {

    int *range = (int *)malloc(total * sizeof(int));

    for(int i = 0; i < total; i++) {

        range[i] = start + i;
    }

    return range;
}

int getRandom(int min, int max) {

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

        const int sum = numbers[i] + numbers[i + 1];
        numbers[i] = sum - numbers[i];
        numbers[i + 1] = sum - numbers[i + 1];
    }
}

//remove first item found in an array with given value
void removeItem(int * numbers, int item, int total) {

    int index = findIndex(numbers, item, total);

    if(index != -1) {

        removeIndex(numbers, index, total);
    }
}

int fill(int toFill, int * numbers, int total) {

    for(int i = 0; i < total; i++) {

        numbers[i] = toFill;
    }
}