#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "utility.h"

int countNumbers(char * input) {

    int total = 0;
    const char *delimiter = " ";
    char *token = strtok(input, delimiter);

    while(token != NULL) {

        total++;
        token = strtok(NULL, delimiter);
    }

    return total;
}

void toNumbers(char * input, int * numbers) {

    int index = 0;
    const char *delimiter = " ";
    char *token = strtok(input, delimiter);

    while(token != NULL) {

        numbers[index++] = atoi(token);
        token = strtok(NULL, delimiter);
    }
}

int countLines(char * url) {

    int totalLines = 0;
    FILE *file = fopen(url, "r");

    if(file) {

        int character = fgetc(file);

        while(character != EOF) {

            if(character == '\n') {

                totalLines++;
            }

            character = fgetc(file);
        }

        if(character != '\n' && totalLines != 0) {

            totalLines++;
        }
    }

    fclose(file);

    return totalLines;
}

char ** readLines(char * url, int start, int linesToRead) {

    FILE *file = fopen(url, "r");
    char **lines = (char **)malloc(linesToRead * sizeof(char *));

    if(file) {

        int lineCount = 1;
        char *line = (char *)malloc(LINE_LENGTH);

        while(fgets(line, LINE_LENGTH, file)) {

            if(lineCount >= start && lineCount < start + linesToRead) {

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

void freeLines(char ** lines, int total) {

    for(int i = 0; i < total; i++) {

        free(lines[i]);
    }

    free(lines);
}