#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

#define INPUT_FILE "input.txt"
#define LINE_LENGTH 256

bool hasIndex(int, int);
bool checkEAndI(char *, int, int);
bool checkIAndE(char *, int, int);
bool isValidIndex(char *, int, int);
bool isValidWord(char *);
void countValidWord(char *, int *, int *);

int main(void) {

    int valid = 0;
    int invalid = 0;
    countValidWord(INPUT_FILE, &valid, &invalid);
    printf("Valid Words: %d; Invalid Words: %d", valid, invalid);

    return 0;
}

bool hasIndex(int index, int length) {

    return index >= 0 && index < length;
}

bool checkEAndI(char * word, int index, int length) {

    if(!hasIndex(index - 1, length) || word[index - 1] != 'e') {

        return true;
    }

    return hasIndex(index - 2, length) && word[index - 2] == 'c';
}

bool checkIAndE(char * word, int index, int length) {

    if(!hasIndex(index + 1, length) || word[index + 1] != 'e') {

        return true;
    }

    return !hasIndex(index - 1, length) || word[index - 1] != 'c';
}

bool isValidIndex(char * word, int index, int length) {

    return checkEAndI(word, index, length) && checkIAndE(word, index, length);
}

bool isValidWord(char * word) {

    const int length = strlen(word);

    for(int i = 0; i < length; i++) {

        if(word[i] == 'i' && !isValidIndex(word, i, length)) {

            return false;
        }
    }

    return true;
}

void countValidWord(char * fileName, int * valid, int * invalid) {

    *valid = 0;
    *invalid = 0;
    FILE *file = fopen(fileName, "r");

    if(file) {

        char line[LINE_LENGTH];

        while(!feof(file)) {

            fgets(line, LINE_LENGTH, file);
            const bool result = isValidWord(line);
            *valid += result ? 1 : 0;
            *invalid += result ? 0 : 1;
        }
    }

    fclose(file);
}