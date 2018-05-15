#include "../header/recordParser.h"
#include "utility.c"

static char ** getNames(char * record) {

    char **names = malloc(sizeof *names * 2);

    for(int i = 0, total = 0, start = -1; i < strlen(record); i++) {

        if(isalpha(record[i])) {

            start = start == -1 ? i : start;
        }

        if(start != -1 && isdigit(record[i])) {

            names[total++] = trim(copyText(record, start, i - 1));
            start = -1;

            if(total == 2) {

                break;
            }
        }
    }

    return names;
}

static int * getScores(char * record) {

    int *scores = malloc(sizeof *scores * 2);

    for(int i = firstAlpha(record), total = 0, start = -1; i < strlen(record); i++) {

        if(isdigit(record[i])) {

            start = start == -1 ? i : start;
        }

        if(start != -1 && !isdigit(record[i])) {

            char *number = copyText(record, start, i - 1);
            scores[total++] = atoi(number);
            start = -1;

            free(number);

            if(total == 2) {

                break;
            }
        }
    }

    return scores;
}

static struct record * parseRecord(char * record) {

    struct record *result = malloc(sizeof *result);
    char **names = getNames(record);
    int *scores = getScores(record);

    const int length = MAX(strlen(names[0]), strlen(names[1])) + 1;
    result->winner = malloc(length);
    result->loser = malloc(length);
    strcpy(result->winner, scores[0] > scores[1] ? names[0] : names[1]);
    strcpy(result->loser, scores[0] > scores[1] ? names[1] : names[0]);
    memcpy(result->scores, scores, sizeof(int) * 2);

    freeTexts(names, 2);
    free(scores);

    return result;
}

struct record ** parse(char * fileName, int * total) {

    struct record **records = malloc(sizeof *records);
    FILE *file = fopen(fileName, "r");
    char line[LINE_LENGTH];

    if(file) {

        while(!feof(file)) {

            fgets(line, LINE_LENGTH, file);
            records = realloc(records, sizeof *records * (*total + 1));
            records[(*total)++] = parseRecord(line);
        }
    }

    fclose(file);

    return records;
}

void freeRecord(struct record * record) {

    free(record->winner);
    free(record->loser);
    free(record);
}

void freeRecords(struct record ** records, int total) {

    for(int i = 0; i < total; i++) {

        free(records[i]);
    }

    free(records);
}