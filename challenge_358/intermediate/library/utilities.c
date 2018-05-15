#include "../header/utilities.h"

char * copyText(char * text, int start, int end) {

    const int length = end - start + 2;
    char *copy = malloc(length);
    copy[length - 1] = '\0';

    return memcpy(copy, &text[start], length - 1);
}

int firstAlpha(char * text) {

    for(int i = 0; i < strlen(text); i++) {

        if(isalpha(text[i])) {

            return i;
        }
    }

    return -1;
}

int lastAlpha(char * text) {

    for(int i = strlen(text) - 1; i >= 0; i--) {

        if(isalpha(text[i])) {

            return i;
        }
    }

    return -1;
}

char * trim(char * text) {

    char *trimed = copyText(text, firstAlpha(text), lastAlpha(text));

    free(text);

    return trimed;
}

void freeTexts(char ** texts, int total) {

    for(int i = 0; i < total; i++) {

        free(texts[i]);
    }

    free(texts);
}