#ifndef HASH_TABLE_H
#define HASH_TABLE_H

#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include "linkedList.h"

#define MAX_SIZE 2048

struct hashTable {

    struct node *values[MAX_SIZE];
};

static unsigned long getHashCode(char *);
struct hashTable * createTable();
bool contains(struct hashTable *, char *);
void add(struct hashTable *, void *, char *);
struct node * get(struct hashTable *, char *);
void freeTable(struct hashTable *, void func(void *));

#endif