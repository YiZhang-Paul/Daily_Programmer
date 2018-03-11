#ifndef LINKED_LIST_H
#define LINKED_LIST_H

struct node {

    void *data;
    struct node *next;
};

struct node * createNode(void *);
struct node * getTail(struct node *);
void append(struct node **, void *);

#endif