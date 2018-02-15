#include <stdio.h>
#include <stdlib.h>

#define TRUE 1
#define FALSE 0
#define TEAM_SIZE 11

struct player {

    int number;
    int score;
    int out;
};

struct team {

    struct player members[TEAM_SIZE];
    int playerLeft;
};

struct player createPlayer(int);
struct team createTeam(void);

int main(void) {

    struct team team = createTeam();

    return 0;
}

struct player createPlayer(int number) {

    struct player player;

    player.number = number;
    player.score = 0;
    player.out = FALSE;

    return player;
}

struct team createTeam(void) {

    struct team team;

    for(int i = 0; i < TEAM_SIZE; i++) {

        team.members[i] = createPlayer(i + 1);
    }

    team.playerLeft = TEAM_SIZE;

    return team;
}