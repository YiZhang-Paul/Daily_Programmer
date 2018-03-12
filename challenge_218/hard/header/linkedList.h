#ifndef LINKED_LIST_H
#define LINKED_LIST_H

#include "utility.h"

struct node {

    void *data;
    struct node *next;
};

struct node * createNode(void *);
struct node * getTailNode(struct node *);
void append(struct node **, void *);
void shift(struct node **, void func(void *));
void delete(struct node **, struct node *, void func(void *));
void freeNode(struct node *, void func(void *));
void freeList(struct node **, void func(void *));

#endif