#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <time.h>

int sum(int *, int);
int indexOf(char *, char);
int roll(int);
int * getRolls(int, int);
void showRolls(int *, int);
void readRule(char *, int *, int *);
void playRoll(char *);

int main() {

    srand(time(0));

    playRoll("3d6");
    playRoll("4d12");
    playRoll("1d10");
    playRoll("5d4");
    playRoll("5d12");
    playRoll("6d4");
    playRoll("1d2");
    playRoll("1d8");
    playRoll("3d6");
    playRoll("4d20");
    playRoll("100d100");

    return 0;
}

int sum(int * values, int total) {

    int result = 0;

    for(int i = 0; i < total; i++) {

        result += values[i];
    }

    return result;
}

int indexOf(char * text, char character) {

    for(int i = 0; i < strlen(text); i++) {

        if(text[i] == character) {

            return i;
        }
    }

    return -1;
}

int roll(int faces) {

    return rand() % faces + 1;
}

int * getRolls(int total, int faces) {

    int *results = malloc(sizeof *results * total);

    for(int i = 0; i < total; i++) {

        results[i] = roll(faces);
    }

    return results;
}

void showRolls(int * rolls, int total) {

    printf("%d:", sum(rolls, total));

    for(int i = 0; i < total; i++) {

        printf(" %d", rolls[i]);
    }

    printf("\n");
}

void readRule(char * rule, int * total, int * faces) {

    char text[strlen(rule) + 1];
    memcpy(text, rule, strlen(rule));
    const int splitIndex = indexOf(text, 'd');
    text[splitIndex] = '\0';
    *total = atoi(text);
    *faces = atoi(&text[splitIndex + 1]);
}

void playRoll(char * rule) {

    int total = 0;
    int faces = 0;
    readRule(rule, &total, &faces);

    int *rolls = getRolls(total, faces);
    showRolls(rolls, total);

    free(rolls);
}