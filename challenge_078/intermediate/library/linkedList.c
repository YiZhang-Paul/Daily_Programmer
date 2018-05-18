#include "../header/linkedList.h"

struct node * createNode(void * data) {

    struct node *node = malloc(sizeof *node);

    node->data = data;
    node->next = NULL;

    return node;
}

bool isEmpty(struct node * head) {

    return head == NULL;
}

static struct node * getTail(struct node * head) {

    while(head != NULL && head->next != NULL) {

        head = head->next;
    }

    return head;
}

void append(struct node ** head, void * data) {

    struct node *node = createNode(data);

    if(isEmpty(*head)) {

        *head = node;

        return;
    }

    getTail(*head)->next = node;
}

void freeNode(struct node * node, void func(void *)) {

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