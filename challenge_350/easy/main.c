#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "book.h"
#include "bookshelf.h"
#include "utility.h"

struct bookshelf * createShelves(int *, int);
struct book * createBooks(char **, int);
int compareShelves(const void *, const void *);
void sortShelves(struct bookshelf *, int);
void freeShelves(struct bookshelf *, int);
void freeBooks(struct book *, int);

int main(void) {

    struct bookshelf * shelves;
    struct book * books;

    //create all shelves with given widths, from maximum to minimum width
    const int totalShelves = countNumbers(readLines("input1.txt", 1, 1)[0]);
    int shelfWidths[totalShelves];
    toNumbers(readLines("input1.txt", 1, 1)[0], shelfWidths);
    shelves = createShelves(shelfWidths, totalShelves);
    sortShelves(shelves, totalShelves);

    //create all books with given information
    const int totalBooks = countLines("input1.txt") - 1;
    char ** information = readLines("input1.txt", 2, totalBooks);
    books = createBooks(information, totalBooks);

    return 0;
}

struct bookshelf * createShelves(int * widths, int total) {

    struct bookshelf * shelves = (struct bookshelf *)malloc(total * sizeof(struct bookshelf));

    for(int i = 0; i < total; i++) {

        shelves[i] = createBookshelf(widths[i]);
    }

    return shelves;
}

struct book * createBooks(char ** information, int total) {

    struct book * books = (struct book *)malloc(total * sizeof(struct book));
    const char *delimiter = " ";

    for(int i = 0; i < total; i++) {

        char *token = strtok(information[i], delimiter);
        books[i] = createBook(atoi(token), information[i] + strlen(token) + 1);
    }

    return books;
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

void freeBooks(struct book * books, int total) {

    for(int i = 0; i < total; i++) {

        freeBook(&books[i]);
    }

    free(books);
}