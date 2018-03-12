#include "../header/lift.h"

struct lift * createLift(char * id, int capacity, double speed, double position, int waitTime) {

    struct lift *lift = malloc(sizeof *lift);

    lift->id = copy(id);
    lift->capacity = capacity;
    lift->load = 0;
    lift->passenger = NULL;
    lift->speed = speed;
    lift->position = position;
    lift->maxWaitTime = waitTime;
    lift->waitTimeLeft = 0;
    lift->direction = IDLE;

    return lift;
}

static bool isFull(struct lift * lift) {

    return lift->load >= lift->capacity;
}

static bool onFloor(struct lift * lift, int targetFloor) {

    return fabs(lift->position - targetFloor) < lift->speed;
}

//check if lift can move cross the rider without changing direction
static bool canMoveCross(struct lift * lift, struct rider * rider) {

    const bool onSameFloor = onFloor(lift, rider->source);
    //can always move cross riders on same floor as the lift
    if(onSameFloor || lift->direction == IDLE) {

        return onSameFloor;
    }
    //riders must be above/below the lift when moving up/down
    if(lift->direction == UP) {

        return rider->source > lift->position;
    }

    return rider->source < lift->position;
}

//check if lift direction is the same as rider's desired travel direction
static bool sameDirection(struct lift * lift, struct rider * rider) {

    return lift->direction == getRiderDirection(rider);
}

static bool canPickUp(struct lift * lift, struct rider * rider) {

    if(isFull(lift)) {

        return false;
    }

    if(lift->direction == IDLE) {

        return true;
    }
    //will only serve riders on the path with same travel direction while lift is moving
    return canMoveCross(lift, rider) && sameDirection(lift, rider);
}

static bool onWait(struct lift * lift) {

    return lift->waitTimeLeft > 0;
}

//find highest destination floor requested by current passengers
static int maxDestination(struct lift * lift) {

    int max = 1;
    struct node *passengers = lift->passenger;

    while(passengers != NULL) {

        struct rider *rider = (struct rider *)passengers->data;
        max = MAX(max, rider->destination);
        passengers = passengers->next;
    }

    return max;
}

static int getDirection(struct lift * lift, int targetFloor) {

    if(!onFloor(lift, targetFloor)) {

        return targetFloor > lift->position ? UP : DOWN;
    }

    return lift->direction;
}

static struct node * findRequest(struct node * requests, struct lift * lift, int seconds) {

    while(requests != NULL) {

        struct rider *rider = (struct rider *)requests->data;

        if(rider->timeOfRequest > seconds) {

            return NULL;
        }

        if(canPickUp(lift, rider)) {

            return requests;
        }

        requests = requests->next;
    }

    return NULL;
}

static void resetWait(struct lift * lift) {

    lift->waitTimeLeft = lift->maxWaitTime;
}

//update wait timer if necessary
static void checkWait(struct lift * lift) {

    if(onWait(lift)) {

        lift->waitTimeLeft = MAX(0, lift->waitTimeLeft - 1);
    }
}

static void checkDirection(struct lift * lift, struct node * request) {

    if(request == NULL && lift->load == 0) {

        return;
    }
    //passengers on board will always have higher priority to be served
    struct rider *rider = lift->load == 0 ?
        (struct rider *)request->data :
        (struct rider *)lift->passenger->data;

    lift->direction = lift->load == 0 ?
        getDirection(lift, rider->source) :
        getDirection(lift, rider->destination);
}

//check if lift should become idling
static void checkIdle(struct lift * lift, struct node * request) {

    const int outOfRange = lift->position < 1 || lift->position > maxDestination(lift);
    const int noActivity = request == NULL && lift->load == 0;

    if(outOfRange || noActivity) {

        lift->direction = IDLE;
    }
}

static void move(struct lift * lift) {

    lift->position += lift->speed * lift->direction;
}

static void load(struct lift * lift, struct node ** requests, int seconds) {

    struct node *request = *requests;

    while(request != NULL) {

        struct rider *rider = (struct rider *)request->data;

        if(rider->timeOfRequest > seconds) {

            break;
        }
        //load every valid passenger
        if(onFloor(lift, rider->source) && canPickUp(lift, rider)) {

            append(&lift->passenger, rider);
            lift->load++;
            //remove original request
            delete(requests, request, freeRider);
            request = *requests;

            if(!onWait(lift)) {

                resetWait(lift);
            }

            continue;
        }

        request = request->next;
    }
}

static void unload(struct lift * lift) {

    bool unloaded = false;
    struct node *passengers = lift->passenger;

    while(passengers != NULL) {

        struct rider *rider = (struct rider *)passengers->data;
        //unload every rider who reaches destination
        if(onFloor(lift, rider->destination)) {

            delete(&lift->passenger, passengers, freeRider);
            lift->load--;
            unloaded = true;
            passengers = lift->passenger;

            continue;
        }

        passengers = passengers->next;
    }

    if(unloaded && !onWait(lift)) {

        resetWait(lift);
    }
}

void updateLift(struct lift * lift, struct node ** requests, int seconds) {

    if(onFloor(lift, (int)lift->position)) {

        load(lift, requests, seconds);
        unload(lift);
        checkWait(lift);
    }
    //check lift movement
    struct node *request = findRequest(*requests, lift, seconds);
    checkIdle(lift, request);
    checkDirection(lift, request);

    if(!onWait(lift)) {

        move(lift);
    }
}

void freeLift(struct lift * lift) {

    free(lift->id);
    free(lift);
}