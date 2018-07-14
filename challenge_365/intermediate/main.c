#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include <ctype.h>

#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define LINE_LENGTH 256

char * copyText(char *);
bool isBlank(char *);
bool isName(char *);
bool isItem(char *);
char ** getTextByType(char *, int func(int), int *);
char ** getNames(char *, int *);
int * toValues(char **, int);
int * getValues(char *);
void readSalesData(char *, char ***, int ***, int ***, int *, int *);
void fill(double *, int, double);
double * getCommissions(int **, int **, int, int);
void printNames(char **, int, int);
void freeTexts(char **, int);
void freeValues(int **, int);
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

char ** getTextByType(char * line, int typeCheck(int), int * total) {

    *total = 0;
    char text[LINE_LENGTH];
    char **texts = malloc(sizeof *texts * (*total + 1));

    for(int i = 0, j = 0; i < strlen(line); i++) {

        if(!typeCheck(line[i]) || i == strlen(line) - 1) {

            if(typeCheck(line[i])) {

                text[j++] = line[i];
            }

            if(j != 0) {

                texts = realloc(texts, sizeof * texts * (*total + 1));
                texts[(*total)++] = copyText(text);
                text[0] = '\0';
                j = 0;
            }

            continue;
        }

        text[j++] = line[i];
        text[j] = '\0';
    }

    return texts;
}

char ** getNames(char * line, int * total) {

    return getTextByType(line, isalpha, total);
}

int * toValues(char ** texts, int total) {

    int *values = malloc(sizeof *values * total);

    for(int i = 0; i < total; i++) {

        values[i] = atoi(texts[i]);
    }

    return values;
}

int * getValues(char * line) {

    int total = 0;
    char **texts = getTextByType(line, isdigit, &total);
    int *values = toValues(texts, total);

    freeTexts(texts, total);

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
                char **result = getNames(line, totalNames);
                *names = realloc(*names, sizeof **names * *totalNames);
                *names = result;
            }
            else if(isItem(line)) {

                int ***collection = state == 1 ? revenue : expense;
                *collection = realloc(*collection, sizeof **collection * (*totalItems + 1));
                (*collection)[(*totalItems)++] = getValues(line);
            }
        }
    }

    fclose(file);
}

void fill(double * collection, int total, double value) {

    for(int i = 0; i < total; i++) {

        collection[i] = value;
    }
}

double * getCommissions(int ** revenue, int ** expense, int rows, int columns) {

    double *commission = malloc(sizeof *commission * columns);
    fill(commission, columns, 0);

    for(int i = 0; i < rows; i++) {

        for(int j = 0; j < columns; j++) {

            commission[j] += MAX(revenue[i][j] - expense[i][j], 0) * 0.062;
        }
    }

    return commission;
}

void printNames(char ** names, int total, int space) {

    for(int i = 0; i < space; i++) {

        printf(" ");
    }

    for(int i = 0; i < total; i++) {

        printf("%s%s", names[i], i == total - 1 ? "" : " ");
    }
}

void printCommissions(double * commissions, int total) {

    printf("Commission ");

    for(int i = 0; i < total; i++) {

        printf("%0.2f%s", commissions[i], i == total - 1 ? "" : " ");
    }
}

void freeTexts(char ** texts, int total) {

    for(int i = 0; i < total; i++) {

        free(texts[i]);
    }

    free(texts);
}

void freeValues(int ** values, int total) {

    for(int i = 0; i < total; i++) {

        free(values[i]);
    }

    free(values);
}

void getResult(char * input) {

    int totalNames = 0;
    int totalItems = 0;
    char **names = malloc(sizeof *names);
    int **revenue = malloc(sizeof *revenue);
    int **expense = malloc(sizeof *expense);
    readSalesData(input, &names, &revenue, &expense, &totalNames, &totalItems);
    double *commissions = getCommissions(revenue, expense, totalItems, totalNames);

    printNames(names, totalNames, strlen("Commission "));
    printf("\n");
    printCommissions(commissions, totalNames);
    printf("\n\n");

    free(commissions);
    freeTexts(names, totalNames);
    freeValues(revenue, totalItems);
    freeValues(expense, totalItems);
}