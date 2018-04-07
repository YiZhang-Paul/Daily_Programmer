#include "../header/point.h"

struct point * createPoint(double x, double y) {

    struct point *point = malloc(sizeof *point);

    point->x = x;
    point->y = y;

    return point;
}