#ifndef LIFT_H
#define LIFT_H

struct lift {

    char *id;
    int capacity;
    double speed;
    int position;
};

struct lift * createLift(char *, int, double, int);
void freeLift(struct lift *);

#endif