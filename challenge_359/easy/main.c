#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int * nextLevel(int *, int);
int * getSequence(int, int *);
void printList(int *, int);

int main(void) {

    int length = 0;
    int *sequence = getSequence(9, &length);

    printList(sequence, length);

    free(sequence);

    return 0;
}

int * nextLevel(int * sequence, int length) {

    bool insertOne = true;
    int *newSequence = malloc(sizeof *newSequence * length);

    for(int i = 0, j = 0; i < length; i++) {

        if(i % 2 == 0) {

            newSequence[i] = insertOne ? 1 : 0;
            insertOne = !insertOne;

            continue;
        }

        newSequence[i] = sequence[j++];
    }

    free(sequence);

    return newSequence;
}

int * getSequence(int level, int * length) {

    int *sequence;
    *length = 0;

    for(int i = 0; i < level; i++) {

        *length = *length * 2 + 1;
        sequence = nextLevel(sequence, *length);
    }

    return sequence;
}

void printList(int * list, int length) {

    for(int i = 0; i < length; i++) {

        printf("%d", list[i]);
    }

    printf("\n");
}