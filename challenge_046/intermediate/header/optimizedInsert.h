#ifndef OPTIMIZED_INSERT_H
#define OPTIMIZED_INSERT_H

#define NOT_FOUND -1
#define EMPTY_SLOT -2

static int countEmptyOnLeft(int *, int);
static int countEmptyOnRight(int *, int, int);
static int getInsertIndexToLeft(int *, int);
static int getInsertIndexToRight(int *, int, int);
static int getInsertIndex(int, int *, int, int *, int);
static int optimizedInsert(int);
double getOptimizedChance(int, int);

#endif