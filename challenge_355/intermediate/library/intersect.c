#include "../header/intersect.h"

struct point * findIntersect(struct line * line1, struct line * line2) {

    if(!exists(line1) || !exists(line2) || isParallel(line1, line2)) {

        return NULL;
    }

    double x = 0;
    double y = 0;

    if(isVertical(line1)) {

        x = line1->c / line1->a * -1;
        y = (line2->a * x + line2->c) / line2->b;
    }
    else if(isVertical(line2)) {

        x = line2->c / line2->a * -1;
        y = (line1->a * x + line1->c) / line1->b;
    }
    else {

        x = (line2->c / line2->b - line1->c / line1->b) / (findSlope(line1) - findSlope(line2));
        y = (line1->a * x + line1->c) / line1->b;
    }

    return createPoint(x, y);
}