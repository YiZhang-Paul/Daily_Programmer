#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int findIndex(char * input, char letter) {

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

int letterToIndex(char letter) {

    return letter - 'a';
}

char indexToLetter(int index) {

    return 'a' + index;
}

char * encode(char * input) {

    const int splitIndex = findIndex(input, ' ');
    char *keyword = copy(input, 0, splitIndex - 1);
    char *message = copy(input, splitIndex + 1, strlen(input) - 1);
    char *encoded = malloc(strlen(message) + 1);

    for(int i = 0; i < strlen(message); i++) {

        const char key = keyword[i % strlen(keyword)];
        const int index = (letterToIndex(message[i]) + letterToIndex(key));
        encoded[i] = indexToLetter(index % 26);
    }

    encoded[strlen(message)] = '\0';

    free(keyword);
    free(message);

    return encoded;
}

char * decode(char * input) {

    const int splitIndex = findIndex(input, ' ');
    char *keyword = copy(input, 0, splitIndex - 1);
    char *message = copy(input, splitIndex + 1, strlen(input) - 1);
    char *decoded = malloc(strlen(message) + 1);

    for(int i = 0; i < strlen(message); i++) {

        const char key = keyword[i % strlen(keyword)];
        const int index = letterToIndex(message[i]) - letterToIndex(key) + 26;
        decoded[i] = indexToLetter(index % 26);
    }

    decoded[strlen(message)] = '\0';

    free(keyword);
    free(message);

    return decoded;
}

void showResult(char * input, char * func(char *)) {

    char *result = func(input);
    printf("%s\n", result);

    free(result);
}

int main(void) {

    showResult("snitch thepackagehasbeendelivered", encode);
    showResult("bond theredfoxtrotsquietlyatmidnight", encode);
    showResult("train murderontheorientexpress", encode);
    showResult("garden themolessnuckintothegardenlastnight", encode);

    showResult("cloak klatrgafedvtssdwywcyty", decode);
    showResult("python pjphmfamhrcaifxifvvfmzwqtmyswst", decode);
    showResult("moore rcfpsgfspiecbcc", decode);

    return 0;
}