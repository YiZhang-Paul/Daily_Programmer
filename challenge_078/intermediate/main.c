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
bool hasDependency(char *, struct hashTable *, struct hashTable *);
char ** getTaskList(char *, int *);
void printTaskList(char **, int);
void freeTaskList(char **, int);

int main(void) {

    int total = 0;
    char **list = getTaskList(INPUT_FILE, &total);

    printTaskList(list, total);

    freeTaskList(list, total);

    return 0;
}

void getTasks(struct hashTable * table, char ** tasks, int total) {

    for(int i = 0; i < total; i++) {

        add(table, tasks[i], NULL);
    }
}

void getDependency(struct hashTable * table, char ** tasks, int total) {

    struct node *dependencies = NULL;

    for(int i = 1; i < total; i++) {

        append(&dependencies, copyText(tasks[i], 0, strlen(tasks[i]) - 1));
    }

    add(table, tasks[0], dependencies);
}

struct hashTable * processFile(char * input, void func(struct hashTable *, char **, int)) {

    FILE *file = fopen(input, "r");
    struct hashTable *result = createTable();

    if(file) {

        char line[LINE_LENGTH];

        while(!feof(file)) {

            fgets(line, LINE_LENGTH, file);
            appendCharacter(line, ' ');
            int total = 0;
            char **tasks = splitText(line, &total);
            func(result, tasks, total);
        }
    }

    fclose(file);

    return result;
}

bool hasDependency(char * task, struct hashTable * dependency, struct hashTable * listed) {

    if(!contains(dependency, task)) {

        return false;
    }

    struct node *dependencies = get(dependency, task);

    while(dependencies != NULL) {

        if(!contains(listed, dependencies->data)) {

            return true;
        }

        dependencies = dependencies->next;
    }

    return false;
}

char ** getTaskList(char * input, int * total) {

    *total = 0;
    char **list = malloc(sizeof *list * (*total + 1));
    struct hashTable *tasks = processFile(input, getTasks);
    struct hashTable *dependency = processFile(input, getDependency);
    struct hashTable *listed = createTable();

    while(tasks->size != listed->size) {

        for(int i = 0; i < MAX_KEYS; i++) {

            struct node *head = tasks->values[i];

            while(head != NULL) {

                char *key = ((struct dataItem *)head->data)->key;
                char *task = copyText(key, 0, strlen(key));

                if(!contains(listed, task) && !hasDependency(task, dependency, listed)) {

                    add(listed, task, NULL);
                    list = realloc(list, sizeof *list * (*total + 1));
                    list[(*total)++] = copyText(task, 0, strlen(task) - 1);
                }

                head = head->next;
            }
        }
    }

    freeTable(tasks);
    freeTable(dependency);
    freeTable(listed);

    return list;
}

void printTaskList(char ** list, int total) {

    for(int i = 0; i < total; i++) {

        printf("%s\n", list[i]);
    }

    printf("\n");
}

void freeTaskList(char ** list, int total) {

    for(int i = 0; i < total; i++) {

        free(list[i]);
    }

    free(list);
}