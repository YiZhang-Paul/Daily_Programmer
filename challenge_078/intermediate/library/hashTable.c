#include "../header/hashTable.h"
#include "../header/utility.h"

static unsigned long getHashCode(char * key) {

    unsigned long code = 5381;

    for(int i = 0; i < strlen(key); i++) {

        code = ((code << 5) + code) + key[i];
    }

    return code % MAX_KEYS;
}

struct dataItem * createItem(char * key, void * data) {

    struct dataItem *item = malloc(sizeof *item);

    item->key = copyText(key, 0, strlen(key) - 1);
    item->data = data;

    return item;
}

struct hashTable * createTable() {

    struct hashTable *table = malloc(sizeof *table);

    for(int i = 0; i < MAX_KEYS; i++) {

        table->values[i] = NULL;
    }

    return table;
}

void add(struct hashTable * table, char * key, void * data) {

    if(contains(table, key)) {

        return;
    }

    const int code = getHashCode(key);
    struct dataItem *item = createItem(key, data);
    append(&(table->values[code]), item);
}

void * get(struct hashTable * table, char * key) {

    const int code = getHashCode(key);
    struct node *head = table->values[code];

    while(head != NULL) {

        char *currentKey = ((struct dataItem *)head->data)->key;

        if(strcmp(currentKey, key) == 0) {

            return head->data;
        }

        head = head->next;
    }

    return NULL;
}

bool contains(struct hashTable * table, char * key) {

    return get(table, key) != NULL;
}

void freeItem(void * item) {

    struct dataItem *dataItem = (struct dataItem *)item;
    free(dataItem->key);
    freeList((struct node **)&dataItem->data, free);
    free(dataItem);
}

void freeTable(struct hashTable * table) {

    for(int i = 0; i < MAX_KEYS; i++) {

        if(table->values[i] != NULL) {

            freeList(&(table->values[i]), freeItem);
        }
    }

    free(table);
}