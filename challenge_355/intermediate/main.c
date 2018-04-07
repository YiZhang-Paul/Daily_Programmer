#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

struct point {

    double x;
    double y;
};

struct constraint {

    int rows;
    double **matrix;
};

struct point * createPoint(double x, double y) {

    struct point *point = malloc(sizeof *point);

    point->x = x;
    point->y = y;

    return point;
}

struct constraint * createConstraint(int rows) {

    struct constraint *constraint = malloc(sizeof *constraint);

    constraint->rows = rows;
    constraint->matrix = malloc(sizeof *constraint->matrix * rows);

    return constraint;
}

void fillConstraint(struct constraint * constraint, int * option1, int * option2, int * limits) {

    for(int i = 0; i < constraint->rows; i++) {

        constraint->matrix[i] = malloc(sizeof *constraint->matrix[i] * 3);
        constraint->matrix[i][0] = option1[i];
        constraint->matrix[i][1] = option2[i];
        constraint->matrix[i][2] = limits[i];
    }
}

struct constraint * getConstraint(int * option1, int * option2, int * limits, int rows) {

    struct constraint *constraint = createConstraint(rows);
    fillConstraint(constraint, option1, option2, limits);

    return constraint;
}

void freeConstraint(struct constraint * constraint) {

    for(int i = 0; i < constraint->rows; i++) {

        free(constraint->matrix[i]);
    }

    free(constraint->matrix);
    free(constraint);
}

double getSlope(struct constraint * constraint, int row) {

    return constraint->matrix[row][0] / constraint->matrix[row][1] * -1;
}

bool exists(struct constraint * constraint, int row) {

    return constraint->matrix[row][0] != 0 || constraint->matrix[row][1] != 0;
}

bool isVertical(struct constraint * constraint, int row) {

    return constraint->matrix[row][0] != 0 && constraint->matrix[row][1] == 0;
}

bool isParallel(struct constraint * constraint, int row1, int row2) {

    if(isVertical(constraint, row1) || isVertical(constraint, row2)) {

        return isVertical(constraint, row1) && isVertical(constraint, row2);
    }

    return getSlope(constraint, row1) == getSlope(constraint, row2);
}

struct point * findIntersect(struct constraint * constraint, int row1, int row2) {

    if(!exists(constraint, row1) || !exists(constraint, row2) || isParallel(constraint, row1, row2)) {

        return NULL;
    }

    double x = 0;
    double y = 0;
    double *line1 = constraint->matrix[row1];
    double *line2 = constraint->matrix[row2];

    if(isVertical(constraint, row1)) {

        x = line1[2] / line1[0];
        y = (line2[2] - line2[0] * x) / line2[1];
    }
    else if(isVertical(constraint, row2)) {

        x = line2[2] / line2[0];
        y = (line1[2] - line1[0] * x) / line1[1];
    }
    else {

        const double slope = getSlope(constraint, row1) - getSlope(constraint, row2);
        x = (line2[2] / line2[1] - line1[2] / line1[1]) / slope;
        y = getSlope(constraint, row1) * x + line1[2] / line1[1];
    }

    return createPoint(x, y);
}

bool isValid(struct constraint * constraint, struct point * point) {

    if(point == NULL || point->x < 0 || point->y < 0) {

        return false;
    }

    printf("%f %f\n", point->x, point->y);

    for(int i = 0; i < constraint->rows; i++) {

        const double x = constraint->matrix[i][0] * point->x;
        const double y = constraint->matrix[i][1] * point->y;

        if(x + y > constraint->matrix[i][2]) {

            return false;
        }
    }

    return true;
}

bool isBetter(struct point * point, int pumpkin, int apple) {

    return point->x + point->y > pumpkin + apple;
}

struct point * findMaxPies(int * option1, int * option2, int * limits, int rows) {

    int pumpkin = 0;
    int apple = 0;
    struct constraint *constraint = getConstraint(option1, option2, limits, rows);

    for(int i = 0; i < constraint->rows - 1; i++) {

        for(int j = i + 1; j < constraint->rows; j++) {

            struct point *point = findIntersect(constraint, i, j);

            if(isValid(constraint, point) && isBetter(point, pumpkin, apple)) {

                pumpkin = point->x;
                apple = point->y;
            }

            free(point);
        }
    }

    free(constraint);

    return createPoint(pumpkin, apple);
}

int main(void) {

    int option1[] = { 1, 0, 3, 4, 3 };
    int option2[] = { 0, 1, 4, 3, 2 };

    int limits1[] = { 10, 14, 10, 42, 24 };
    struct point *point1 = findMaxPies(option1, option2, limits1, sizeof limits1 / sizeof(int));
    printf("%0.0f %0.0f\n\n", point1->x, point1->y);

    free(point1);


    int limits2[] = { 12, 4, 40, 30, 40 };
    struct point *point2 = findMaxPies(option1, option2, limits2, sizeof limits2 / sizeof(int));
    printf("%0.0f %0.0f\n\n", point2->x, point2->y);

    free(point2);


    int limits3[] = { 12, 14, 20, 42, 24 };
    struct point *point3 = findMaxPies(option1, option2, limits3, sizeof limits3 / sizeof(int));
    printf("%0.0f %0.0f\n\n", point3->x, point3->y);

    free(point3);

    return 0;
}