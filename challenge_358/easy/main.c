#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define BLANK 0
#define PIPE 1
#define LINE 2

int display[10][9] = {

    { BLANK, LINE, BLANK, PIPE, BLANK, PIPE, PIPE, LINE, PIPE },
    { BLANK, BLANK, BLANK, BLANK, BLANK, PIPE, BLANK, BLANK, PIPE },
    { BLANK, LINE, BLANK, BLANK, LINE, PIPE, PIPE, LINE, BLANK },
    { BLANK, LINE, BLANK, BLANK, LINE, PIPE, BLANK, LINE, PIPE },
    { BLANK, BLANK, BLANK, PIPE, LINE, PIPE, BLANK, BLANK, PIPE },
    { BLANK, LINE, BLANK, PIPE, LINE, BLANK, BLANK, LINE, PIPE },
    { BLANK, LINE, BLANK, PIPE, LINE, BLANK, PIPE, LINE, PIPE },
    { BLANK, LINE, BLANK, BLANK, BLANK, PIPE, BLANK, BLANK, PIPE },
    { BLANK, LINE, BLANK, PIPE, LINE, PIPE, PIPE, LINE, PIPE },
    { BLANK, LINE, BLANK, PIPE, LINE, PIPE, BLANK, LINE, PIPE }
};

void displayGrid(int, int);
void displayDigits(char *);

int main(void) {

    displayDigits("123456789");
    displayDigits("433805825");
    displayDigits("526837608");
    displayDigits("954105592");

    return 0;
}

void displayGrid(int digit, int grid) {

    for(int i = 0; i < 3; i++) {

        const int value = display[digit][grid * 3 + i];
        printf(value == BLANK ? " " : (value == PIPE ? "|" : "_"));
    }
}

void displayDigits(char * input) {

    for(int i = 0; i < 3; i++) {

        for(int j = 0; j < strlen(input); j++) {

            displayGrid(input[j] - '0', i);
        }

        printf("\n");
    }
}