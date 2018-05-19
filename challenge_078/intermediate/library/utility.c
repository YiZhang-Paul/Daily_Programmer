#include "../header/utility.h"

char * copyText(char * text, int start, int end) {

    const int length = end - start + 1;
    char *copied = malloc(length + 1);
    copied[length] = '\0';

    return memcpy(copied, &text[start], length);
}

void appendCharacter(char * text, char character) {

    const int length = strlen(text);
    text[length] = character;
    text[length + 1] = '\0';
}

char ** splitText(char * input, int * total) {

    *total = 0;
    char **texts = malloc(sizeof *texts * (*total + 1));

    for(int i = 0, start = -1; i < strlen(input); i++) {

        if(isalpha(input[i]) || input[i] == '_') {

            start = start == -1 ? i : start;

            continue;
        }

        if(start != -1) {

            texts = realloc(texts, sizeof *texts * (*total + 1));
            texts[(*total)++] = copyText(input, start, i - 1);
            start = -1;
        }
    }

    return texts;
}