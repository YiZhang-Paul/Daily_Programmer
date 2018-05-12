#include "../header/hashTable.h"

static unsigned long getHashCode(char * key) {

    unsigned long code = 5381;

    for(int i = 0; i < strlen(key); i++) {

        code = ((code << 5) + code) + key[i];
    }

    return code % MAX_SIZE;
}

struct hashTable * createTable() {

    struct hashTable *table = malloc(sizeof *table);

    for(int i = 0; i < MAX_SIZE; i++) {

        table->values[i] = NULL;
    }

    return table;
}

bool contains(struct hashTable * table, char * key) {

    return get(table, key) != NULL;
}

void add(struct hashTable * table, void * data, char * key) {

    if(!contains(table, key)) {

        append(&(table->values[getHashCode(key)]), data, key);
    }
}

struct node * get(struct hashTable * table, char * key) {

    return getNode(table->values[getHashCode(key)], key);
}

void freeTable(struct hashTable * table, void func(void *)) {

    for(int i = 0; i < MAX_SIZE; i++) {

        if(table->values[i] != NULL) {

            freeList(&(table->values[i]), func);
        }
    }

    free(table);
}