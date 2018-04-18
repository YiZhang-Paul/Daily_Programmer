#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

void fill(int *, int, int);
bool isMinColumn(int, int);
void getCropSize(char *, int, int, int *);
char * getSubMatrix(char *, int, int, int *);
void printMatrix(char *, int, int);

int main(void) {

    char *matrix = "00000000000000000000000000000000000001100111000000000011110100000000011001110000000001101110000000000000001100000000101000010000000000000000000000000000000000000000000000000000";
    int sizes[4];

    getCropSize(matrix, 11, strlen(matrix) / 11, sizes);
    printMatrix(matrix, 11, strlen(matrix) / 11);

    char *subMatrix = getSubMatrix(matrix, 11, strlen(matrix) / 11, sizes);
    printMatrix(subMatrix, sizes[1] - sizes[0] + 1, sizes[3] - sizes[2] + 1);

    return 0;
}

void fill(int * array, int length, int number) {

    for(int i = 0; i < length; i++) {

        array[i] = number;
    }
}

bool isMinColumn(int min, int current) {

    return min == -1 || current < min;
}

void getCropSize(char * matrix, int rows, int columns, int * sizes) {

    fill(sizes, 4, -1);

    for(int i = 0; i < rows; i++) {

        for(int j = 0; j < columns; j++) {

            const char value = matrix[i * columns + j];

            if(value != '1') {

                continue;
            }

            sizes[0] = sizes[0] == -1 ? i : sizes[0];
            sizes[1] = i;
            sizes[2] = isMinColumn(sizes[2], j) ? j : sizes[2];
            sizes[3] = j;
        }
    }
}

char * getSubMatrix(char * matrix, int rows, int columns, int * sizes) {

    const int subRows = sizes[1] - sizes[0] + 1;
    const int subColumns = sizes[3] - sizes[2] + 1;
    char *subMatrix = malloc(subRows * subColumns + 1);

    for(int i = 0; i < subRows; i++) {

        for(int j = 0; j < subColumns; j++) {

            subMatrix[i * subColumns + j] = matrix[columns * (sizes[0] + i) + (sizes[2] + j)];
        }
    }

    subMatrix[subRows * subColumns + 1] = '\0';

    return subMatrix;
}

void printMatrix(char * matrix, int rows, int columns) {

    for(int i = 0; i < rows; i++) {

        for(int j = 0; j < columns; j++) {

            printf("%c", matrix[i * columns + j]);
        }

        printf("\n");
    }
}