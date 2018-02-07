#ifndef BOOKSHELF_H
#define BOOKSHELF_H

#include "book.h"

struct bookshelf {

    int width;
    int booksOnShelf;
    struct book * books;
};

struct bookshelf createBookshelf(int);
void addBook(struct bookshelf *, struct book);

#endif