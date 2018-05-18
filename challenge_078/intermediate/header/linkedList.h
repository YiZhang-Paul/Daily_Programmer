#ifndef LINKED_LIST_H
#define LINKED_LIST_H

#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

struct node {

    void *data;
    struct node *next;
};

struct node * createNode(void *);
bool isEmpty(struct node *);
static struct node * getTail(struct node *);
void append(struct node **, void *);
void freeNode(struct node *, void func(void *));
void freeList(struct node **, void func(void *));

#endif