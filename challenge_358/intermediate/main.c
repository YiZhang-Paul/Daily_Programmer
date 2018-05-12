#include <stdio.h>
#include <stdlib.h>
#include "header/recordParser.h"
#include "header/linkedList.h"
#include "header/hashset.h"

#define INPUT_FILE "input.txt"

void countWinners(struct node *, struct hashset *, int *);

int main(void) {

    int total = 0;
    struct record **records = parse(INPUT_FILE, &total);
    struct hashset *set = createSet();

    for(int i = 0; i < total; i++) {

        addItem(set, records[i]->winner);
        addItem(set, records[i]->loser);

        struct node *winner = getItem(set, records[i]->winner);
        struct node *loser = getItem(set, records[i]->loser);

        addLosed(loser->losed, winner);
    }

    int winners = 0;
    countWinners(getItem(set, "Villanova"), set, &winners);
    printf("%d\n", winners);

    freeRecords(records, total);
    freeSet(set);

    return 0;
}

void countWinners(struct node * start, struct hashset * set, int * total) {

    for(int i = 0; i < MAX_SIZE; i++) {

        struct node *head = start->losed->items[i];

        while(head != NULL) {

            struct node *team = getItem(set, head->data);

            if(!team->visited) {

                team->visited = true;
                countWinners(team, set, total);
                (*total)++;
            }

            head = head->next;
        }
    }
}