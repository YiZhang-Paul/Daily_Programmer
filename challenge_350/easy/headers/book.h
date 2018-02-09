#ifndef BOOK_H
#define BOOK_H

#define TITLE_LENGTH 40

struct book {

    int width;
    char * title;
};

struct book createBook(int, char *);
void createBooks(char **, struct book *, int);
void freeBook(struct book *);
void freeBooks(struct book *, int);

#endif