#include <stdlib.h>
#include <string.h>
#include "../header/decoder.h"

#define KEYS "ADFGVX"

static char * toFractionTable(char * encoded, int rows) {

    const int totalCells = strlen(encoded);
    const int columns = totalCells / rows;
    char *table = malloc(totalCells + 1);

    for(int i = 0; i < totalCells; i++) {
        //convert rows into columns
        const int index = i * columns;
        table[index / totalCells + index % totalCells] = encoded[i];
    }

    table[totalCells] = '\0';

    return table;
}

//unsort fraction table by column according to letters in original keyword
static char * unsortTable(char * table, char * keyword) {

    const int totalCells = strlen(table);
    const int rows = totalCells / strlen(keyword);
    char *sortedKeyword = sortText(keyword);
    char *unsortedTable = malloc(totalCells + 1);

    for(int i = 0; i < strlen(keyword); i++) {

        const int column = findIndex(sortedKeyword, keyword[i]);
        copyColumn(unsortedTable, table, i, column, rows);
        sortedKeyword[column] = ' ';
    }

    unsortedTable[totalCells] = '\0';

    free(sortedKeyword);

    return unsortedTable;
}

//read character from fraction table
static char getCharacter(char rowLabel, char columnLabel, char * alphabet) {

    const int row = findIndex(KEYS, rowLabel);
    const int column = findIndex(KEYS, columnLabel);

    return alphabet[row * strlen(KEYS) + column];
}

char * decode(char * encoded, char * alphabet, char * keyword) {
    //retrieve unsorted fraction table
    char *sortedTable = toFractionTable(encoded, strlen(encoded) / strlen(keyword));
    char *unsortedTable = unsortTable(sortedTable, keyword);
    const int totalCells = strlen(unsortedTable);
    char *decoded = malloc(totalCells / 2 + 1);

    for(int i = 0, j = 0; i < totalCells; i += 2, j++) {
        //read decoded letters from fraction table
        decoded[j] = getCharacter(unsortedTable[i], unsortedTable[i + 1], alphabet);
    }

    decoded[totalCells / 2] = '\0';

    free(sortedTable);
    free(unsortedTable);

    return decoded;
}