#include "../header/constraint.h"

static struct constraint * initializeConstraint(int rows) {

    struct constraint *constraint = malloc(sizeof *constraint);

    constraint->rows = rows + 2;
    constraint->matrix = malloc(sizeof *constraint->matrix * constraint->rows);

    return constraint;
}

static void fillConstraint(struct constraint * constraint, int * recipe1, int * recipe2, int * limits) {

    for(int i = 0; i < constraint->rows; i++) {

        constraint->matrix[i] = malloc(sizeof *constraint->matrix[i] * 3);
        //upper limits for each ingredient
        if(i < constraint->rows - 2) {

            constraint->matrix[i][0] = recipe1[i];
            constraint->matrix[i][1] = recipe2[i];
            constraint->matrix[i][2] = limits[i];

            continue;
        }
        //lower limits for each recipe
        constraint->matrix[i][0] = i == constraint->rows - 1 ? 0 : 1;
        constraint->matrix[i][1] = i == constraint->rows - 1 ? 1 : 0;
        constraint->matrix[i][2] = 0;
    }
}

struct constraint * createConstraint(int * recipe1, int * recipe2, int * limits, int rows) {

    struct constraint *constraint = initializeConstraint(rows);
    fillConstraint(constraint, recipe1, recipe2, limits);

    return constraint;
}

void freeConstraint(struct constraint * constraint) {

    for(int i = 0; i < constraint->rows; i++) {

        free(constraint->matrix[i]);
    }

    free(constraint->matrix);
    free(constraint);
}