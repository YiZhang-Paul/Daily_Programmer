#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "header/recordParser.h"
#include "header/linkedList.h"
#include "header/hashTable.h"
#include "header/team.h"

#define INPUT_FILE "input.txt"

struct hashTable * createGraph(struct record **, int);
void countWinners(char *, struct hashTable *, int *);

int main(void) {

    int total = 0;
    struct record **records = parse(INPUT_FILE, &total);
    struct hashTable *teams = createGraph(records, total);

    int winners = 0;
    countWinners("Villanova", teams, &winners);
    printf("Total Winners: %d\n", winners);

    freeRecords(records, total);
    freeTable(teams, freeTeam);

    return 0;
}

struct hashTable * createGraph(struct record ** records, int total) {

    struct hashTable *graph = createTable();

    for(int i = 0; i < total; i++) {

        if(!contains(graph, records[i]->winner)) {

            add(graph, createTeam(records[i]->winner), records[i]->winner);
        }

        if(!contains(graph, records[i]->loser)) {

            add(graph, createTeam(records[i]->loser), records[i]->loser);
        }

        struct team *loser = get(graph, records[i]->loser)->data;
        add(loser->losed, records[i]->winner, records[i]->winner);
    }

    return graph;
}

void countWinners(char * name, struct hashTable * teams, int * total) {

    if(!contains(teams, name)) {

        return;
    }

    struct team *team = get(teams, name)->data;

    for(int i = 0; i < MAX_SIZE; i++) {

        struct node *head = team->losed->values[i];

        while(head != NULL) {

            struct team *losed = get(teams, head->key)->data;

            if(!losed->visited) {

                (*total)++;
                losed->visited = true;
                countWinners(head->key, teams, total);
            }

            head = head->next;
        }
    }
}