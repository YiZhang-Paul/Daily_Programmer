#ifndef UTILITY_H
#define UTILITY_H

#define LINE_LENGTH 128

int countNumbers(char *);
void toNumbers(char *, int *);
int countLines(char *);
char ** readLines(char *, int, int);
void freeLines(char **, int);

#endif