#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include "header/utility.h"
#include "header/linkedList.h"
#include "header/lift.h"
#include "header/rider.h"

#define INPUT_FILE "schedule.txt"
#define LINE_SIZE 256

void initializeAssets(char *, struct node **, struct node **);

int main(void) {

    struct node *lifts = NULL;
    struct node *requests = NULL;
    initializeAssets(INPUT_FILE, &lifts, &requests);

    return 0;
}

void initializeAssets(char * url, struct node ** lifts, struct node ** requests) {

    FILE *file = fopen(url, "r");
    char line[LINE_SIZE];

    if(file) {

        while(!feof(file)) {

            fgets(line, LINE_SIZE, file);
            char **input = split(line, " ");

            if(line[0] == 'C') {

                append(lifts, createLift(input[0], atoi(input[1]), atof(input[2]), atoi(input[3])));
            }
            else if(line[0] == 'R') {

                append(requests, createRider(input[0], atoi(input[1]), atoi(input[2]), atoi(input[3])));
            }

            free(input);
        }
    }

    fclose(file);
}