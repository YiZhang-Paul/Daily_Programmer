#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void fill(int *, int, int);
void setRow(int *, int);
void setColumn(int *, int);
void setDimension(char *, int, int, int *);
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

//fill array with given value
void fill(int * array, int length, int number) {

    for(int i = 0; i < length; i++) {

        array[i] = number;
    }
}

//set min/max row for cropping
void setRow(int * dimension, int row) {

    if(dimension[0] == -1) {

        dimension[0] = row;
    }

    dimension[1] = row;
}

//set min/max column for cropping
void setColumn(int * dimension, int column) {

    if(dimension[2] == -1 || column < dimension[2]) {

        dimension[2] = column;
    }

    dimension[3] = column;
}

void setDimension(char * matrix, int rows, int columns, int * dimension) {

    fill(dimension, 4, -1);

    for(int i = 0; i < rows; i++) {

        for(int j = 0; j < columns; j++) {

            if(matrix[i * columns + j] == '1') {

                setRow(dimension, i);
                setColumn(dimension, j);
            }
        }
    }
}

char * cropMatrix(char * matrix, int rows, int columns, int * subRows, int * subColumns) {

    int dimension[4];
    setDimension(matrix, rows, columns, dimension);
    *subRows = dimension[1] - dimension[0] + 1;
    *subColumns = dimension[3] - dimension[2] + 1;
    char *cropped = malloc(*subRows * *subColumns + 1);
    //copy cropped portion
    for(int i = 0; i < *subRows; i++) {

        for(int j = 0; j < *subColumns; j++) {

            const int newIndex = *subColumns * i + j;
            const int oldIndex = (dimension[0] + i) * columns + dimension[2] + j;
            cropped[newIndex] = matrix[oldIndex];
        }
    }

    cropped[*subRows * *subColumns + 1] = '\0';

    return cropped;
}

void printMatrix(char * matrix, int rows, int columns) {

    for(int i = 0; i < rows; i++) {

        for(int j = 0; j < columns; j++) {

            printf("%c", matrix[i * columns + j]);
        }

        printf("\n");
    }
}