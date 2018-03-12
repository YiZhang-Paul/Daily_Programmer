#ifndef RIDER_H
#define RIDER_H

#include "stats.h"
#include "utility.h"

struct rider {

    char *id;
    int timeOfRequest;
    int source;         //current floor
    int destination;    //destination floor
};

struct rider * createRider(char *, int, int, int);
struct rider * copyRider(struct rider *);
int getRiderDirection(struct rider *);
void freeRider(void *);

#endif