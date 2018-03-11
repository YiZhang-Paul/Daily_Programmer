#ifndef RIDER_H
#define RIDER_H

#include "../header/stats.h"
#include "../header/utility.h"

struct rider {

    char *id;
    int timestamp;
    int source;
    int destination;
};

struct rider * createRider(char *, int, int, int);
int getRiderDirection(struct rider *);
void freeRider(struct rider *);

#endif