#include "../header/lift.h"

#define MAX(a, b) ((a) > (b) ? (a) : (b))

struct lift * createLift(char * id, int capacity, double speed, double position, int waitTime) {

    struct lift *lift = malloc(sizeof *lift);

    lift->id = copy(id);
    lift->capacity = capacity;
    lift->currentLoad = 0;
    lift->passenger = NULL;
    lift->speed = speed;
    lift->position = position;
    lift->waitTime = waitTime;
    lift->waitTimeLeft = 0;
    lift->direction = IDLE;

    return lift;
}

static int hasRoom(struct lift * lift) {

    return lift->currentLoad < lift->capacity;
}

static int canMovePass(struct lift * lift, struct rider * rider) {

    if(lift->direction == IDLE) {

        return rider->source == lift->position;
    }

    if(lift->direction == UP) {

        return rider->source >= lift->position;
    }

    return rider->source <= lift->position;
}

static int onFloor(struct lift * lift, int targetFloor) {

    if(floor(lift->position) != targetFloor) {

        return 0;
    }

    return lift->position - floor(lift->position) < lift->speed;
}

static int onSameDirection(struct lift * lift, struct rider * rider) {

    return lift->direction == getRiderDirection(rider);
}

static int canPickUp(struct lift * lift, struct rider * rider) {

    if(!hasRoom(lift)) {

        return 0;
    }

    if(lift->direction == IDLE) {

        return 1;
    }

    return canMovePass(lift, rider) && onSameDirection(lift, rider);
}

static int onWait(struct lift * lift) {

    return lift->waitTimeLeft != 0;
}

struct node * getActiveRequest(struct node * requests, struct lift * lift, int second) {

    while(requests != NULL) {

        struct rider *rider = (struct rider *)requests->data;

        if(rider->timestamp > second) {

            return NULL;
        }

        if(canPickUp(lift, rider)) {

            return requests;
        }

        requests = requests->next;
    }

    return NULL;
}

static void load(struct lift * lift, struct node * request, struct node ** allRequests) {

    if(request == NULL) {

        return;
    }

    struct rider *rider = (struct rider *)request->data;

    if(onFloor(lift, rider->source)) {

        append(&lift->passenger, rider);
        lift->currentLoad++;
        delete(allRequests, request);
        refreshWait(lift);
    }
}

static void unload(struct lift * lift) {

    if(lift->currentLoad == 0) {

        return;
    }

    int unloaded = 0;
    struct node *passenger = lift->passenger;

    while(passenger != NULL) {

        if(onFloor(lift, ((struct rider *)passenger->data)->destination)) {

            delete(&lift->passenger, passenger);
            lift->currentLoad--;
            unloaded = 1;
            passenger = lift->passenger;

            continue;
        }

        passenger = passenger->next;
    }

    if(unloaded) {

        refreshWait(lift);
    }
}

static void refreshWait(struct lift * lift) {

    lift->waitTimeLeft = lift->waitTime;
}

static void checkWait(struct lift * lift) {

    if(onWait(lift)) {

        lift->waitTimeLeft = MAX(0, lift->waitTimeLeft - 1);
    }
}

static void checkMove(struct lift * lift, struct node * request) {

    if(request == NULL && lift->currentLoad == 0) {

        return;
    }

    struct rider *rider = NULL;

    if(lift->currentLoad == 0) {

        rider = (struct rider*)request->data;

        if(rider->source != lift->position) {

            lift->direction = rider->source > lift->position ? UP : DOWN;
        }

        return;
    }

    rider = (struct rider *)lift->passenger->data;

    if(rider->destination != lift->position) {

        lift->direction = rider->destination > lift->position ? UP : DOWN;
    }
}

static void checkIdle(struct lift * lift, struct node * request) {

    if(lift->currentLoad == 0) {

        if(request == NULL) {

            lift->direction = IDLE;
        }
    }
}

static void move(struct lift * lift) {

    lift->position += lift->speed * lift->direction;
}

void updateLift(struct lift * lift, struct node ** requests, int second) {

    struct node *request = getActiveRequest(*requests, lift, second);

    load(lift, request, requests);
    unload(lift);
    checkWait(lift);

    if(lift->direction == IDLE) {

        checkMove(lift, request);
    }
    else {

        checkIdle(lift, request);
    }

    if(!onWait(lift)) {

        move(lift);
    }
}

void freeLift(struct lift * lift) {

    free(lift->id);
    free(lift);
}