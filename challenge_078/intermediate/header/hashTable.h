#ifndef HASH_TABLE_H
#define HASH_TABLE_H

#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include "linkedList.h"

#define MAX_KEYS 256

struct dataItem {

    char *key;
    void *data;
};

struct hashTable {

    struct node * values[MAX_KEYS];
};

static unsigned long getHashCode(char *);
struct dataItem * createItem(char *, void *);
struct hashTable * createTable();
void add(struct hashTable *, char *, void *);
void * get(struct hashTable *, char *);
bool contains(struct hashTable *, char *);
void freeItem(void *);
void freeTable(struct hashTable *);

#endif