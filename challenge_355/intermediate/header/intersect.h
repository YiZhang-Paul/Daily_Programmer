#ifndef INTERSECT_H
#define INTERSECT_H

#include <stdbool.h>
#include "../header/point.h"
#include "../header/line.h"

struct point * findIntersect(struct line *, struct line *);

#endif