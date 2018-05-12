#include <stdio.h>
#include <stdlib.h>
#include "header/recordParser.h"
#include "header/linkedList.h"
#include "header/hashset.h"

#define INPUT_FILE "input.txt"

int main(void) {

    int total = 0;
    struct record **records = parse(INPUT_FILE, &total);
    struct hashset *set = createSet();

    for(int i = 0; i < total; i++) {

        addItem(set, records[i]->winner);
        addItem(set, records[i]->loser);

        struct node *winner = getItem(set, records[i]->winner);
        struct node *loser = getItem(set, records[i]->loser);

        addLosed(&(loser->losed), winner);
    }

    freeRecords(records, total);
    freeSet(set);

    return 0;
}