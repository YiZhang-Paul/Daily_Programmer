#include "../header/linkedList.h"

struct node * createNode(void * data) {

    struct node *node = malloc(sizeof *node);

    node->data = data;
    node->next = NULL;

    return node;
}

struct node * getTailNode(struct node * head) {
    //traverse to the end of linked list
    while(head != NULL && head->next != NULL) {

        head = head->next;
    }

    return head;
}

void append(struct node ** head, void * data) {

    struct node *node = createNode(data);
    //when list is empty
    if(*head == NULL) {

        *head = node;
    }
    else {

        getTailNode(*head)->next = node;
    }
}

//remove the first node of linked list
void shift(struct node ** head, void freeData(void *)) {

    if(*head != NULL) {
        //keep reference to node that will be removed
        struct node *node = *head;
        *head = (*head)->next;
        freeNode(node, freeData);
    }
}

//remove given node from the list at all possible location
void delete(struct node ** head, struct node * node, void freeData(void *)) {

    if(*head == node || *head == NULL) {

        shift(head, freeData);

        return;
    }

    struct node *previous = *head;
    struct node *next = previous->next;

    while(next != NULL) {

        if(next == node) {

            previous->next = next->next;
            freeNode(node, freeData);

            break;
        }

        previous = next;
        next = previous->next;
    }
}

void freeNode(struct node * node, void freeData(void *)) {

    if(freeData != NULL) {

        freeData(node->data);
    }

    free(node);
}

void freeList(struct node ** head, void freeData(void *)) {

    while(*head != NULL) {
        //keep reference to node that will be freed
        struct node *node = *head;
        *head = (*head)->next;
        freeNode(node, freeData);
    }

    *head = NULL;
}