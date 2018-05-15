#ifndef INTERSECT_H
#define INTERSECT_H

#include <stdbool.h>
#include "../header/point.h"
#include "../header/lines.h"

struct point * findIntersect(struct line *, struct line *);

#endif