#ifndef ENCODER_H
#define ENCODER_H

#include "utility.h"

static char * getFractionText(char *, char);
static char * fillEmptyCells(char *, int);
static char * getFractionTable(char *, char *, char *);
static char * sortTable(char *, char *);
char * encode(char *, char *, char *);

#endif