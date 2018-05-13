#include <stdio.h>
#include <stdlib.h>

int ** getStack(int);
int * getSequence(int, int *);

int main(void) {

    int total = 0;
    int *sequence = getSequence(9, &total);

    for(int i = 0; i < total; i++) {

        printf("%d", sequence[i]);
    }

    free(sequence);

    return 0;
}

int ** getStack(int level) {

    int **stack = malloc(sizeof *stack * level);

    for(int i = 0, counter = 1; i < level; i++) {

        stack[i] = malloc(sizeof *stack[i] * (counter + 2));
        stack[i][0] = counter;
        stack[i][1] = 0;

        for(int j = 2; j <= counter + 1; j++) {

            stack[i][j] = (j + 1) % 2;
        }

        counter *= 2;
    }

    return stack;
}

int * getSequence(int level, int * total) {

    int **stacks = getStack(level);
    *total = stacks[level - 1][0] * 2 - 1;
    int *sequence = malloc(sizeof *sequence * *total);
    int *hPointers = malloc(sizeof *hPointers * level);

    for(int i = 0; i < level; i++) {

        hPointers[i] = 2;
    }

    for(int i = 0; i < *total; i++) {

        int vPointer = level - 1;

        if(stacks[vPointer][1] == 0) {

            stacks[vPointer][1] = 1;
            sequence[i] = stacks[vPointer][hPointers[vPointer]++];

            continue;
        }

        while(stacks[vPointer][1] == 1 && vPointer - 1 >= 0 && hPointers[vPointer - 1] < stacks[vPointer - 1][0] + 2) {

            stacks[vPointer][1] = 0;
            vPointer--;
        }

        stacks[vPointer][1] = 1;
        sequence[i] = stacks[vPointer][hPointers[vPointer]++];
    }

    for(int i = 0; i < level; i++) {

        free(stacks[i]);
    }

    free(stacks);
    free(hPointers);

    return sequence;
}