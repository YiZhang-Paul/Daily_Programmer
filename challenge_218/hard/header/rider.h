#ifndef RIDER_H
#define RIDER_H

struct rider {

    char *id;
    int timestamp;
    int source;
    int destination;
};

struct rider * createRider(char *, int, int, int);
void freeRider(struct rider *);

#endif