#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include "header/stats.h"
#include "header/utility.h"
#include "header/linkedList.h"
#include "header/lift.h"
#include "header/rider.h"

void initializeAssets(char *, struct node **, struct node **);
bool isEmpty(struct node *);
void updateLifts(struct node *, struct node **, int);

int main(void) {

    int seconds = 0;
    struct node *lifts = NULL;
    struct node *requests = NULL;
    initializeAssets(INPUT_FILE, &lifts, &requests);

    while(requests != NULL || !isEmpty(lifts)) {

        updateLifts(lifts, &requests, seconds++);
    }

    printf("Total Time: %d seconds\n", seconds);

    freeList(&lifts, freeLift);
    freeList(&requests, freeRider);

    return 0;
}

//populate lifts and requests linked list with information from file
void initializeAssets(char * url, struct node ** lifts, struct node ** requests) {

    FILE *file = fopen(url, "r");
    char line[LINE_SIZE];

    if(file) {

        while(!feof(file)) {

            fgets(line, LINE_SIZE, file);
            char **input = split(line, " ");

            if(line[0] == 'C') {
                //lift information
                append(lifts, createLift(input[0], atoi(input[1]), atof(input[2]), atof(input[3]), 0));
            }
            else if(line[0] == 'R') {
                //rider information
                append(requests, createRider(input[0], atoi(input[1]), atoi(input[2]), atoi(input[3])));
            }

            free(input);
        }
    }

    fclose(file);
}

//check if all lifts in linked list are empty
bool isEmpty(struct node * lifts) {

    while(lifts != NULL) {

        struct lift *lift = (struct lift *)lifts->data;

        if(lift->load != 0) {

            return false;
        }

        lifts = lifts->next;
    }

    return true;
}

void updateLifts(struct node * lifts, struct node ** requests, int seconds) {

    while(lifts != NULL) {

        updateLift((struct lift *)lifts->data, requests, seconds);
        lifts = lifts->next;
    }
}