#ifndef RECORD_PARSER_H
#define RECORD_PARSER_H

#define LINE_LENGTH 256

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#include <ctype.h>
#include "utility.h"

struct record {

    char *winner;
    char *loser;
    int scores[2];
};

static char ** getTeams(char *);
static int * getScores(char *);
static struct record * parseLine(char *);
struct record ** parse(char *, int *);
void freeRecord(struct record *);
void freeRecords(struct record **, int);

#endif