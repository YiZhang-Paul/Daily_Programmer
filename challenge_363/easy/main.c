#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

bool isValidIndex(int, int);
bool checkEI(char *, int, int);
bool checkIE(char *, int, int);
bool isValidI(char *, int, int);
bool isValidWord(char *);

int main(void) {

    printf("%d\n", isValidWord("a"));
    printf("%d\n", isValidWord("zombie"));
    printf("%d\n", isValidWord("transceiver"));
    printf("%d\n", isValidWord("veil"));
    printf("%d\n", isValidWord("icier"));

    return 0;
}

bool isValidIndex(int index, int length) {

    return index >= 0 && index < length;
}

bool checkEI(char * word, int index, int length) {

    if(!isValidIndex(index - 1, length) || word[index - 1] != 'e') {

        return true;
    }

    return isValidIndex(index - 2, length) && word[index - 2] == 'c';
}

bool checkIE(char * word, int index, int length) {

    if(!isValidIndex(index + 1, length) || word[index + 1] != 'e') {

        return true;
    }

    return !isValidIndex(index - 1, length) || word[index - 1] != 'c';
}

bool isValidI(char * word, int index, int length) {

    return checkEI(word, index, length) && checkIE(word, index, length);
}

bool isValidWord(char * word) {

    const int length = strlen(word);

    for(int i = 0; i < length; i++) {

        if(word[i] == 'i' && !isValidI(word, i, length)) {

            return false;
        }
    }

    return true;
}