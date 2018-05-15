#ifndef TEAM_H
#define TEAM_H

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