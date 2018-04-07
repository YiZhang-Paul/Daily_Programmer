#ifndef CONSTRAINT_H
#define CONSTRAINT_H

#include <stdlib.h>

struct constraint {

    int rows;
    double **matrix;
};

static struct constraint * initializeConstraint(int);
static void fillConstraint(struct constraint *, int *, int *, int *);
struct constraint * createConstraint(int *, int *, int *, int);
void freeConstraint(struct constraint *);

#endif