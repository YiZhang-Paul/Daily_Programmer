#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "../headers/utility.h"

int countLines(char * url) {

    int total = 0;
    FILE *file = fopen(url, "r");

    if(file) {

        int character = fgetc(file);

        while(character != EOF) {

            if(character == '\n') {

                total++;
            }

            character = fgetc(file);
        }

        if(character != '\n' && total != 0) {

            total++;
        }
    }

    fclose(file);

    return total;
}

char ** readLines(char * url, int start, int total) {

    char **lines = (char **)malloc(total * sizeof(char *));
    FILE *file = fopen(url, "r");

    if(file) {

        int currentLine = 1;
        char *line = (char *)malloc(LINE_LENGTH);

        while(fgets(line, LINE_LENGTH, file)) {

            if(currentLine >= start && currentLine < start + total) {

                lines[currentLine - start] = (char *)malloc(LINE_LENGTH);
                strcpy(lines[currentLine - start], line);
            }

            currentLine++;
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

char * copyString(char * input) {

    char *copy = (char *)malloc(strlen(input));

    return strcpy(copy, input);
}

int countNumbers(char * input) {

    int total = 0;
    const char *delimiter = " ";
    char *copy = copyString(input);
    char *token = strtok(copy, delimiter);

    while(token != NULL) {

        total++;
        token = strtok(NULL, delimiter);
    }

    free(copy);

    return total;
}

void toNumbers(char * input, int * output) {

    int total = 0;
    const char *delimiter = " ";
    char *copy = copyString(input);
    char *token = strtok(copy, delimiter);

    while(token != NULL) {

        output[total++] = atoi(token);
        token = strtok(NULL, delimiter);
    }

    free(copy);
}

int compare(const void * a, const void * b) {

    int *numberA = (int *)a;
    int *numberB = (int *)b;

    return *numberA - *numberB;
}

void sortNumbers(int * numbers, int total) {

    qsort(numbers, total, sizeof(int), compare);
}