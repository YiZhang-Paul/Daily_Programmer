#include "../header/linkedList.h"

bool isEmpty(struct node * head) {

    return head == NULL;
}

struct node * createNode(char * text) {

    struct node *node = malloc(sizeof *node);

    node->data = copyText(text, 0, strlen(text) - 1);
    node->visited = false;
    node->losed = createSet();
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

void addLosed(struct hashset * head, struct node * losed) {

    addItem(head, losed->data);
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