#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int display[10][3] = {

    { 1, 9, 3 },
    { 0, 7, 7 },
    { 1, 5, 4 },
    { 1, 5, 5 },
    { 0, 3, 7 },
    { 1, 4, 5 },
    { 1, 4, 3 },
    { 1, 7, 7 },
    { 1, 3, 3 },
    { 1, 3, 5 }
};

void DisplayFragment(int value) {

    switch(value) {

        case 0 :
        case 1 :

            printf(value == 0 ? "   " : " _ ");

            break;

        case 3 :

            printf("|_|");

            break;

        case 4 :

            printf("|_ ");

            break;

        case 5 :

            printf(" _|");

            break;

        case 6 :

            printf("|  ");

            break;

        case 7 :

            printf("  |");

            break;

        case 8 :

            printf(" _ ");

            break;

        case 9 :

            printf("| |");

            break;

        default :

            printf("   ");
    }
}

void DisplayDigits(char * input) {

    for(int i = 0; i < 3; i++) {

        for(int j = 0; j < strlen(input); j++) {

            const int value = display[input[j] - '0'][i];
            DisplayFragment(value);
        }

        printf("\n");
    }

    printf("\n");
}

int main(void) {

    DisplayDigits("123456789");
    DisplayDigits("433805825");
    DisplayDigits("526837608");
    DisplayDigits("954105592");

    return 0;
}