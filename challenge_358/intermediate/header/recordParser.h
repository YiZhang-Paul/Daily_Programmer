#ifndef RECORD_PARSER_H
#define RECORD_PARSER_H

#define LINE_LENGTH 256

#include "utility.h"

struct record {

    char *winner;
    char *loser;
    int scores[2];
};

static char ** getNames(char *);
static int * getScores(char *);
static struct record * parseRecord(char *);
struct record ** parse(char *, int *);
void freeRecord(struct record *);
void freeRecords(struct record **, int);

#endif