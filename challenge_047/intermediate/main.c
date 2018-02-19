#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int getAsciiSum(char *);
int englishToDigit(char *);

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

        printf("%s -> %d\n", words[i], englishToDigit(words[i]));
    }

    return 0;
}

//calculate sum of ASCII value of characters in a word
int getAsciiSum(char * word) {

    int sum = 0;

    for(int i = 0; i < strlen(word); i++) {
        //square ASCII value to avoid words with same ASCII value sum
        sum += word[i] * word[i];
    }

    return sum;
}

int englishToDigit(char * word) {
    //ASCII value sums of English words corresponding to digit 0-9
    int values[] = {

        50402, 34622, 39938, 57670, 49410,
        45554, 38650, 59651, 56107, 45426
    };

    for(int i = 0, sum = getAsciiSum(word); i < 10; i++) {

        if(sum == values[i]) {

            return i;
        }
    }

    return -1;
}