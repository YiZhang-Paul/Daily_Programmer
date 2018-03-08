#include <stdio.h>
#include <stdlib.h>

#define MAX(a, b) ((a) > (b) ? (a) : (b))

int findMax(int *, int);
int findIndex(int *, int, int);
int findMaxIndex(int *, int);
void swap(int *, int, int);
void flip(int *, int);
void printList(int *, int);
void tryFlip(int *, int, int *);
void sortPancakes(int *, int);

int main(void) {

    int cakes1[] = { 3, 1, 2 };
    sortPancakes(cakes1, 3);

    int cakes2[] = { 7, 6, 4, 2, 6, 7, 8, 7 };
    sortPancakes(cakes2, 8);

    int cakes3[] = { 11, 5, 12, 3, 10, 3, 2, 5 };
    sortPancakes(cakes3, 8);

    int cakes4[] = { 3, 12, 8, 12, 4, 7, 10, 3, 8, 10 };
    sortPancakes(cakes4, 10);

    return 0;
}

int findMax(int * values, int total) {

    int max = 0;

    for(int i = 0; i < total; i++) {

        max = MAX(max, values[i]);
    }

    return max;
}

//find index of first element found with given value
int findIndex(int * values, int total, int toFind) {

    for(int i = 0; i < total; i++) {

        if(values[i] == toFind) {

            return i;
        }
    }

    return -1;
}

//find first index found on maximum value in a given list
int findMaxIndex(int * values, int total) {

    const int max = findMax(values, total);

    return findIndex(values, total, max);
}

void swap(int * values, int index1, int index2) {

    const int total = values[index1] + values[index2];
    values[index1] = total - values[index1];
    values[index2] = total - values[index2];
}

//reverse all elements from index 0 to index N - 1
void flip(int * values, int end) {

    int start = 0;

    while(start < end) {

        swap(values, start++, end--);
    }
}

void printList(int * values, int total) {

    for(int i = 0; i < total; i++) {

        printf("%d ", values[i]);
    }

    printf("\n");
}

//flip maximum value to front of list if not already at front
void tryFlip(int * values, int index, int * counter) {
    //when maximum value is already at front
    if(index == 0) {

        return;
    }

    flip(values, index);
    (*counter)++;
}

void sortPancakes(int * sizes, int total) {

    int flips = 0;
    int remain = total;

    while(remain > 1) {
        //flip maximum value to front, then to the back
        tryFlip(sizes, findMaxIndex(sizes, remain), &flips);
        tryFlip(sizes, remain - 1, &flips);
        remain--;
    }

    printf("(Flips: %d) ", flips);
    printList(sizes, total);
}