#include "../header/lines.h"

struct line * createLine(double a, double b, double c) {

    struct line *line = malloc(sizeof *line);
    //by = ax + c
    line->a = a;
    line->b = b;
    line->c = c;

    return line;
}

bool exists(struct line * line) {

    return line->a != 0 || line->b != 0;
}

double findSlope(struct line * line) {

    return line->a / line->b;
}

bool isVertical(struct line * line) {

    return line->a != 0 && line->b == 0;
}

bool isParallel(struct line * line1, struct line * line2) {

    if(isVertical(line1) || isVertical(line2)) {

        return isVertical(line1) && isVertical(line2);
    }

    return findSlope(line1) == findSlope(line2);
}