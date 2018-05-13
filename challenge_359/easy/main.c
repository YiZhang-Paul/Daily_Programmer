#include <stdio.h>
#include <stdlib.h>

int * mix(int *, int, int *, int);

int main(void) {

    return 0;
}

int * mix(int * list1, int length1, int * list2, int length2) {

    int *mixed = malloc(sizeof *mixed * (length1 + length2));
    int i = 0, j = 0, counter = 0;

    while(i < length1 || j < length2) {

        if(i < length1) {

            mixed[counter++] = list1[i++];
        }

        if(j < length2) {

            mixed[counter++] = list2[j++];
        }
    }

    return mixed;
}