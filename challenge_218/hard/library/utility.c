#include "../header/utility.h"

char * copy(char * text) {

    char *copied = malloc(strlen(text) + 1);

    strcpy(copied, text);
}