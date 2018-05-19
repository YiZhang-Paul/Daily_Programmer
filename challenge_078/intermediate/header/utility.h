#ifndef UTILITY_H
#define UTILITY_H

#include <stdlib.h>
#include <string.h>
#include <ctype.h>

char * copyText(char *, int, int);
void appendCharacter(char *, char);
char ** splitText(char *, int *);

#endif