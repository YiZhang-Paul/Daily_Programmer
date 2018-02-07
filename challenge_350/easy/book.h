#ifndef BOOK_H
#define BOOK_H

struct book {

    int width;
    char *title;
};

struct book createBook(int, char *);
void freeBook(struct book *);

#endif