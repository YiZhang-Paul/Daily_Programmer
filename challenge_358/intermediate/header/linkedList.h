#ifndef LINKED_LIST_H
#define LINKED_LIST_H

#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include "hashset.h"
#include "utility.h"

struct node {

    char *data;
    bool visited;
    struct hashset *losed;
    struct node *next;
};

bool isEmpty(struct node *);
struct node * createNode(char *);
struct node * getTail(struct node *);
void append(struct node **, char *);
void addLosed(struct hashset *, struct node *);
struct node * getNode(struct node *, char *);
void freeNode(struct node *);
void freeList(struct node **);

#endif