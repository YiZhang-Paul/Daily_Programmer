#ifndef UTILITY_H
#define UTILITY_H

#define MAX(a, b) ((a) > (b) ? (a) : (b))

char * copyText(char *, int, int);
int firstAlpha(char *);
int lastAlpha(char *);
char * trim(char *);
void freeTexts(char **, int);

#endif