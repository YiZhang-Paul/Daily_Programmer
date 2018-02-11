#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <math.h>

int flip(void);
int getRandom(int, int);

int main(void) {

    //challenge input
    srand((unsigned)time(NULL));
    printf("%d\n", getRandom(5, 9));
    printf("%d\n", getRandom(5, 9));
    printf("%d\n", getRandom(5, 9));
    printf("%d\n", getRandom(5, 9));
    printf("%d\n", getRandom(5, 9));

    return 0;
}

int flip(void) {

    return rand() % 2;
}

int getRandom(int min, int max) {

    int random = min;
    const int power = (int)ceil(log2(max));

    for(int i = 0, total = (int)pow(2, power); i < power; i++) {

        total /= 2;
        random += flip() * total;
    }

    return random <= max ? random : getRandom(min, max);
}