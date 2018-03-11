#include "../header/rider.h"

struct rider * createRider(char * id, int timestamp, int source, int destination) {

    struct rider *rider = malloc(sizeof *rider);

    rider->id = copy(id);
    rider->timestamp = timestamp;
    rider->source = source;
    rider->destination = destination;

    return rider;
}

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