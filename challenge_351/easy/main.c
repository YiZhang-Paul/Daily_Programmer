#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>
#include <math.h>

#define TEAM_SIZE 11

struct player {

    int number;
    int score;
};

struct team {

    struct player members[TEAM_SIZE];
    int membersRemain;
};

struct player createPlayer(int);
struct team createTeam(void);
int toDigit(char);
void addScore(struct team *, int);
int isLegal(char);
int needTeamSwitch(char);
void switchTeam(struct team **, struct team **);
struct player ** trackActivePlayer(char *, struct team *, struct team *, int *);
int isExtra(char);
int countExtra(char *);
void showScore(char *);

int main(void) {

    char *inputs[] = { "1.2wW6.2b34", "WWWWWWWWWW", "1..24.w6" };

    for(int i = 0; i < 3; i++) {

        showScore(inputs[i]);
        printf("\n");
    }

    return 0;
}

struct player createPlayer(int number) {

    struct player player;

    player.number = number;
    player.score = 0;

    return player;
}

struct team createTeam(void) {

    struct team team;

    for(int i = 0; i < TEAM_SIZE; i++) {

        team.members[i] = createPlayer(i + 1);
    }

    team.membersRemain = TEAM_SIZE;

    return team;
}

int toDigit(char character) {

    return character - '0';
}

void addScore(struct team * team, int score) {

    team->members[TEAM_SIZE - team->membersRemain].score += score;
}

int isLegal(char score) {

    return score != 'w';
}

int needTeamSwitch(char score) {

    if(score == 'b') {

        return 1;
    }

    if(isdigit(score) && toDigit(score) % 2 == 1) {

        return 1;
    }

    return 0;
}

void switchTeam(struct team ** team1, struct team ** team2) {

    struct team *temporary = *team1;
    *team1 = *team2;
    *team2 = temporary;
}

struct player ** trackActivePlayer(char * score, struct team * team1, struct team * team2, int * total) {

    struct team *strike = team1;
    struct team *defend = team2;
    struct player **active = (struct player **)malloc(2 * TEAM_SIZE * sizeof(struct player *));
    active[(*total)++] = &strike->members[0];
    active[(*total)++] = &defend->members[0];

    for(int i = 0, legalBalls = 0; i < strlen(score); i++) {

        if(isdigit(score[i])) {

            addScore(strike, toDigit(score[i]));
        }
        else if(score[i] == 'W') {

            if(--strike->membersRemain == 0) {

                break;
            }

            active[(*total)++] = &strike->members[TEAM_SIZE - strike->membersRemain];
        }

        legalBalls += isLegal(score[i]) ? 1 : 0;

        if(legalBalls == 6 || needTeamSwitch(score[i])) {

            switchTeam(&strike, &defend);
        }

        legalBalls = legalBalls == 6 ? 0 : legalBalls;
    }

    return active;
}

int isExtra(char score) {

    return score == 'b' || score == 'w';
}

int countExtra(char * score) {

    int extra = 0;

    for(int i = 0; i < strlen(score); i++) {

        extra += isExtra(score[i]) ? 1 : 0;
    }

    return extra;
}

void showScore(char * score) {

    int total = 0;
    struct team team1 = createTeam();
    struct team team2 = createTeam();
    struct player **activePlayer = trackActivePlayer(score, &team1, &team2, &total);

    for(int i = 0; i < total; i++) {

        printf("P%d: %d\n", i + 1, activePlayer[i]->score);
    }

    printf("Extras: %d\n", countExtra(score));

    free(activePlayer);
}