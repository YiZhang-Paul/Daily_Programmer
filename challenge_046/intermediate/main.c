#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "header/randomInsert.h"
#include "header/optimizedInsert.h"

int main(void) {

    srand(time(NULL));

    printf("Win Rate (Random): %0.2f%%\n", getChance(1000000, 8) * 100);
    printf("Win Rate (Optimized): %0.2f%%\n", getOptimizedChance(1000000, 8) * 100);

    return 0;
}