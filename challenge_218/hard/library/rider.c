#include "../header/rider.h"

struct rider * createRider(char * id, int timeOfRequest, int source, int destination) {

    struct rider *rider = malloc(sizeof *rider);

    rider->id = copy(id);
    rider->timeOfRequest = timeOfRequest;
    rider->source = source;
    rider->destination = destination;

    return rider;
}

//get rider's desired travel direction
int getRiderDirection(struct rider * rider) {

    if(rider->source == rider->destination) {

        return IDLE;
    }

    return rider->destination > rider->source ? UP : DOWN;
}

void freeRider(struct rider * rider) {

    free(rider->id);
    free(rider);
}