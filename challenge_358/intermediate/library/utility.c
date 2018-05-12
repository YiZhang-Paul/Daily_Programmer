#include "../header/utility.h"

char * copyText(char * text, int start, int end) {

    const int length = end - start + 2;
    char *copy = malloc(length);
    copy[length - 1] = '\0';

    return memcpy(copy, &text[start], length - 1);
}

char * trim(char * text) {

    int start;
    int end;

    for(start = 0; start < strlen(text); start++) {

        if(isalpha(text[start])) {

            break;
        }
    }

    for(end = strlen(text) - 1; end >= 0; end--) {

        if(isalpha(text[end])) {

            break;
        }
    }

    return copyText(text, start, end);
}

void freeTexts(char ** texts, int total) {

    for(int i = 0; i < total; i++) {

        free(texts[i]);
    }

    free(texts);
}