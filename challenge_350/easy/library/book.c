#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "../headers/book.h"

struct book createBook(int width, char * title) {

    struct book book;

    book.width = width;
    book.title = (char *)malloc(TITLE_LENGTH);
    strcpy(book.title, title);

    return book;
}

void createBooks(char ** information, struct book * books, int total) {

    const char *delimiter = " ";

    for(int i = 0; i < total; i++) {

        char *token = strtok(information[i], delimiter);
        books[i] = createBook(atoi(token), information[i] + strlen(token) + 1);
    }
}

void freeBook(struct book * book) {

    free(book->title);
}

void freeBooks(struct book * books, int total) {

    for(int i = 0; i < total; i++) {

        freeBook(&books[i]);
    }
}