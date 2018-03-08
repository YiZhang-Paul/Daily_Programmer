#include <stdio.h>
#include <stdlib.h>

#define MAX(a, b) ((a) > (b) ? (a) : (b))

int findMax(int *, int);
int findIndex(int *, int, int);
void swap(int *, int, int);
void flip(int *, int, int);
void printList(int *, int);
void sortPancakes(int *, int);

int main(void) {

    int cakes1[] = { 3, 1, 2 };
    sortPancakes(cakes1, 3);

    return 0;
}

int findMax(int * values, int total) {

    int max = 0;

    for(int i = 0; i < total; i++) {

        max = MAX(max, values[i]);
    }

    return max;
}

int findIndex(int * values, int total, int toFind) {

    for(int i = 0; i < total; i++) {

        if(values[i] == toFind) {

            return i;
        }
    }

    return -1;
}

void swap(int * values, int index1, int index2) {

    const int total = values[index1] + values[index2];
    values[index1] = total - values[index1];
    values[index2] = total - values[index2];
}

void flip(int * values, int start, int end) {

    while(start < end) {

        swap(values, start++, end--);
    }
}

void printList(int * values, int total) {

    for(int i = 0; i < total; i++) {

        printf("%d", values[i]);
    }
}

void sortPancakes(int * sizes, int total) {

    int remaining = total;
    int flips = 0;

    while(remaining != 1) {

        const int currentMax = findMax(sizes, remaining);
        const int maxIndex = findIndex(sizes, remaining, currentMax);

        if(maxIndex != 0) {

            flip(sizes, 0, maxIndex);
            flips++;
        }

        flip(sizes, 0, remaining - 1);
        flips++;

        remaining--;
    }
}