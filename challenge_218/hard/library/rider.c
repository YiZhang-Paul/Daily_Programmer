#include "../header/utility.h"
#include "../header/rider.h"

struct rider * createRider(char * id, int timestamp, int source, int destination) {

    struct rider *rider = malloc(sizeof *rider);

    rider->id = copy(id);
    rider->timestamp = timestamp;
    rider->source = source;
    rider->destination = destination;

    return rider;
}

void freeRider(struct rider * rider) {

    free(rider->id);
    free(rider);
}