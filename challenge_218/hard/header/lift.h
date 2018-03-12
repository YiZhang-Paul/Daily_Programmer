#ifndef LIFT_H
#define LIFT_H

#include "stats.h"
#include "linkedList.h"
#include "utility.h"
#include "rider.h"

#define MAX(a, b) ((a) > (b) ? (a) : (b))

struct lift {

    char *id;
    int capacity;
    int load;     //current number of passengers
    struct node *passenger;
    double speed;
    double position;
    int maxWaitTime;
    int waitTimeLeft;
    int direction;
};

struct lift * createLift(char *, int, double, double, int);
static bool isFull(struct lift *);
static bool onFloor(struct lift *, int);
static bool canMoveCross(struct lift *, struct rider *);
static bool sameDirection(struct lift *, struct rider *);
static bool canPickUp(struct lift *, struct rider *);
static bool onWait(struct lift *);
static int maxDestination(struct lift *);
static int getDirection(struct lift *, int);
static struct node * findRequest(struct node *, struct lift *, int);
static void resetWait(struct lift *);
static void checkWait(struct lift *);
static void checkDirection(struct lift *, struct node *);
static void checkIdle(struct lift *, struct node *);
static void move(struct lift *);
static void load(struct lift *, struct node **, int);
static void unload(struct lift *);
void updateLift(struct lift *, struct node **, int);
void freeLift(struct lift *);

#endif