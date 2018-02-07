#include <stdio.h>
#include <stdlib.h>

#include "book.h"
#include "bookshelf.h"

struct bookshelf createBookshelf(int width) {

    struct bookshelf bookshelf;

    bookshelf.width = width;
    bookshelf.booksOnShelf = 0;
    bookshelf.books = (struct book *)malloc(10 * sizeof(struct book));

    return bookshelf;
}

void addBook(struct bookshelf * bookshelf, struct book book) {

    if(bookshelf->books) {

        *(bookshelf->books + bookshelf->booksOnShelf++) = book;
    }
}