#ifndef HASHSET_H
#define HASHSET_H

#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include "linkedList.h"

#define MAX_SIZE 2048

struct hashset {

    struct node *items[MAX_SIZE];
};

static unsigned long getHashCode(char *);
struct hashset * createSet();
bool contains(struct hashset *, char *);
void add(struct hashset *, char *);
void freeSet(struct hashset *);

#endif