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

int getRemainSpace(struct bookshelf * bookshelf) {

    int space = bookshelf->width;

    for(int i = 0; i < bookshelf->booksOnShelf; i++) {

        space -= (*(bookshelf->books + i)).width;
    }

    return space;
}

int canAddBook(struct bookshelf * bookshelf, struct book * book) {

    return book->width <= getRemainSpace(bookshelf);
}

void addBook(struct bookshelf * bookshelf, struct book * book) {

    if(bookshelf->books) {

        *(bookshelf->books + bookshelf->booksOnShelf++) = *book;
    }
}

void freeBookshelf(struct bookshelf * bookshelf) {

    free(bookshelf->books);
}