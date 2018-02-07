#include <stdlib.h>
#include <string.h>

#include "book.h"

struct book createBook(int width, char * title) {

    struct book book;

    book.width = width;
    book.title = (char *)malloc(35);

    if(book.title) {

        strcpy(book.title, title);
    }

    return book;
}

void freeBook(struct book * book) {

    free(book->title);
}