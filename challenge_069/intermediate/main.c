#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

char * copy(char *);
char formatCharacter(char);
char * formatText(char *);
int findIndex(char *, char);
char * getKey(char *, char);
char * encode(char *, char *, char *);

int main(void) {

    char text[] = "Brake me out of jail on the 21st";
    char substitution[] = "R3FLMX7KWQ69D4Y5NOZ STV2EH8AP1ICBGU0";
    char transposition[] = "PROGRAMMER";

    char *formatted = formatText(text);

    printf("%s\n", getKey(substitution, formatted[0]));

    // for(int i = 0; i < strlen(formatted); i++) {

    //     char *key = getKey(substitution, formatted[i]);

    //     free(key);
    // }

    return 0;
}

char * copy(char * text) {

    char *copied = malloc(sizeof *copied * strlen(text));

    return strcpy(copied, text);
}

char formatCharacter(char character) {

    char upperCased = toupper(character);

    return upperCased == 'J' ? 'I' : upperCased;
}

char * formatText(char * text) {

    char *formatted = copy(text);

    for(int i = 0; i < strlen(formatted); i++) {

        if(isalpha(formatted[i])) {

            formatted[i] = formatCharacter(formatted[i]);
        }
    }

    return formatted;
}

int findIndex(char * text, char character) {

    for(int i = 0; i < strlen(text); i++) {

        if(character == text[i]) {

            return i;
        }
    }

    return -1;
}

char * getKey(char * substitution, char character) {

    return substitution;
}

char * encode(char * text, char * substitution, char * transposition) {

    
}