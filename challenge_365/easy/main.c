#include <stdio.h>
#include <stdlib.h>
#include <math.h>

long long calculate(int, int, int);

int main(void) {

    printf("%lld\n", calculate(2, 1, 4));
    printf("%lld\n", calculate(2, 2, 4));
    printf("%lld\n", calculate(2, 3, 3));
    printf("%lld\n", calculate(-1, 3, 3));
    printf("%lld\n", calculate(1, 1, 0));
    printf("%lld\n", calculate(1, 2, 0));

    return 0;
}

long long calculate(int base, int arrows, int power) {

    if(arrows == 1) {

        return pow(base, power);
    }

    if(arrows >= 1 && power <= 0) {

        return 1;
    }

    return calculate(base, arrows - 1, calculate(base, arrows, power - 1));
}