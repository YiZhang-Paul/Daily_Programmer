#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int getASCIISum(char *);
int toDigit(char *);

int main(void) {

    char *words[] = {

        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    };

    for(int i = 0; i < 10; i++) {

        printf("%s -> %d\n", words[i], toDigit(words[i]));
    }

    return 0;
}

int getASCIISum(char * word) {

    int sum = 0;

    for(int i = 0; i < strlen(word); i++) {

        sum += word[i];
    }

    return sum + word[0];
}

int toDigit(char * word) {

    int values[] = {

        570, 433, 462, 652, 546, 528, 455, 660, 630, 536
    };

    for(int i = 0, asciiSum = getASCIISum(word); i < 10; i++) {

        if(asciiSum == values[i]) {

            return i;
        }
    }

    return 0;
}