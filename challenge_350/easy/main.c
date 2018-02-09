#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "headers/utility.h"

int main(void) {

    char **lines = readLines("input1.txt", 1, 1);
    int shelves[countNumbers(lines[0])];
    toNumbers(lines[0], shelves);
    sortNumbers(shelves, sizeof(shelves) / sizeof(int));

    for(int i = 0; i < sizeof(shelves) / sizeof(int); i++) {

        printf("%d\n", shelves[i]);
    }

    freeLines(lines, 1);

    return 0;
}