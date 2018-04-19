#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <ctype.h>

#define LINE_LENGTH 256
#define ROWS 4096
#define COLUMNS 4096
#define EMPTY 0
#define RED 1
#define BLACK 2
#define PURPLE 3

int pixels[ROWS][COLUMNS];

void initialize(void);
void processLine(FILE *, int *);
void processFile(char *, int *);
int mixColor(char, int, int);
bool isPurple(int, int);
void setColor(char, int, int, int, int, int *);
int countOverlap(char *);

int main(void) {

    printf("%d\n", countOverlap("input0.txt"));
    printf("%d\n", countOverlap("input1.txt"));
    printf("%d\n", countOverlap("input2.txt"));
    printf("%d\n", countOverlap("input3.txt"));

    return 0;
}

void initialize(void) {

    for(int i = 0; i < ROWS; i++) {

        for(int j = 0; j < COLUMNS; j++) {

            pixels[i][j] = EMPTY;
        }
    }
}

//process one line of input representing a single filter
void processLine(FILE * file, int * overlaps) {

    char color;
    int row;
    int column;
    int height;
    int width;

    fscanf(file, "%c %d %d %d %d", &color, &row, &column, &height, &width);
    setColor(color, row, column, height, width, overlaps);
}

void processFile(char * url, int * overlaps) {

    FILE *file = fopen(url, "r");
    char *line = malloc(LINE_LENGTH);

    if(file) {

        line = fgets(line, LINE_LENGTH, file);
        const int total = atoi(line);

        for(int i = 0; i < total; i++) {

            if(feof(file)) {

                break;
            }
            //set color of each pixel
            processLine(file, overlaps);
            line = fgets(line, LINE_LENGTH, file);
        }
    }

    free(line);
    fclose(file);
}

//retrieve mixed color for a given pixel
int mixColor(char color, int row, int column) {

    const int current = color == 'R' ? RED : BLACK;

    if(pixels[row][column] == EMPTY) {

        return current;
    }

    return pixels[row][column] == current ? current : PURPLE;
}

bool isPurple(int row, int column) {

    return pixels[row][column] == PURPLE;
}

//set color of all pixels covered by given filter
void setColor(char color, int row, int column, int height, int width, int * overlaps) {

    for(int i = 0; i < height; i++) {

        for(int j = 0; j < width; j++) {

            const int targetRow = row + i;
            const int targetColumn = column + j;

            if(!isPurple(targetRow, targetColumn)) {

                pixels[targetRow][targetColumn] = mixColor(color, targetRow, targetColumn);
                *overlaps += isPurple(targetRow, targetColumn) ? 1 : 0;
            }
        }
    }
}

int countOverlap(char * url) {

    int overlaps = 0;
    initialize();
    processFile(url, & overlaps);

    return overlaps;
}