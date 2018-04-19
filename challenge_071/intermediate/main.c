#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct node {

    int value;
    struct node *next;
};

struct queue {

    struct node *head;
    struct node *tail;
};

struct node * createNode(int);
struct queue * createQueue(void);
bool isEmpty(struct queue *);
void enqueue(struct queue *, int);
int dequeue(struct queue *);
void freeQueue(struct queue *);

int main(void) {

    struct queue *queue = createQueue();

    enqueue(queue, 5);

    printf("%d\n", dequeue(queue));
    printf("%d\n", dequeue(queue));

    enqueue(queue, 3);
    enqueue(queue, 99);
    enqueue(queue, 125);
    enqueue(queue, 7);

    printf("%d\n", dequeue(queue));
    printf("%d\n", dequeue(queue));
    printf("%d\n", dequeue(queue));
    printf("%d\n", dequeue(queue));
    printf("%d\n", dequeue(queue));

    freeQueue(queue);

    return 0;
}

struct node * createNode(int value) {

    struct node *node = malloc(sizeof *node);

    node->value = value;
    node->next = NULL;

    return node;
}

struct queue * createQueue(void) {

    struct queue *queue = malloc(sizeof *queue);

    queue->head = NULL;
    queue->tail = NULL;

    return queue;
}

bool isEmpty(struct queue * queue) {

    return queue->head == NULL;
}

void enqueue(struct queue * queue, int value) {

    struct node *node = createNode(value);

    if(isEmpty(queue)) {

        queue->head = node;
        queue->tail = node;

        return;
    }

    queue->tail->next = node;
    queue->tail = node;
}

int dequeue(struct queue * queue) {

    if(isEmpty(queue)) {

        return -1;
    }

    int value = queue->head->value;

    if(queue->head == queue->tail) {

        free(queue->head);
        queue->head = NULL;
        queue->tail = NULL;
    }
    else {

        struct node *previous = queue->head;
        queue->head = queue->head->next;
        free(previous);
    }

    return value;
}

void freeQueue(struct queue * queue) {

    if(!isEmpty(queue)) {

        struct node *head = queue->head;

        while(head != NULL) {

            struct node *previous = head;
            head = head->next;
            free(previous);
        }
    }

    free(queue);
}