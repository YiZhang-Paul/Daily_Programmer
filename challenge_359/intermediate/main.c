#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include <ctype.h>

#define LINE_LENGTH 256
#define INPUT_FILE "input.txt"
#define OUTPUT_FILE "output.txt"
#define MAX(a, b) ((a) > (b) ? (a) : (b))

int maxLength(char *);
int firstCharacter(char *);
int lastCharacter(char *);
int firstWordLength(char *);
bool isParagraph(char *, char *, int);
void unwrap(char *, char *);

int main(void) {

    unwrap(INPUT_FILE, OUTPUT_FILE);

    return 0;
}

int maxLength(char * input) {

    FILE *file = fopen(input, "r");
    int length = 0;

    if(file) {

        char line[LINE_LENGTH];

        while(!feof(file)) {

            fgets(line, LINE_LENGTH, file);
            length = MAX(length, strlen(line));
        }
    }

    fclose(file);

    return length;
}

int firstCharacter(char * line) {

    for(int i = 0; i < strlen(line); i++) {

        if(isgraph(line[i])) {

            return i;
        }
    }

    return -1;
}

int lastCharacter(char * line) {

    for(int i = strlen(line) - 1; i >= 0; i--) {

        if(isgraph(line[i])) {

            return i;
        }
    }

    return -1;
}

int firstWordLength(char * line) {

    const int start = firstCharacter(line);

    for(int i = start; i < strlen(line); i++) {

        if(!isgraph(line[i]) || i == strlen(line) - 1) {

            return i - start + (isgraph(line[i]) ? 1 : 0);
        }
    }

    return 0;
}

bool isParagraph(char * last, char * current, int maxLength) {

    if(!ispunct(last[lastCharacter(last)])) {

        return false;
    }

    return strlen(last) + 1 + firstWordLength(current) < maxLength;
}

void unwrap(char * input, char * output) {

    const int length = maxLength(input);
    FILE *inputFile = fopen(input, "r");
    FILE *outputFile = fopen(output, "w");

    if(inputFile) {

        char last[LINE_LENGTH];
        char current[LINE_LENGTH];
        fgets(last, LINE_LENGTH, inputFile);
        fprintf(outputFile, "%s", last);

        while(!feof(inputFile)) {

            fgets(current, LINE_LENGTH, inputFile);
            const bool newLine = isParagraph(last, current, length);
            fprintf(outputFile, newLine ? "\n%s" : "%s", current);
            memcpy(last, current, strlen(current) + 1);
        }
    }

    fclose(inputFile);
    fclose(outputFile);
}