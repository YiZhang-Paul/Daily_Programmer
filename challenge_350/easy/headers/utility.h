#ifndef UTILITY_H
#define UTILITY_H

#define LINE_LENGTH 128

char ** readLines(char *, int, int);
void freeLines(char **, int);
char * copyString(char *);
int countNumbers(char *);
void toNumbers(char *, int *);
void sortNumbers(int *, int);

#endif