#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int findSpace(char * input) {

    for(int i = 0; i < strlen(input); i++) {

        if(input[i] == ' ') {

            return i;
        }
    }

    return -1;
}

char * copy(char * input, int start, int end) {

    const int length = end - start + 1;
    char *copied = malloc(sizeof *copied * length + 1);
    memcpy(copied, &input[start], sizeof *copied * length);
    copied[end - start + 1] = '\0';

    return copied;
}

char * encode(char * input) {

    const int space = findSpace(input);
    char *keyword = copy(input, 0, space - 1);
    char *message = copy(input, space + 1, strlen(input) - 1);
    char *encoded = malloc(strlen(message) + 1);

    for(int i = 0; i < strlen(message); i++) {

        const char column = keyword[i % strlen(keyword)] - 'a';
        encoded[i] = (message[i] - 'a' + column) % 26 + 'a';
    }

    encoded[strlen(message)] = '\0';

    free(keyword);
    free(message);

    return encoded;
}

int main(void) {

    char *encoded = encode("snitch thepackagehasbeendelivered");

    printf("%s\n", encoded);

    free(encoded);

    return 0;
}