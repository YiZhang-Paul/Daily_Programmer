#include "../header/rider.h"

struct rider * createRider(char * id, int timeOfRequest, int source, int destination) {

    struct rider *rider = malloc(sizeof *rider);

    rider->id = copyText(id);
    rider->timeOfRequest = timeOfRequest;
    rider->source = source;
    rider->destination = destination;

    return rider;
}

struct rider * copyRider(struct rider * rider) {

    struct rider *copy = malloc(sizeof *copy);
    memcpy((void *)copy, (void *)rider, sizeof *rider);
    copy->id = copyText(rider->id);

    return copy;
}

//get rider's desired travel direction
int getRiderDirection(struct rider * rider) {

    if(rider->source == rider->destination) {

        return IDLE;
    }

    return rider->destination > rider->source ? UP : DOWN;
}

void freeRider(void * rider) {

    struct rider *toFree = (struct rider *)rider;
    free(toFree->id);
    free(toFree);
}