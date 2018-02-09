#ifndef PERMUTE_H
#define PERMUTE_H

static int * excludeIndex(int *, int, int);
static int * replaceIndex(int *, int, int, int);
static void copyRow(int *, int, int, int *);
static void startPermute(int *, int *, int, int, int *, int *);
static void swap(int *, int, int);
static void reverse(int *, int, int);
void permute(int *, int *, int);
int * nextPermute(int *, int);

#endif