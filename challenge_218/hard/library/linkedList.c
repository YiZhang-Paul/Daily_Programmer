#include "../header/utility.h"
#include "../header/linkedList.h"

struct node * createNode(void * data) {

    struct node *node = malloc(sizeof *node);

    node->data = data;
    node->next = NULL;

    return node;
}

struct node * getTail(struct node * head) {

    if(head == NULL) {

        return head;
    }

    while(head->next != NULL) {

        head = head->next;
    }

    return head;
}

void append(struct node ** head, void * data) {

    struct node *node = createNode(data);

    if(*head == NULL) {

        *head = node;

        return;
    }

    getTail(*head)->next = node;
}