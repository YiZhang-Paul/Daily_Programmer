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

    table->size = 0;

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
    table->size++;
}

void * get(struct hashTable * table, char * key) {

    struct node *head = table->values[getHashCode(key)];

    while(head != NULL) {

        char *currentKey = ((struct dataItem *)head->data)->key;

        if(strcmp(currentKey, key) == 0) {

            return ((struct dataItem *)head->data)->data;
        }

        head = head->next;
    }

    return NULL;
}

bool contains(struct hashTable * table, char * key) {

    struct node *head = table->values[getHashCode(key)];

    while(head != NULL) {

        char *currentKey = ((struct dataItem *)head->data)->key;

        if(strcmp(currentKey, key) == 0) {

            return true;
        }

        head = head->next;
    }

    return false;
}

static bool removeAtHead(struct node ** head, char * key) {

    char *currentKey = ((struct dataItem *)(*head)->data)->key;

    if(strcmp(currentKey, key) != 0) {

        return false;
    }

    struct node *previous = *head;
    *head = (*head)->next;
    freeNode(previous, freeItem);

    return true;
}

static bool removeAfterHead(struct node * head, char * key) {

    struct node *previous = head;
    struct node *current = head->next;

    while(current != NULL) {

        char *currentKey = ((struct dataItem *)current->data)->key;

        if(strcmp(currentKey, key) == 0) {

            previous->next = current->next;
            freeNode(current, freeItem);

            return true;
        }

        previous = current;
        current = current->next;
    }

    return false;
}

void removeKey(struct hashTable * table, char * key) {

    if(!contains(table, key)) {

        return;
    }

    struct node **head = &table->values[getHashCode(key)];

    if(!removeAtHead(head, key)) {

        removeAfterHead(*head, key);
    }

    table->size--;
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