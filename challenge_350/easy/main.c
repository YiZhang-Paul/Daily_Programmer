#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "book.h"
#include "bookshelf.h"

#define LINE_LENGTH 128

char ** readLines(char *, int, int);

int main(void) {

    char **lines = readLines("input1.txt", 2, 5);

    return 0;
}

char ** readLines(char * url, int start, int total) {

    FILE *file = fopen(url, "r");
    char **lines = (char **)malloc(total * sizeof(char *));

    if(file) {

        int lineCount = 1;
        char *line = (char *)malloc(LINE_LENGTH);

        while(fgets(line, LINE_LENGTH, file)) {

            if(lineCount >= start && lineCount < start + total) {

                lines[lineCount - start] = (char *)malloc(LINE_LENGTH);
                strcpy(lines[lineCount - start], line);
            }

            lineCount++;
        }

        free(line);
    }

    fclose(file);

    return lines;
}