#ifndef LIFT_H
#define LIFT_H

#include <math.h>
#include "../header/stats.h"
#include "../header/linkedList.h"
#include "../header/utility.h"
#include "../header/rider.h"

struct lift {

    char *id;
    int capacity;
    int currentLoad;
    struct node *passenger;
    double speed;
    double position;
    int waitTime;
    int waitTimeLeft;
    int direction;
};

struct lift * createLift(char *, int, double, double, int);
static int hasRoom(struct lift *);
static int canMovePass(struct lift *, struct rider *);
static int onFloor(struct lift *, int);
static int onSameDirection(struct lift *, struct rider *);
static int canPickUp(struct lift *, struct rider *);
static int onWait(struct lift *);
struct node * getActiveRequest(struct node *, struct lift *, int);
static void load(struct lift *, struct node *, struct node **);
static void unload(struct lift *);
static void refreshWait(struct lift *);
static void checkWait(struct lift *);
static void checkMove(struct lift *, struct node *);
static void checkIdle(struct lift *, struct node *);
static void move(struct lift *);
void updateLift(struct lift *, struct node **, int);
void freeLift(struct lift *);

#endif