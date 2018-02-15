#include <stdio.h>
#include <stdlib.h>

#define TRUE 1
#define FALSE 0

struct player {

    int number;
    int score;
    int out;
};

struct player createPlayer(int);

int main(void) {

    return 0;
}

struct player createPlayer(int number) {

    struct player player;

    player.number = number;
    player.score = 0;
    player.out = FALSE;

    return player;
}