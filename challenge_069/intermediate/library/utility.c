#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include "../header/utility.h"

char * copy(char * text) {

    char *copied = malloc(strlen(text) + 1);

    return strcpy(copied, text);
}

//find index of first element found with given value
int findIndex(char * text, char character) {

    for(int i = 0; i < strlen(text); i++) {

        if(character == text[i]) {

            return i;
        }
    }

    return -1;
}

static int compare(const void * a, const void * b) {

    return *(char *)a - *(char *)b;
}

//sort characters in text from lowest to highest ASCII value
char * sortText(char * text) {

    char *sorted = copy(text);
    qsort(sorted, strlen(sorted), 1, compare);

    return sorted;
}

//change 'j' or 'J' to 'I' and all other characters to uppercase
char formatCharacter(char character) {

    const char uppercase = toupper(character);

    return uppercase == 'J' ? 'I' : uppercase;
}

//change plain text so that it only contains letters from ciphertext alphabet
char * formatText(char * text) {

    char *formatted = copy(text);

    for(int i = 0; i < strlen(formatted); i++) {

        if(isalpha(formatted[i])) {

            formatted[i] = formatCharacter(formatted[i]);
        }
    }

    return formatted;
}

//copy given column on a table to given column on another table
void copyColumn(char * target, char * source, int to, int from, int rows) {

    const int columns = strlen(source) / rows;

    for(int i = 0; i < rows; i++) {

        target[to] = source[from];
        to += columns;
        from += columns;
    }
}