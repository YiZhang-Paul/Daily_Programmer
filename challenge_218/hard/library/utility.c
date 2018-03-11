#include "../header/utility.h"

char * copy(char * text) {

    char *copied = malloc(strlen(text) + 1);

    return strcpy(copied, text);
}

char ** split(char * text, const char * delimiter) {

    char **splitted = NULL;
    char *token = strtok(text, delimiter);
    int total = 0;

    while(token != NULL) {

        splitted = realloc(splitted, sizeof *splitted * ++total);
        splitted[total - 1] = token;
        token = strtok(NULL, delimiter);
    }

    return splitted;
}