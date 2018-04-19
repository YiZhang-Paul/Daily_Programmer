#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <math.h>

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
int peek(struct queue *);
void enqueue(struct queue *, int);
int dequeue(struct queue *);
void freeQueue(struct queue *);
int getFibonacci(int, int, int);

int main(void) {

    printf("%d\n", getFibonacci(2, 10, pow(10, 8)));
    printf("%d\n", getFibonacci(3, 10, pow(10, 8)));
    printf("%d\n", getFibonacci(4, 10, pow(10, 8)));
    printf("%d\n", getFibonacci(5, 10, pow(10, 8)));
    printf("%d\n", getFibonacci(100, 10000, pow(10, 8)));
    printf("%d\n", getFibonacci(pow(3, 13), pow(5, 10), pow(10, 8)));

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

int peek(struct queue * queue) {

    if(isEmpty(queue)) {

        return -1;
    }

    return queue->head->value;
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

int getFibonacci(int order, int place, int modulus) {

    if(place < order) {

        return place == order - 1 ? 1 : 0;
    }

    int current = 1;
    struct queue *queue = createQueue();

    for(int i = 0; i < order; i++) {

        enqueue(queue, i == order - 1);
    }

    for(int i = 0; i < place - order; i++) {

        enqueue(queue, current);
        current = current * 2 - dequeue(queue);

        if(current < 0) {

            current += modulus;
        }
        else if(current > modulus) {

            current %= modulus;
        }
    }

    freeQueue(queue);

    return current;
}