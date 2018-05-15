#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include "../header/team.h"

struct team * createTeam(char * name) {

    struct team *team = malloc(sizeof *team);

    team->visited = false;
    team->name = copyText(name, 0, strlen(name) - 1);
    team->losed = createTable();

    return team;
}

void freeTeam(void * team) {

    free(((struct team *)team)->name);
    freeTable(((struct team *)team)->losed, free);
}