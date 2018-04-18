#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

#define ROWS 4096
#define COLUMNS 4096
#define LINE_LENGTH 256

int grid[ROWS][COLUMNS];

void initialize(void);
void processInput(char *);
int mixColor(char, int, int);
void setColor(char, int, int, int, int);
int countColor(int);

int main(void) {

    initialize();
    processInput("input0.txt");
    printf("%d\n", countColor(3));

    initialize();
    processInput("input1.txt");
    printf("%d\n", countColor(3));

    initialize();
    processInput("input2.txt");
    printf("%d\n", countColor(3));

    initialize();
    processInput("input3.txt");
    printf("%d\n", countColor(3));

    return 0;
}

void initialize(void) {

    for(int i = 0; i < ROWS; i++) {

        for(int j = 0; j < COLUMNS; j++) {

            grid[i][j] = 0;
        }
    }
}

void processInput(char * url) {

    FILE *file = fopen(url, "r");
    char *line = malloc(LINE_LENGTH);

    if(file) {

        line = fgets(line, LINE_LENGTH, file);
        const int total = atoi(line);

        for(int i = 0; i < total; i++) {

            if(feof(file)) {

                break;
            }

            char color;
            int row;
            int column;
            int height;
            int width;

            fscanf(file, "%c %d %d %d %d", &color, &row, &column, &height, &width);
            setColor(color, row, column, height, width);
            line = fgets(line, LINE_LENGTH, file);
        }
    }

    free(line);
    fclose(file);
}

int mixColor(char color, int row, int column) {

    const int current = color == 'R' ? 1 : 2;

    if(grid[row][column] == 0) {

        return current;
    }

    return grid[row][column] == current ? current : 3;
}

void setColor(char color, int row, int column, int height, int width) {

    for(int i = 0; i < height; i++) {

        for(int j = 0; j < width; j++) {

            const int currentRow = row + i;
            const int currentColumn = column + j;
            grid[currentRow][currentColumn] = mixColor(color, currentRow, currentColumn);
        }
    }
}

int countColor(int color) {

    int total = 0;

    for(int i = 0; i < ROWS; i++) {

        for(int j = 0; j < COLUMNS; j++) {

            if(grid[i][j] == color) {

                total++;
            }
        }
    }

    return total;
}