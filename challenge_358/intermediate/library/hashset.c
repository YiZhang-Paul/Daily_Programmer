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

    const unsigned long code = getHashCode(text);

    if(set->items[code] == NULL) {

        return false;
    }

    struct node *head = set->items[code];

    while(head != NULL) {

        if(strcmp((const char *)head->data, text) == 0) {

            return true;
        }

        head = head->next;
    }

    return false;
}

void add(struct hashset * set, char * text) {

    if(contains(set, text)) {

        return;
    }

    const unsigned long code = getHashCode(text);
    append(&(set->items[code]), text);
}

void freeSet(struct hashset * set) {

    for(int i = 0; i < MAX_SIZE; i++) {

        if(set->items[i] != NULL) {

            freeList(&(set->items[i]));
        }
    }

    free(set);
}