#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int findIndex(char *, char);
char * copy(char *, int, int);
int letterToIndex(char);
char indexToLetter(int);
char * transform(char *, char func(char, char));
char encodeLetter(char, char);
char decodeLetter(char, char);
char * encode(char *);
char * decode(char *);
void showResult(char *, char * func(char *));

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

//find index of first occurrence of given letter in text
int findIndex(char * input, char letter) {

    for(int i = 0; i < strlen(input); i++) {

        if(input[i] == letter) {

            return i;
        }
    }

    return -1;
}

//copy a portion of text
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

char * transform(char * input, char func(char, char)) {

    const int splitIndex = findIndex(input, ' ');
    char *keyword = copy(input, 0, splitIndex - 1);
    char *message = copy(input, splitIndex + 1, strlen(input) - 1);
    char *transformed = malloc(strlen(message) + 1);

    for(int i = 0; i < strlen(message); i++) {

        const char key = keyword[i % strlen(keyword)];
        //encode/decode letter
        transformed[i] = func(key, message[i]);
    }

    transformed[strlen(message)] = '\0';

    free(keyword);
    free(message);

    return transformed;
}

char encodeLetter(char key, char letter) {

    const int index = letterToIndex(letter) + letterToIndex(key);

    return indexToLetter(index % 26);
}

char decodeLetter(char key, char letter) {

    const int index = letterToIndex(letter) - letterToIndex(key);

    return indexToLetter((index + 26) % 26);
}

char * encode(char * input) {

    return transform(input, encodeLetter);
}

char * decode(char * input) {

    return transform(input, decodeLetter);
}

void showResult(char * input, char * func(char *)) {

    char *result = func(input);
    printf("%s\n", result);

    free(result);
}