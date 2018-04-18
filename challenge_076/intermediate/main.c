#include <stdio.h>
#include <stdlib.h>

int * repeat(int, int);
int getRandom(int, int);
int test(void);
void countFrequency(int func(void), int, int, int *, int);
void drawGraph(int *, int, int, int);
void createGraph(int func(void), int, int, int);

int main(void) {

    createGraph(test, 2, 12, 10000);

    return 0;
}

int * repeat(int length, int value) {

    int *array = malloc(sizeof *array * length);

    for(int i = 0; i < length; i++) {

        array[i] = value;
    }

    return array;
}

int getRandom(int min, int max) {

    return rand() % (max - min + 1) + min;
}

int test(void) {

    return getRandom(1, 6) + getRandom(1, 6);
}

void countFrequency(int func(void), int min, int totalTest, int * frequency, int totalCases) {

    for(int i = 0; i < totalTest; i++) {

        const int index = func() - min;

        if(index >= 0 && index < totalCases) {

            frequency[index]++;
        }
    }
}

void drawGraph(int * frequency, int min, int totalCases, int totalTest) {

    for(int i = 0; i < totalCases; i++) {

        printf("%s%d: ", i + min < 10 ? " " : "", i + min);

        for(int j = 0; j < frequency[i] / (totalTest * 0.05); j++) {

            printf("#");
        }

        printf("\n");
    }
}

void createGraph(int func(void), int min, int max, int totalTest) {

    const int totalCases = max - min + 1;
    int *frequency = repeat(totalCases, 0);
    countFrequency(func, min, totalTest, frequency, totalCases);
    drawGraph(frequency, min, totalCases, totalTest);

    free(frequency);
}