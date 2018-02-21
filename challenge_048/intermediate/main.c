#include <stdio.h>
#include <stdlib.h>
#include <math.h>

#define THRESHOLD 20000

int transform(int);
int knuthAlgorithm(int *, int);

int main(void) {

    int inputs[11] = { 1, 13, 4, 5, 12, 8, 9, 11, 12, 7, 15 };
    knuthAlgorithm(inputs, 11);

    return 0;
}

int transform(int number) {

    double quadratic = pow((double)number, 4.0);

    return quadratic + quadratic / number - number / 2;
}

int knuthAlgorithm(int * inputs, int total) {

    for(int i = 0; i < total; i++) {

        const int transformed = transform(inputs[i]);

        if(transformed > THRESHOLD) {

            printf("Threshold Reached.\n");

            continue;
        }

        printf("Result: %d\n", transformed);
    }
}