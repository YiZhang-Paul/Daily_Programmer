#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char getHexChar(int value) {

    if (value < 10) {

        return '0' + value;
    }

    return 'A' + value % 10;
}

char * toHex(int value) {

    char *hex = malloc(3);
    hex[0] = getHexChar(value / 16);
    hex[1] = getHexChar(value % 16);
    hex[2] = '\0';

    return hex;
}

char * toHexColor(int red, int green, int blue) {

    const int length = 1 + 2 * 3 + 1;
    char *color = malloc(length);
    char *r = toHex(red);
    char *g = toHex(green);
    char *b = toHex(blue);
    color[0] = '#';
    strcpy(&color[1], r);
    strcpy(&color[3], g);
    strcpy(&color[5], b);
    color[length - 1] = '\0';

    return color;
}

int main(void) {

    printf("%s\n", toHexColor(255, 99, 71));
    printf("%s\n", toHexColor(184, 134, 11));
    printf("%s\n", toHexColor(189, 183, 107));
    printf("%s\n", toHexColor(0, 0, 205));

    return 0;
}