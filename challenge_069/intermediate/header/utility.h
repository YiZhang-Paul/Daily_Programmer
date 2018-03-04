#ifndef UTILITY_H
#define UTILITY_H

char *copy(char *);
int findIndex(char *, char);
static int compare(const void *, const void *);
char * sortText(char *);
char formatCharacter(char);
char * formatText(char *);
void copyColumn(char *, char *, int, int, int);

#endif