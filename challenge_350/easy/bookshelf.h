#ifndef BOOKSHELF_H
#define BOOKSHELF_H

#include "book.h"

struct bookshelf {

    int width;
    int booksOnShelf;
    struct book * books;
};

struct bookshelf createBookshelf(int);
int getRemainSpace(struct bookshelf *);
int canAddBook(struct bookshelf *, struct book);
void addBook(struct bookshelf *, struct book);

#endif