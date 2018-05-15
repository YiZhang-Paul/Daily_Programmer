#ifndef TEAM_H
#define TEAM_H

#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include "hashTable.h"
#include "utility.h"

struct team {

    bool visited;
    char *name;
    struct hashTable *losed;
};

struct team * createTeam(char *);
void freeTeam(void *);

#endif