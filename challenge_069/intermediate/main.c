#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

char formatCharacter(char);
void formatText(char *);
int findIndex(char *, char);
char * getKey(char *, char);

int main(void) {

    char text[] = "Brake me out of jail on the 21st";
    char substitution[] = "R3FLMX7KWQ69D4Y5NOZ STV2EH8AP1ICBGU0";
    char transposition[] = "PROGRAMMER";

    printf("%s\n", text);
    formatText(text);
    printf("%s\n", text);

    for(int i = 0; i < strlen(text); i++) {

        printf("%c(%s)", text[i], getKey(substitution, text[i]));
    }

    return 0;
}

char formatCharacter(char character) {

    const char upperCase = toupper(character);

    return upperCase == 'J' ? 'I' : upperCase;
}

void formatText(char * text) {

    for(int i = 0; i < strlen(text); i++) {

        if(isalpha(text[i])) {

            text[i] = formatCharacter(text[i]);
        }
    }
}

int findIndex(char * array, char character) {

    for(int i = 0; i < strlen(array); i++) {

        if(character == array[i]) {

            return i;
        }
    }

    return -1;
}

char * getKey(char * substitution, char letter) {

    char *key = malloc(sizeof *key * 3);
    const char ciphertext[] = "ADFGVX";
    const int index = findIndex(substitution, letter);

    key[0] = ciphertext[index / strlen(ciphertext)];
    key[1] = ciphertext[index % strlen(ciphertext)];
    key[2] = '\0';

    return key;
}