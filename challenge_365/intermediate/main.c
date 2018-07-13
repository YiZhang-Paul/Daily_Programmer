#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include <ctype.h>

#define LINE_LENGTH 256

char * copyText(char *);
bool isBlank(char *);
bool isName(char *);
bool isItem(char *);
char ** getNames(char *, int *);
int * getValues(char *);
void readSalesData(char *, char ***, int ***, int ***, int *, int *);
double * getCommissions(int **, int **, int, int);
void printNames(char **, int);
void getResult(char *);

int main(void) {

    getResult("input1.txt");
    getResult("input2.txt");

    return 0;
}

char * copyText(char * text) {

    char *copy = malloc(strlen(text) + 1);
    copy[strlen(text)] = '\0';

    return strcpy(copy, text);
}

bool isBlank(char * line) {

    for(int i = 0; i < strlen(line); i++) {

        if(isalnum(line[i])) {

            return false;
        }
    }

    return true;
}

bool isName(char * line) {

    return line[0] == ' ' && !isBlank(line) && !isItem(line);
}

bool isItem(char * line) {

    for(int i = 0; i < strlen(line); i++) {

        if(isdigit(line[i])) {

            return true;
        }
    }

    return false;
}

char ** getNames(char * line, int * total) {

    *total = 0;
    char name[LINE_LENGTH];
    char **names = malloc(sizeof *names * (*total + 1));

    for(int i = 0, j = 0; i < strlen(line); i++) {

        if(!isalpha(line[i]) || i == strlen(line) - 1) {

            if(isalpha(line[i])) {

                name[j++] = line[i];
            }

            if(j != 0) {

                names = realloc(names, sizeof *names * (*total + 1));
                names[(*total)++] = copyText(name);
                name[0] = '\0';
                j = 0;
            }

            continue;
        }

        name[j++] = line[i];
        name[j] = '\0';
    }

    return names;
}

int * getValues(char * line) {

    int total = 0;
    char value[LINE_LENGTH];
    int *values = malloc(sizeof *values * (total + 1));

    for(int i = 0, j = 0; i < strlen(line); i++) {

        if(!isdigit(line[i]) || i == strlen(line) - 1) {

            if(isdigit(line[i])) {

                value[j++] = line[i];
            }

            if(j != 0) {

                values = realloc(values, sizeof *values * (total + 1));
                values[total++] = atoi(value);
                value[0] = '\0';
                j = 0;
            }

            continue;
        }

        value[j++] = line[i];
        value[j] = '\0';
    }

    return values;
}

void readSalesData(char * input, char *** names, int *** revenue, int *** expense, int * totalNames, int * totalItems) {

    FILE *file = fopen(input, "r");

    if(file) {

        char line[LINE_LENGTH];
        int state = 0;

        while(!feof(file)) {

            fgets(line, LINE_LENGTH, file);

            if(isName(line)) {

                state++;
                *totalItems = 0;
                *names = getNames(line, totalNames);

                continue;
            }

            if(!isItem(line)) {

                continue;
            }

            (*(state == 1 ? revenue : expense))[(*totalItems)++] = getValues(line);
        }
    }

    fclose(file);
}

double * getCommissions(int ** revenue, int ** expense, int rows, int columns) {

    double *commission = malloc(sizeof *commission * columns);

    for(int i = 0; i < columns; i++) {

        commission[i] = 0;
    }

    for(int i = 0; i < rows; i++) {

        for(int j = 0; j < columns; j++) {

            double profit = revenue[i][j] - expense[i][j];

            if(profit > 0) {

                commission[j] += profit * 0.062;
            }
        }
    }

    return commission;
}

void printNames(char ** names, int total) {

    for(int i = 0; i < strlen("Commission "); i++) {

        printf(" ");
    }

    for(int i = 0; i < total; i++) {

        printf("%s%s", names[i], i == total - 1 ? "" : " ");
    }
}

void printCommissions(double * commissions, int total) {

    printf("Commission ");

    for(int i = 0; i < total; i++) {

        printf("%f%s", commissions[i], i == total - 1 ? "" : " ");
    }
}

void getResult(char * input) {

    int totalNames = 0;
    int totalItems = 0;
    char **names = malloc(sizeof *names);
    int **revenue = malloc(sizeof *revenue);
    int **expense = malloc(sizeof *expense);
    readSalesData(input, &names, &revenue, &expense, &totalNames, &totalItems);
    double *commissions = getCommissions(revenue, expense, totalItems, totalNames);

    printNames(names, totalNames);
    printf("\n");
    printCommissions(commissions, totalNames);
    printf("\n\n");

    free(commissions);
}