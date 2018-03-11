#ifndef LINKED_LIST_H
#define LINKED_LIST_H

#include "../header/utility.h"

struct node {

    void *data;
    struct node *next;
};

struct node * createNode(void *);
struct node * getTail(struct node *);
void append(struct node **, void *);
void shift(struct node **);
void delete(struct node **, struct node *);

#endif