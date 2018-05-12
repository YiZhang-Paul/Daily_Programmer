#include "../header/linkedList.h"

bool isEmpty(struct node * head) {

    return head == NULL;
}

struct node * createNode(char * name) {

    struct node *node = malloc(sizeof *node);

    node->data = copyText(name, 0, strlen(name) - 1);
    node->next = NULL;

    return node;
}

struct node * getTail(struct node * head) {

    while(head != NULL && head->next != NULL) {

        head = head->next;
    }

    return head;
}

void append(struct node ** head, char * name) {

    struct node *node = createNode(name);

    if(isEmpty(*head)) {

        *head = node;

        return;
    }

    getTail(*head)->next = node;
}

void freeNode(struct node * node) {

    free(node->data);
    free(node);
}

void freeList(struct node ** head) {

    while(*head != NULL) {

        struct node *previous = *head;
        *head = (*head)->next;
        freeNode(previous);
    }
}