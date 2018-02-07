#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "book.h"
#include "bookshelf.h"

#define LINE_LENGTH 128

struct content {

    char **lines;
    int totalLines;
};

struct content readContent(char *, int, int);
void freeContent(struct content *);

int main(void) {

    struct content content = readContent("input1.txt", 2, 5);

    freeContent(&content);

    return 0;
}

struct content readContent(char * url, int start, int linesToRead) {

    FILE *file = fopen(url, "r");
    struct content content;
    content.lines = (char **)malloc(linesToRead * sizeof(char *));

    if(file) {

        int lineCount = 1;
        char *line = (char *)malloc(LINE_LENGTH);

        while(fgets(line, LINE_LENGTH, file)) {

            if(lineCount >= start && lineCount < start + linesToRead) {

                content.totalLines = lineCount - start + 1;
                content.lines[lineCount - start] = (char *)malloc(LINE_LENGTH);
                strcpy(content.lines[lineCount - start], line);
            }

            lineCount++;
        }

        free(line);
    }

    fclose(file);

    return content;
}

void freeContent(struct content * content) {

    for(int i = 0; i < content->totalLines; i++) {

        free(content->lines[i]);
    }

    free(content->lines);
}