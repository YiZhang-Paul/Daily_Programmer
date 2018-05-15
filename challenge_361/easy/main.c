#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

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

struct player ** readScore(char * players, int * total) {

    *total = 0;
    int slots[26];
    struct player **scores = malloc(sizeof *scores);

    for(int i = 0; i < 26; i++) {

        slots[i] = strlen(players) + 1;
    }

    for(int i = 0; i < strlen(players); i++) {

        const int index = tolower(players[i]) - 'a';
        slots[index] = slots[index] == strlen(players) + 1 ? 0 : slots[index];
        slots[index] -= isupper(players[i]) ? 1 : -1;
    }

    for(int i = 0; i < 26; i++) {

        if(slots[i] < 0 || slots[i] < strlen(players) + 1) {

            scores = realloc(scores, sizeof *scores * (*total + 1));
            scores[(*total)++] = createPlayer('a' + i, slots[i]);
        }
    }

    return scores;
}

int main(void) {

    int total = 0;
    struct player **scores = readScore("dbbaCEDbdAacCEAadcB", &total);

    for(int i = 0; i < total; i++) {

        printf("%c:%d%s", scores[i]->letter, scores[i]->score, i == total - 1 ? "" : ", ");
    }

    return 0;
}