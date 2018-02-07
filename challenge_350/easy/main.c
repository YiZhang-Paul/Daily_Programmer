#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "book.h"
#include "bookshelf.h"
#include "utility.h"

struct bookshelf * createShelves(int *, int);
int compareShelves(const void *, const void *);
void sortShelves(struct bookshelf *, int);
void freeShelves(struct bookshelf *, int);

int main(void) {

    int widths[] = { 150, 150, 300, 150, 150 };
    struct bookshelf * shelves = createShelves(widths, sizeof(widths) / sizeof(int));
    sortShelves(shelves, sizeof(widths) / sizeof(int));

    return 0;
}

struct bookshelf * createShelves(int * widths, int total) {

    struct bookshelf * shelves = (struct bookshelf *)malloc(total * sizeof(struct bookshelf));

    for(int i = 0; i < total; i++) {

        shelves[i] = createBookshelf(widths[i]);
    }

    return shelves;
}

int compareShelves(const void * a, const void * b) {

    struct bookshelf *bookshelf1 = (struct bookshelf *)a;
    struct bookshelf *bookshelf2 = (struct bookshelf *)b;

    return bookshelf2->width - bookshelf1->width;
}

void sortShelves(struct bookshelf * shelves, int total) {

    qsort(shelves, total, sizeof(struct bookshelf), compareShelves);
}

void freeShelves(struct bookshelf * shelves, int total) {

    for(int i = 0; i < total; i++) {

        freeBookshelf(&shelves[i]);
    }

    free(shelves);
}