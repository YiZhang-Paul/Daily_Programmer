#ifndef PERMUTE_H
#define PERMUTE_H

static int * excludeIndex(int *, int, int);
static int * swapIndex(int *, int, int, int);
static void copyRow(int *, int, int, int *);
static void startPermute(int *, int *, int, int, int *, int *);
void permute(int *, int *, int);

#endif