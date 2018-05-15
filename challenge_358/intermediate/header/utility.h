#ifndef UTILITY_H
#define UTILITY_H

#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define MAX(a, b) ((a) > (b) ? (a) : (b))

char * copyText(char *, int, int);
int firstAlpha(char *);
int lastAlpha(char *);
char * trim(char *);
void freeTexts(char **, int);

#endif