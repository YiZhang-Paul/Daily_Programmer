#include "../header/utility.h"

char * copyText(char * text, int start, int end) {

    const int length = end - start + 1;
    char *copied = malloc(length + 1);
    copied[length] = '\0';

    return memcpy(copied, &text[start], length);
}