#ifndef UTILITY_H
#define UTILITY_H

#define LINE_LENGTH 512

int countLines(char *);
char ** readLines(char *, int, int);
void freeLines(char **, int);
char * copyString(char *);
int factorial(int);
int * getRange(int, int);
int * copyRange(int *, int);
int countNumbers(char *);
void toNumbers(char *, int *);
void sortNumbers(int *, int);

#endif