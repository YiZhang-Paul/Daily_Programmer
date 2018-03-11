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

void shift(struct node ** head) {

    if(*head != NULL) {

        struct node *previous = *head;
        *head = (*head)->next;
        free(previous);
    }
}

void delete(struct node ** head, struct node * node) {

    if(*head == node || *head == NULL) {

        shift(head);

        return;
    }

    struct node *previous = *head;
    struct node *next = previous->next;

    while(next != NULL) {

        if(next == node) {

            previous->next = next->next;

            free(node);

            break;
        }

        previous = next;
        next = previous->next;
    }
}