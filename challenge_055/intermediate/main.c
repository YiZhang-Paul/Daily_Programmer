#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

int toDigit(char);

int main(void) {

    printf("Please Enter First Digit:\n");
    const char digit1 = getchar();
    getchar();

    printf("Please Enter Second Digit:\n");
    const char digit2 = getchar();
    getchar();

    if(isdigit(digit1) && isdigit(digit2)) {

        const int value1 = toDigit(digit1);
        const int value2 = toDigit(digit2);
        printf("Output: %d + %d = %d\n", value1, value2, value1 + value2);
    }
    else {

        printf("Output: Invalid\n");
    }

    getchar();

    return 0;
}

int toDigit(char character) {

    return character - '0';
}