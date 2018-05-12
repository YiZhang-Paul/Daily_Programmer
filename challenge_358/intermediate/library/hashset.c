#include "../header/hashset.h"

static unsigned long getHashCode(char * text) {

    unsigned long code = 5381;

    for(int i = 0; i < strlen(text); i++) {

        code = ((code << 5) + code) + text[i];
    }

    return code % MAX_SIZE;
}

struct hashset * createSet() {

    struct hashset *set = malloc(sizeof *set);

    for(int i = 0; i < MAX_SIZE; i++) {

        set->items[i] = NULL;
    }

    return set;
}

bool contains(struct hashset * set, char * text) {

    return getItem(set, text) != NULL;
}

void addItem(struct hashset * set, char * text) {

    if(contains(set, text)) {

        return;
    }

    append(&(set->items[getHashCode(text)]), text);
}

struct node * getItem(struct hashset * set, char * text) {

    return getNode(set->items[getHashCode(text)], text);
}

void freeSet(struct hashset * set) {

    for(int i = 0; i < MAX_SIZE; i++) {

        if(set->items[i] != NULL) {

            freeList(&(set->items[i]));
        }
    }

    free(set);
}