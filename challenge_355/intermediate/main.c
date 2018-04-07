#include <stdio.h>
#include <stdlib.h>

struct constraint {

    int rows;
    int **matrix;
};

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

int main(void) {

    int option1[] = { 1, 0, 3, 4, 3 };
    int option2[] = { 0, 1, 4, 3, 2 };
    int limits[] = { 10, 14, 10, 42, 24 };
    struct constraint *constraint = getConstraint(option1, option2, limits, sizeof limits / sizeof(int));

    for(int i = 0; i < constraint->rows; i++) {

        for(int j = 0; j < 3; j++) {

            printf("%d ", constraint->matrix[i][j]);
        }

        printf("\n");
    }

    free(constraint);

    return 0;
}