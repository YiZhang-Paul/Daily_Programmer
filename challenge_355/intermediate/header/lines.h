#ifndef LINES_H
#define LINES_H

#include <stdlib.h>
#include <stdbool.h>

struct line {

    double a; //coefficient for x
    double b; //coefficient for y
    double c; //constant
};

struct line * createLine(double, double, double);
bool exists(struct line *);
double findSlope(struct line *);
bool isVertical(struct line *);
bool isParallel(struct line *, struct line *);

#endif