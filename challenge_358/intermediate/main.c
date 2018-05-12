#include <stdio.h>
#include <stdlib.h>
#include "header/recordParser.h"

#define INPUT_FILE "input.txt"

int main(void) {

    int total = 0;
    parse(INPUT_FILE, &total);

    return 0;
}