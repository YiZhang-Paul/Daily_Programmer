#include <stdlib.h>
#include <string.h>
#include "../header/linkedList.h"

bool isEmpty(struct node * head) {

    return head == NULL;
}

struct node * createNode(void * data, char * key) {

    struct node *node = malloc(sizeof *node);

    node->key = copyText(key, 0, strlen(key) - 1);
    node->data = data;
    node->next = NULL;

    return node;
}

struct node * getTail(struct node * head) {

    while(head != NULL && head->next != NULL) {

        head = head->next;
    }

    return head;
}

void append(struct node ** head, void * data, char * key) {

    struct node *node = createNode(data, key);

    if(isEmpty(*head)) {

        *head = node;

        return;
    }

    getTail(*head)->next = node;
}

struct node * getNode(struct node * head, char * key) {

    while(head != NULL) {

        if(strcmp(head->key, key) == 0) {

            return head;
        }

        head = head->next;
    }

    return NULL;
}

void freeNode(struct node * node, void func(void *)) {

    free(node->key);
    func(node->data);
    free(node);
}

void freeList(struct node ** head, void func(void *)) {

    while(*head != NULL) {

        struct node *previous = *head;
        *head = (*head)->next;
        freeNode(previous, func);
    }
}