#include "../header/utility.h"

char * copyText(char * text) {

    char *copy = malloc(strlen(text) + 1);

    return strcpy(copy, text);
}

char ** split(char * text, const char * delimiter) {

    char **splitted = NULL;
    char *token = strtok(text, delimiter);
    int items = 0;

    while(token != NULL) {
        //expand memory block when more items are splitted
        splitted = realloc(splitted, sizeof *splitted * ++items);
        splitted[items - 1] = token;
        token = strtok(NULL, delimiter);
    }

    return splitted;
}