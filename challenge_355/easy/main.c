#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int find(char * input, char letter) {

    for(int i = 0; i < strlen(input); i++) {

        if(input[i] == letter) {

            return i;
        }
    }

    return -1;
}

char * copy(char * input, int start, int end) {

    const int length = end - start + 1;
    char *copied = malloc(sizeof *copied * length + 1);
    copied[length] = '\0';

    return memcpy(copied, &input[start], sizeof *copied * length);
}

int getIndex(char letter) {

    return letter - 'a';
}

char getLetter(int index) {

    return 'a' + index;
}

char * encode(char * input) {

    const int splitIndex = find(input, ' ');
    char *keyword = copy(input, 0, splitIndex - 1);
    char *message = copy(input, splitIndex + 1, strlen(input) - 1);
    char *encoded = malloc(strlen(message) + 1);

    for(int i = 0; i < strlen(message); i++) {

        const char key = keyword[i % strlen(keyword)];
        encoded[i] = getLetter((getIndex(message[i]) + getIndex(key)) % 26);
    }

    encoded[strlen(message)] = '\0';

    free(keyword);
    free(message);

    return encoded;
}

void showEncode(char * input) {

    char *encoded = encode(input);
    printf("%s\n", encoded);

    free(encoded);
}

int main(void) {

    showEncode("snitch thepackagehasbeendelivered");
    showEncode("bond theredfoxtrotsquietlyatmidnight");
    showEncode("train murderontheorientexpress");
    showEncode("garden themolessnuckintothegardenlastnight");

    return 0;
}