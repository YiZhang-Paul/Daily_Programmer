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
    int playerLeft;
};

struct player createPlayer(int);
struct team createTeam(void);
int isLegal(char);
void switchTeam(struct team **, struct team **);
void addScore(struct team *, int);
struct player ** processScore(char *, struct team *, struct team *, int *);
void showScore(struct player **, int);

int main(void) {

    struct team team1 = createTeam();
    struct team team2 = createTeam();
    int totalParticipants = 0;
    struct player ** participants = processScore("1.2wW6.2b34", &team1, &team2, &totalParticipants);
    showScore(participants, totalParticipants);

    free(participants);

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

    team.playerLeft = TEAM_SIZE;

    return team;
}

int isLegal(char score) {

    return score != 'w';
}

void switchTeam(struct team ** team1, struct team ** team2) {

    struct team *temporary = *team1;
    *team1 = *team2;
    *team2 = temporary;
}

void addScore(struct team * team, int score) {

    team->members[TEAM_SIZE - team->playerLeft].score += score;
}

struct player ** processScore(char * score, struct team * team1, struct team * team2, int * totalParticipants) {

    struct team *strike = team1;
    struct team *defend = team2;
    struct player **participants = (struct player **)malloc(TEAM_SIZE * 2 * sizeof(struct player *));
    participants[0] = &strike->members[0];
    participants[1] = &defend->members[0];
    *totalParticipants = 2;

    for(int i = 0, legalBalls = 0; i < strlen(score); i++) {

        if(isdigit(score[i])) {

            addScore(strike, score[i] - '0');

            if((score[i] - '0') % 2 == 1) {

                switchTeam(&strike, &defend);
            }
        }
        else if(isalpha(score[i]) && isLegal(score[i])) {

            if(score[i] == 'b') {

                switchTeam(&strike, &defend);
            }
            else {

                if(--strike->playerLeft == 0) {

                    break;
                }

                participants[(*totalParticipants)++] = &strike->members[TEAM_SIZE - strike->playerLeft];
            }
        }

        legalBalls += isLegal(score[i]) ? 1 : 0;

        if(legalBalls == 6) {

            legalBalls = 0;
            switchTeam(&strike, &defend);
        }
    }

    return participants;
}

void showScore(struct player ** participants, int totalParticipants) {

    for(int i = 0; i < totalParticipants; i++) {

        printf("P%d: %d\n", i + 1, participants[i]->score);
    }
}