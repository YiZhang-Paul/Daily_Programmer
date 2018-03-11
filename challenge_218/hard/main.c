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
int isEmpty(struct node *);
void updateLifts(struct node *, struct node **, int);

int main(void) {

    int seconds = 0;
    struct node *lifts = NULL;
    struct node *requests = NULL;
    initializeAssets(INPUT_FILE, &lifts, &requests);

    while(requests != NULL || !isEmpty(lifts)) {

        updateLifts(lifts, &requests, seconds++);
    }

    printf("Total Time: %d seconds", seconds);

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

                append(lifts, createLift(input[0], atoi(input[1]), atof(input[2]), atof(input[3]), 5));
            }
            else if(line[0] == 'R') {

                append(requests, createRider(input[0], atoi(input[1]), atoi(input[2]), atoi(input[3])));
            }

            free(input);
        }
    }

    fclose(file);
}

int isEmpty(struct node * lifts) {

    while(lifts != NULL) {

        struct lift *lift = (struct lift *)lifts->data;

        if(lift->currentLoad != 0) {

            return 0;
        }

        lifts = lifts->next;
    }

    return 1;
}

void updateLifts(struct node * lifts, struct node ** requests, int second) {

    while(lifts != NULL) {

        updateLift((struct lift *)lifts->data, requests, second);
        lifts = lifts->next;
    }
}