#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "book.h"
#include "bookshelf.h"
#include "utility.h"

struct bookshelf * createShelves(int * widths, int total);
void freeShelves(struct bookshelf *, total);

int main(void) {

    return 0;
}

struct bookshelf * createShelves(int * widths, int total) {

    struct bookshelf * shelves = (struct bookshelf *)malloc(total * sizeof(struct bookshelf));

    for(int i = 0; i < total; i++) {

        shelves[i] = createBookshelf(widths[i]);
    }

    return shelves;
}

void freeShelves(struct bookshelf * shelves, int total) {

    for(int i = 0; i < total; i++) {

        freeBookshelf(&shelves[i]);
    }

    free(shelves);
}