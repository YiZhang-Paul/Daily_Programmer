#include "../header/linkedList.h"

bool isEmpty(struct node * head) {

    return head == NULL;
}

struct node * createNode(char * text) {

    struct node *node = malloc(sizeof *node);

    node->data = copyText(text, 0, strlen(text) - 1);
    node->losed = NULL;
    node->next = NULL;

    return node;
}

struct node * getTail(struct node * head) {

    while(head != NULL && head->next != NULL) {

        head = head->next;
    }

    return head;
}

void append(struct node ** head, char * text) {

    struct node *node = createNode(text);

    if(isEmpty(*head)) {

        *head = node;

        return;
    }

    getTail(*head)->next = node;
}

void addLosed(struct node ** head, struct node * losed) {

    if(isEmpty(*head)) {

        *head = losed;

        return;
    }

    if(getNode(*head, losed->data) == NULL) {

        getTail(*head)->losed = losed;
    }
}

struct node * getNode(struct node * head, char * text) {

    while(head != NULL) {

        if(strcmp(head->data, text) == 0) {

            return head;
        }

        head = head->next;
    }

    return NULL;
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