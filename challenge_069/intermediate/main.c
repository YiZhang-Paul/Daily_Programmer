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
int compare(const void *, const void *);
char * sortText(char *);
void copyColumn(char *, char *, int, int, int);
char * sortTable(char *, char *);
char * encode(char *, char *, char *);

int main(void) {

    char text[] = "Brake me out of jail on the 21st";
    char substitution[] = "R3FLMX7KWQ69D4Y5NOZ STV2EH8AP1ICBGU0";
    char transposition[] = "PROGRAMMER";

    char *encoded = encode(text, substitution, transposition);

    printf("%s\n", encoded);

    free(encoded);

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

    for(int i = 0, j = 0; i < strlen(text); i++) {

        char *key = getKey(substitution, text[i]);
        table[j++] = key[0];
        table[j++] = key[1];

        free(key);
    }

    table[strlen(text) * 2] = '\0';

    return fillRandom(table, rows * columns);
}

int compare(const void * a, const void * b) {

    return *(char *)a - *(char *)b;
}

char * sortText(char * text) {

    char *sorted = copy(text);
    qsort(sorted, strlen(sorted), 1, compare);

    return sorted;
}

void copyColumn(char * destination, char * source, int destinationIndex, int sourceIndex, int rows) {

    const int columns = strlen(source) / rows;

    for(int i = 0; i < rows; i++) {

        destination[destinationIndex] = source[sourceIndex];
        destinationIndex += columns;
        sourceIndex += columns;
    }
}

char * sortTable(char * table, char * transposition) {

    char *sortedTable = malloc(strlen(table) + 1);
    char *keysCopy = copy(transposition);
    char *sortedKeys = sortText(transposition);

    for(int i = 0; i < strlen(sortedKeys); i++) {

        const int index = findIndex(keysCopy, sortedKeys[i]);
        copyColumn(sortedTable, table, i, index, strlen(table) / strlen(transposition));
        keysCopy[index] = ' ';
    }

    sortedTable[strlen(table)] = '\0';

    free(keysCopy);
    free(sortedKeys);

    return sortedTable;
}

char * encode(char * text, char * substitution, char * transposition) {

    char *formatted = formatText(text);
    char *table = getTable(formatted, substitution, transposition);
    char *sortedTable = sortTable(table, transposition);
    char *encoded = malloc(strlen(sortedTable) + 1);
    const int columns = strlen(transposition);
    const int rows = strlen(sortedTable) / columns;

    for(int i = 0, total = rows * columns; i < strlen(sortedTable); i++) {

        const int index = i * columns;
        encoded[i] = sortedTable[index / total + index % total];
    }

    encoded[rows * columns] = '\0';

    free(formatted);
    free(table);
    free(sortedTable);

    return encoded;
}