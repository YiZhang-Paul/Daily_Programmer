#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include <ctype.h>

#define MAX_PLAYERS 26

struct player {

    char letter;
    int score;
};

struct player * createPlayer(char letter, int score) {

    struct player *player = malloc(sizeof *player);

    player->letter = letter;
    player->score = score;

    return player;
}

void fill(int * list, int total, int value) {

    for(int i = 0; i < total; i++) {

        list[i] = value;
    }
}

int compare(const void * a, const void * b) {

    const struct player *playerA = *(const struct player **)a;
    const struct player *playerB = *(const struct player **)b;

    if(playerB->score == playerA->score) {

        return playerA->letter - playerB->letter;
    }

    return playerB->score - playerA->score;
}

struct player ** sortPlayers(struct player ** players, int total) {

    qsort(players, total, sizeof *players, compare);

    return players;
}

struct player ** readScore(char * letters, int * total) {

    *total = 0;
    const int cap = strlen(letters) + 1;
    int scores[MAX_PLAYERS];
    fill(scores, MAX_PLAYERS, cap);
    struct player **players = malloc(sizeof *players);

    for(int i = 0; i < strlen(letters); i++) {

        const int index = tolower(letters[i]) - 'a';
        scores[index] = scores[index] == cap ? 0 : scores[index];
        scores[index] -= isupper(letters[i]) ? 1 : -1;
    }

    for(int i = 0; i < MAX_PLAYERS; i++) {

        if(scores[i] < 0 || scores[i] < cap) {

            players = realloc(players, sizeof *players * (*total + 1));
            players[(*total)++] = createPlayer('a' + i, scores[i]);
        }
    }

    return sortPlayers(players, *total);
}

void freePlayers(struct player ** players, int total) {

    for(int i = 0; i < total; i++) {

        free(players[i]);
    }

    free(players);
}

void printScore(struct player ** players, int total) {

    for(int i = 0; i < total; i++) {

        const bool isLast = i == total - 1;
        printf("%c:%d%s", players[i]->letter, players[i]->score, isLast ? "\n" : ", ");
    }
}

void findResult(char * letters) {

    int total = 0;
    struct player **players = readScore(letters, &total);
    printScore(players, total);
    freePlayers(players, total);
}

int main(void) {

    findResult("abcde");
    findResult("dbbaCEDbdAacCEAadcB");

    return 0;
}