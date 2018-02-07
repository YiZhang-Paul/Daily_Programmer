#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "book.h"
#include "bookshelf.h"

#define LINE_LENGTH 256

char ** readLines(char *, int, int);
struct bookshelf * getBookShelves(char *);

int main(void) {

    getBookShelves("input1.txt");
    char **lines = readLines("input1.txt", 1, 1);

    int i = 1;

    return 0;
}

char ** readLines(char * url, int start, int total) {

    FILE *file = fopen(url, "r");
    char **lines = (char **)malloc(total * LINE_LENGTH);

    if(file) {

        int lineCount = 1;
        char *line = (char *)malloc(LINE_LENGTH);

        while(fgets(line, LINE_LENGTH, file)) {

            if(lineCount >= start && lineCount < start + total) {

                lines[start - lineCount] = (char *)malloc(LINE_LENGTH);
                strcpy(lines[start - lineCount], line);
            }

            lineCount++;
        }
    }

    fclose(file);

    return lines;
}

struct bookshelf * getBookShelves(char * url) {

    FILE *file = fopen(url, "r");

    if(file) {

        char *line = (char *)malloc(LINE_LENGTH);

        if(line) {

            fgets(line, LINE_LENGTH, file);
        }
    }

    fclose(file);

    struct bookshelf * bookshelves;

    return bookshelves;
}