#include "../header/recordParser.h"

static char ** getTeams(char * line) {

    char **teams = malloc(sizeof *teams * 2);

    for(int i = 0, counter = 0, start = -1; i < strlen(line); i++) {

        if(start == -1 && !isalpha(line[i])) {

            continue;
        }

        start = start == -1 ? i : start;

        if(isdigit(line[i])) {

            char *team = malloc(i - start + 1);
            memcpy(team, &line[start], i - start + 1);
            team[i - start] = '\0';
            teams[counter] = trim(team);
            start = -1;

            free(team);

            if(++counter == 2) {

                break;
            }
        }
    }

    return teams;
}

static int * getScores(char * line) {

    int *scores = malloc(sizeof *scores * 2);
    bool dateSkipped = false;

    for(int i = 0, counter = 0, start = -1; i < strlen(line); i++) {

        if(!dateSkipped) {

            dateSkipped = isalpha(line[i]);
        }

        if(!dateSkipped) {

            continue;
        }

        if(isdigit(line[i])) {

            start = start == -1 ? i : start;

            continue;
        }

        if(start != -1) {

            char *number = malloc(i - start + 1);
            memcpy(number, &line[start], i - start + 1);
            number[i - start] = '\0';
            scores[counter++] = atoi(number);
            start = -1;

            if(counter == 2) {

                break;
            }
        }
    }

    return scores;
}

static struct record * parseLine(char * line) {

    struct record *record = malloc(sizeof *record);
    char **teams = getTeams(line);
    int *scores = getScores(line);

    record->winner = malloc(MAX(strlen(teams[0]), strlen(teams[1])) + 1);
    record->loser = malloc(MAX(strlen(teams[0]), strlen(teams[1])) + 1);
    strcpy(record->winner, scores[0] > scores[1] ? teams[0] : teams[1]);
    strcpy(record->loser, scores[0] > scores[1] ? teams[1] : teams[0]);
    record->scores[0] = scores[0];
    record->scores[1] = scores[1];

    freeTexts(teams, 2);
    free(scores);

    return record;
}

struct record ** parse(char * fileName, int * total) {

    struct record **records = malloc(sizeof *records);
    FILE *file = fopen(fileName, "r");
    char line[LINE_LENGTH];

    if(file) {

        while(!feof(file)) {

            fgets(line, LINE_LENGTH, file);
            records = realloc(records, sizeof *records * (*total + 1));
            records[(*total)++] = parseLine(line);
        }
    }

    fclose(file);

    return records;
}