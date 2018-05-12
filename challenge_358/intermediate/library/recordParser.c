#include "../header/recordParser.h"

static char ** getTeams(char * line) {

    char **teams = malloc(sizeof *teams * 2);

    for(int i = 0, counter = 0, start = -1; i < strlen(line); i++) {

        if(isalpha(line[i])) {

            start = start == -1 ? i : start;
        }

        if(start != -1 && isdigit(line[i])) {

            teams[counter++] = trim(copyText(line, start, i - 1));
            start = -1;

            if(counter == 2) {

                break;
            }
        }
    }

    return teams;
}

static int * getScores(char * line) {

    int *scores = malloc(sizeof *scores * 2);

    for(int i = firstAlpha(line), counter = 0, start = -1; i < strlen(line); i++) {

        if(isdigit(line[i])) {

            start = start == -1 ? i : start;
        }

        if(start != -1 && !isdigit(line[i])) {

            char *number = copyText(line, start, i - 1);
            scores[counter++] = atoi(number);
            start = -1;

            free(number);

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
    memcpy(record->scores, scores, sizeof(int) * 2);

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