#ifndef UTILITY_H
#define UTILITY_H

#define LINE_LENGTH 128

struct content {

    char **lines;
    int totalLines;
};

struct content readContent(char *, int, int);
void freeContent(struct content *);

#endif