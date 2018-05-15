#ifndef LINKED_LIST_H
#define LINKED_LIST_H

#include <stdbool.h>
#include "utility.h"

struct node {

    char *key;
    void *data;
    struct node *next;
};

bool isEmpty(struct node *);
struct node * createNode(void *, char *);
struct node * getTail(struct node *);
void append(struct node **, void *, char *);
struct node * getNode(struct node *, char *);
void freeNode(struct node *, void func(void *));
void freeList(struct node **, void func(void *));

#endif