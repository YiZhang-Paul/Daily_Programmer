#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include "header/point.h"
#include "header/constraint.h"
#include "header/intersect.h"

bool isSatisfied(struct constraint *, struct point *);
bool isOptimal(struct point *, int, int);
struct point * findMaxPies(int *, int *, int *, int);
void showResult(int *, int *, int *, int);

int main(void) {

    int recipe1[] = { 1, 0, 3, 4, 3 };
    int recipe2[] = { 0, 1, 4, 3, 2 };

    int limits1[] = { 10, 14, 10, 42, 24 };
    showResult(recipe1, recipe2, limits1, sizeof limits1 / sizeof(int));

    int limits2[] = { 12, 4, 40, 30, 40 };
    showResult(recipe1, recipe2, limits2, sizeof limits2 / sizeof(int));

    int limits3[] = { 12, 14, 20, 42, 24 };
    showResult(recipe1, recipe2, limits3, sizeof limits3 / sizeof(int));

    return 0;
}

//check if given point satisfies all constraints
bool isSatisfied(struct constraint * constraint, struct point * point) {

    if(point == NULL) {

        return false;
    }

    for(int i = 0; i < constraint->rows; i++) {

        const double *row = constraint->matrix[i];
        const double x = row[0] * (int)point->x;
        const double y = row[1] * (int)point->y;

        if(i < constraint->rows - 2 && x + y > row[2]) {

            return false;
        }

        if(i >= constraint->rows - 2 && x + y < row[2]) {

            return false;
        }
    }

    return true;
}

bool isOptimal(struct point * point, int pumpkin, int apple) {

    return (int)point->x + (int)point->y > pumpkin + apple;
}

struct line * rowToLine(double * row) {

    return createLine(-row[0], row[1], row[2]);
}

struct point * findMaxPies(int * recipe1, int * recipe2, int * limits, int total) {

    int pumpkin = 0;
    int apple = 0;
    struct constraint *constraint = createConstraint(recipe1, recipe2, limits, total);

    for(int i = 0; i < constraint->rows - 1; i++) {

        struct line *line1 = rowToLine(constraint->matrix[i]);

        for(int j = i + 1; j < constraint->rows; j++) {

            struct line *line2 = rowToLine(constraint->matrix[j]);
            struct point *point = findIntersect(line1, line2);
            //test all corners in feasible area
            if(isSatisfied(constraint, point) && isOptimal(point, pumpkin, apple)) {

                pumpkin = (int)point->x;
                apple = (int)point->y;
            }

            free(line2);
            free(point);
        }

        free(line1);
    }

    freeConstraint(constraint);

    return createPoint(pumpkin, apple);
}

void showResult(int * recipe1, int * recipe2, int * limits, int total) {

    struct point *point = findMaxPies(recipe1, recipe2, limits, total);
    printf("%0.0f Pumpkin Pies and %0.0f Apple Pies.\n", point->x, point->y);

    free(point);
}