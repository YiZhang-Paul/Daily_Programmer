#include "../header/utility.h"
#include "../header/lift.h"

struct lift * createLift(char * id, int capacity, double speed, int position) {

    struct lift *lift = malloc(sizeof *lift);

    lift->id = copy(id);
    lift->capacity = capacity;
    lift->speed = speed;
    lift->position = position;

    return lift;
}

void freeLift(struct lift * lift) {

    free(lift->id);
    free(lift);
}