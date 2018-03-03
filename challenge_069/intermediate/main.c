#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

char * copy(char *);
char formatCharacter(char);
char * formatText(char *);
int findIndex(char *, char);
char * getKey(char *, char);
char * fillRandom(char *, int);
char * getTable(char *, char *, char *);

int main(void) {

    char text[] = "Brake me out of jail on the 21st";
    char substitution[] = "R3FLMX7KWQ69D4Y5NOZ STV2EH8AP1ICBGU0";
    char transposition[] = "PROGRAMMER";

    char *formatted = formatText(text);
    char *table = getTable(formatted, substitution, transposition);

    printf("%s\n", table);

    free(formatted);
    free(table);

    return 0;
}

char * copy(char * text) {

    char *copied = malloc(strlen(text) + 1);

    return strcpy(copied, text);
}

char formatCharacter(char character) {

    const char upperCased = toupper(character);

    return upperCased == 'J' ? 'I' : upperCased;
}

char * formatText(char * text) {

    char *formatted = copy(text);

    for(int i = 0; i < strlen(formatted); i++) {

        if(isalpha(formatted[i])) {

            formatted[i] = formatCharacter(formatted[i]);
        }
    }

    return formatted;
}

int findIndex(char * text, char character) {

    for(int i = 0; i < strlen(text); i++) {

        if(character == text[i]) {

            return i;
        }
    }

    return -1;
}

char * getKey(char * substitution, char character) {

    char *key = malloc(3);
    const int index = findIndex(substitution, character);
    const char keys[] = "ADFGVX";

    key[0] = keys[index / strlen(keys)];
    key[1] = keys[index % strlen(keys)];
    key[2] = '\0';

    return key;
}

char * fillRandom(char * table, int total) {

    const char filler[] = "FGFADF";
    const int tableLength = strlen(table);

    for(int i = tableLength; i < total; i++) {

        table[i] = filler[(i - tableLength) % strlen(filler)];
    }

    table[total] = '\0';

    return table;
}

char * getTable(char * text, char * substitution, char * transposition) {

    const int columns = strlen(transposition);
    const int rows = strlen(text) * 2 / columns + 1;
    char *table = malloc(rows * columns + 1);

    for(int i = 0, index = 0; i < strlen(text); i++) {

        char *key = getKey(substitution, text[i]);
        table[index++] = key[0];
        table[index++] = key[1];
        table[index] = key[2];

        free(key);
    }

    return fillRandom(table, rows * columns);
}