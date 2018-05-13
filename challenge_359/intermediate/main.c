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

int maxLength(char * fileName) {

    FILE *file = fopen(fileName, "r");
    int max = 0;

    if(file) {

        char line[LINE_LENGTH];

        while(!feof(file)) {

            fgets(line, LINE_LENGTH, file);
            max = MAX(max, strlen(line));
        }
    }

    fclose(file);

    return max;
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

bool isParagraph(char * previous, char * current, int maxLength) {

    if(!ispunct(previous[lastCharacter(previous)])) {

        return false;
    }

    return strlen(previous) + firstWordLength(current) + 1 < maxLength;
}

void unwrap(char * inputFile, char * outputFile) {

    const int length = maxLength(inputFile);
    FILE *input = fopen(inputFile, "r");
    FILE *output = fopen(outputFile, "w");

    if(input) {

        char previous[LINE_LENGTH];
        char current[LINE_LENGTH];
        fgets(previous, LINE_LENGTH, input);
        fprintf(output, "%s", previous);

        while(!feof(input)) {

            fgets(current, LINE_LENGTH, input);
            const bool newLine = isParagraph(previous, current, length);
            fprintf(output, newLine ? "\n%s" : "%s", current);
            memcpy(previous, current, strlen(current) + 1);
        }
    }

    fclose(input);
    fclose(output);
}