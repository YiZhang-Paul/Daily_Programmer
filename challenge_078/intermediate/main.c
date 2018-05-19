#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include "header/linkedList.h"
#include "header/hashTable.h"
#include "header/utility.h"

#define INPUT_FILE "input.txt"
#define LINE_LENGTH 256

void getTasks(struct hashTable *, char **, int);
void getDependency(struct hashTable *, char **, int);
struct hashTable * processFile(char *, void func(struct hashTable *, char **, int));

int main(void) {

    struct hashTable *tasks = processFile(INPUT_FILE, getTasks);
    struct hashTable *dependency = processFile(INPUT_FILE, getDependency);
    struct hashTable *used = createTable();

    while(tasks->size != used->size) {

        for(int i = 0; i < MAX_KEYS; i++) {

            struct node *head = tasks->values[i];

            while(head != NULL) {

                char *key = ((struct dataItem *)head->data)->key;
                char *copiedKey = copyText(key, 0, strlen(key));

                if(contains(used, copiedKey)) {

                    head = head->next;

                    continue;
                }

                if(!contains(dependency, copiedKey)) {

                    add(used, copiedKey, NULL);
                    printf("%s\n", copiedKey);
                }
                else {

                    bool print = true;
                    struct node *dependencies = get(dependency, copiedKey);

                    while(dependencies != NULL) {

                        if(!contains(used, dependencies->data)) {

                            print = false;
                        }

                        dependencies = dependencies->next;
                    }

                    if(print) {

                        add(used, copiedKey, NULL);
                        printf("%s\n", copiedKey);
                    }
                }

                head = head->next;
            }
        }
    }

    freeTable(tasks);
    freeTable(dependency);
    freeTable(used);

    return 0;
}

void getTasks(struct hashTable * table, char ** tasks, int total) {

    for(int i = 0; i < total; i++) {

        add(table, tasks[i], NULL);
    }
}

void getDependency(struct hashTable * table, char ** tasks, int total) {

    struct node *dependency = NULL;

    for(int i = 1; i < total; i++) {

        append(&dependency, copyText(tasks[i], 0, strlen(tasks[i]) - 1));
    }

    add(table, tasks[0], dependency);
}

struct hashTable * processFile(char * fileName, void func(struct hashTable *, char **, int)) {

    FILE *file = fopen(fileName, "r");
    struct hashTable *table = createTable();

    if(file) {

        int total = 0;
        char line[LINE_LENGTH];

        while(!feof(file)) {

            fgets(line, LINE_LENGTH, file);
            appendCharacter(line, ' ');
            char **tasks = splitText(line, &total);
            func(table, tasks, total);
        }
    }

    fclose(file);

    return table;
}