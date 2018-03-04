#include <stdlib.h>
#include <string.h>
#include "../header/encoder.h"

#define KEYS "ADFGVX"
#define FILLER "FGFADF"

/**
 * note on fraction text table:
 *
 *          A D F G V X
 *        +------------
 *      A | R 3 F L M X
 *      D | 7 K W Q 6 9
 *      F | D 4 Y 5 N O
 *      G | Z   S T V 2
 *      V | E H 8 A P 1
 *      X | I C B G U 0
 *
 * an example of fraction text table is shown above.
 * each character is referred by first identifying
 * containing row, then columns.
 *
 * e.g. 'B' is on 6th row (X row, index 5), 3rd column (F column, index 2);
 * therefore, 'B' is referred as XF.
 */

static char * getFractionText(char * alphabet, char character) {

    char *fractionText = malloc(3);
    const int index = findIndex(alphabet, character);

    fractionText[0] = KEYS[index / strlen(KEYS)]; //containing row
    fractionText[1] = KEYS[index % strlen(KEYS)]; //containing column
    fractionText[2] = '\0';

    return fractionText;
}

//fill unoccupied cells of a table with random letters
static char * fillEmptyCells(char * table, int total) {

    const int occupiedCells = strlen(table);

    for(int i = occupiedCells; i < total; i++) {

        table[i] = FILLER[(i - occupiedCells) % strlen(FILLER)];
    }

    table[total] = '\0';

    return table;
}

static char * getFractionTable(char * text, char * alphabet, char * keyword) {

    const int columns = strlen(keyword);
    const int totalLetters = strlen(text);
    const int rows = totalLetters * 2 / columns + 1;
    const int totalCells = rows * columns;
    char *table = malloc(totalCells + 1);
    //concat all fraction text to table
    for(int i = 0, j = 0; i < totalLetters; i++) {

        char *fractionText = getFractionText(alphabet, text[i]);
        table[j++] = fractionText[0];
        table[j++] = fractionText[1];

        free(fractionText);
    }

    table[totalLetters * 2] = '\0';
    //fill unoccupied cells with random letters
    return fillEmptyCells(table, totalCells);
}

/**
 * sort fraction table by column corresponding to
 * letters in keyword ordered ascendingly
 */
static char * sortTable(char * table, char * keyword) {

    const int totalCells = strlen(table);
    const int rows = totalCells / strlen(keyword);
    char *sortedTable = malloc(totalCells + 1);
    char *keywordCopy = copy(keyword);
    char *sortedKeyword = sortText(keyword);

    for(int i = 0; i < strlen(sortedKeyword); i++) {

        const int column = findIndex(keywordCopy, sortedKeyword[i]);
        copyColumn(sortedTable, table, i, column, rows);
        keywordCopy[column] = ' ';
    }

    sortedTable[totalCells] = '\0';

    free(keywordCopy);
    free(sortedKeyword);

    return sortedTable;
}

char * encode(char * text, char * alphabet, char * keyword) {
    //retrieve sorted fraction table
    char *formatted = formatText(text);
    char *table = getFractionTable(formatted, alphabet, keyword);
    char *sortedTable = sortTable(table, keyword);
    const int columns = strlen(keyword);
    const int totalCells = strlen(sortedTable);
    char *encoded = malloc(totalCells + 1);

    for(int i = 0; i < totalCells; i++) {
        //read fraction table column by column
        const int index = i * columns;
        encoded[i] = sortedTable[index / totalCells + index % totalCells];
    }

    encoded[totalCells] = '\0';

    free(formatted);
    free(table);
    free(sortedTable);

    return encoded;
}