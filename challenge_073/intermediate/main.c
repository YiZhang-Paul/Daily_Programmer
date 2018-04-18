#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

void fill(int *, int, int);
void setMinRow(int *, int);
void setMinColumn(int *, int);
void setCropDimension(char *, int, int, int *);
char * getSubMatrix(char *, int, int *, int *, int *);
char * cropMatrix(char *, int, int, int *, int *);
void printMatrix(char *, int, int);

int main(void) {

    char *matrix = "00000000000000000000000000000000000001100111000000000011110100000000011001110000000001101110000000000000001100000000101000010000000000000000000000000000000000000000000000000000";
    int rows = 0;
    int columns = 0;
    char *cropped = cropMatrix(matrix, 11, strlen(matrix) / 11, &rows, &columns);
    printMatrix(cropped, rows, columns);

    free(cropped);

    return 0;
}

void fill(int * array, int length, int number) {

    for(int i = 0; i < length; i++) {

        array[i] = number;
    }
}

void setMinRow(int * current, int row) {

    if(*current == -1) {

        *current = row;
    }
}

void setMinColumn(int * current, int column) {

    if(*current == -1 || column < *current) {

        *current = column;
    }
}

void setCropDimension(char * matrix, int rows, int columns, int * dimension) {

    fill(dimension, 4, -1);

    for(int i = 0; i < rows; i++) {

        for(int j = 0; j < columns; j++) {

            if(matrix[i * columns + j] != '1') {

                continue;
            }

            setMinRow(&dimension[0], i);
            dimension[1] = i;
            setMinColumn(&dimension[2], j);
            dimension[3] = j;
        }
    }
}

char * getSubMatrix(char * matrix, int columns, int * dimension, int * subRows, int * subColumns) {

    *subRows = dimension[1] - dimension[0] + 1;
    *subColumns = dimension[3] - dimension[2] + 1;
    char *subMatrix = malloc(*subRows * *subColumns + 1);

    for(int i = 0; i < *subRows; i++) {

        for(int j = 0; j < *subColumns; j++) {

            const int newIndex = i * *subColumns + j;
            const int oldIndex = (dimension[0] + i) * columns + dimension[2] + j;
            subMatrix[newIndex] = matrix[oldIndex];
        }
    }

    subMatrix[*subRows * *subColumns + 1] = '\0';

    return subMatrix;
}

char * cropMatrix(char * matrix, int rows, int columns, int * subRows, int * subColumns) {

    int dimension[4];
    setCropDimension(matrix, rows, columns, dimension);

    return getSubMatrix(matrix, columns, dimension, subRows, subColumns);
}

void printMatrix(char * matrix, int rows, int columns) {

    for(int i = 0; i < rows; i++) {

        for(int j = 0; j < columns; j++) {

            printf("%c", matrix[i * columns + j]);
        }

        printf("\n");
    }
}