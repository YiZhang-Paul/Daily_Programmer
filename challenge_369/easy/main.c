#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <math.h>

char toHexChar(int);
char * toHexPair(int);
char * toHexColor(int, int, int);
int toDigit(char);
int toDecimal(char *);
char * blend(char **, int);

int main(void) {

    printf("%s\n", toHexColor(255, 99, 71));
    printf("%s\n", toHexColor(184, 134, 11));
    printf("%s\n", toHexColor(189, 183, 107));
    printf("%s\n", toHexColor(0, 0, 205));

    char *colors1[2] = { "#000000", "#778899" };
    char *colors2[3] = { "#E6E6FA", "#FF69B4", "#B0C4DE" };

    printf("%s\n", blend(colors1, sizeof(colors1) / sizeof(char *)));
    printf("%s\n", blend(colors2, sizeof(colors2) / sizeof(char *)));

    return 0;
}

char toHexChar(int value) {

    return (value < 10 ? '0' : 'A') + value % 10;
}

char * toHexPair(int value) {

    char *hex = malloc(3);

    hex[0] = toHexChar(value / 16);
    hex[1] = toHexChar(value % 16);
    hex[2] = '\0';

    return hex;
}

char * toHexColor(int red, int green, int blue) {

    const int length = 1 + 2 * 3 + 1;
    char *color = malloc(length);
    char *r = toHexPair(red);
    char *g = toHexPair(green);
    char *b = toHexPair(blue);

    color[0] = '#';
    strcpy(color + 1, r);
    strcpy(color + 3, g);
    strcpy(color + 5, b);
    color[length - 1] = '\0';

    free(r);
    free(g);
    free(b);

    return color;
}

int toDigit(char hexChar) {

    if (isdigit(hexChar)) {

        return hexChar - '0';
    }

    return hexChar - 'A' + 10;
}

int toDecimal(char * hexPair) {

    int value = 0;

    value += toDigit(hexPair[1]);
    value += toDigit(hexPair[0]) * 16;

    return value;
}

char * blend(char ** colors, int total) {

    int values[3];

    for (int i = 0; i < 3; i++) {

        int value = 0;

        for (int j = 0; j < total; j++) {

            char hex[3];
            memcpy(hex, &colors[j][1 + i * 2], 2);
            hex[2] = '\0';
            value += toDecimal(hex);
        }

        values[i] = value / total;
    }

    return toHexColor(values[0], values[1], values[2]);
}