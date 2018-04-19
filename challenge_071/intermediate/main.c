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
int getFibonacci(int, int);

int main(void) {

    printf("%d\n", getFibonacci(2, 1));
    printf("%d\n", getFibonacci(2, 2));
    printf("%d\n", getFibonacci(2, 3));
    printf("%d\n", getFibonacci(2, 4));
    printf("%d\n", getFibonacci(2, 5));
    printf("%d\n", getFibonacci(2, 6));
    printf("%d\n", getFibonacci(2, 7));
    printf("%d\n", getFibonacci(2, 8));
    printf("%d\n", getFibonacci(2, 9));
    printf("%d\n", getFibonacci(2, 10));

    printf("%d\n", getFibonacci(3, 1));
    printf("%d\n", getFibonacci(3, 2));
    printf("%d\n", getFibonacci(3, 3));
    printf("%d\n", getFibonacci(3, 4));
    printf("%d\n", getFibonacci(3, 5));
    printf("%d\n", getFibonacci(3, 6));
    printf("%d\n", getFibonacci(3, 7));
    printf("%d\n", getFibonacci(3, 8));
    printf("%d\n", getFibonacci(3, 9));
    printf("%d\n", getFibonacci(3, 10));

    printf("%d\n", getFibonacci(4, 1));
    printf("%d\n", getFibonacci(4, 2));
    printf("%d\n", getFibonacci(4, 3));
    printf("%d\n", getFibonacci(4, 4));
    printf("%d\n", getFibonacci(4, 5));
    printf("%d\n", getFibonacci(4, 6));
    printf("%d\n", getFibonacci(4, 7));
    printf("%d\n", getFibonacci(4, 8));
    printf("%d\n", getFibonacci(4, 9));
    printf("%d\n", getFibonacci(4, 10));

    printf("%d\n", getFibonacci(5, 1));
    printf("%d\n", getFibonacci(5, 2));
    printf("%d\n", getFibonacci(5, 3));
    printf("%d\n", getFibonacci(5, 4));
    printf("%d\n", getFibonacci(5, 5));
    printf("%d\n", getFibonacci(5, 6));
    printf("%d\n", getFibonacci(5, 7));
    printf("%d\n", getFibonacci(5, 8));
    printf("%d\n", getFibonacci(5, 9));
    printf("%d\n", getFibonacci(5, 10));

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

int getFibonacci(int order, int place) {

    if(place <= order + 1) {

        return place >= order ? 1 : 0;
    }

    struct queue *queue = createQueue();

    for(int i = 0; i < order - 1; i++) {

        enqueue(queue, 0);
    }

    enqueue(queue, 1);
    int current = 1;

    for(int i = 0; i < place - order - 1; i++) {

        enqueue(queue, current);
        current = current * 2 - dequeue(queue);
    }

    freeQueue(queue);

    return current;
}