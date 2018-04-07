#ifndef POINT_H
#define POINT_H

#include <stdlib.h>

struct point {

    double x;
    double y;
};

struct point * createPoint(double, double);

#endif