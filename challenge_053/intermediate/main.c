#include <stdio.h>
#include <stdlib.h>
#include <sys/timeb.h>

#define DEFAULT_SEED 123456789

int seed = 0;

int getRandom(void);
long long getTime(void);

int main(void) {

    const long long now = getTime();

    for(int i = 0; i < 10000000; i++) {

        getRandom();
    }

    printf("Time Spent: %lldms\n", getTime() - now);

    return 0;
}

int getRandom(void) {

    if(seed == 0) {

        seed = DEFAULT_SEED;
    }
    else {

        seed = ((long long)22695477 * seed + 12345) % 1073741824;
    }

    return seed;
}

long long getTime(void) {

    struct timeb now;
    ftime(&now);

    return (long long)now.time * 1000 + now.millitm;
}