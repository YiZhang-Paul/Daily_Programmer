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
int isOddDigit(char);
int isLegalMove(char);
int isExtraMove(char);
int trackLegalMove(int *, char);
int countExtraMove(char *);
struct player * getPlayerOnField(struct team *);
void addScore(struct team *, int);
int needTeamSwitch(int *, char);
void switchTeam(struct team **, struct team **);
struct player * sendNextPlayer(struct team *);
int addPlayer(struct player **, int *, struct player *);
struct player ** trackActivePlayer(char *, struct team *, struct team *, int *);
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
    //all team members are available on default
    team.membersRemain = TEAM_SIZE;

    return team;
}

int toDigit(char character) {

    return character - '0';
}

int isOddDigit(char character) {

    return isdigit(character) && toDigit(character) % 2;
}

int isLegalMove(char score) {
    //only "wide" is considered illegal move
    return score != 'w';
}

int isExtraMove(char score) {
    //"bye" and "wide" do not contribute score to individual player
    return score == 'b' || score == 'w';
}

int trackLegalMove(int * legalMoves, char score) {

    if(isLegalMove(score)) {

        (*legalMoves)++;
    }

    return *legalMoves;
}

int countExtraMove(char * score) {

    int extra = 0;

    for(int i = 0; i < strlen(score); i++) {

        extra += isExtraMove(score[i]) ? 1 : 0;
    }

    return extra;
}

struct player * getPlayerOnField(struct team * team) {

    return &team->members[TEAM_SIZE - team->membersRemain];
}

void addScore(struct team * team, int score) {

    getPlayerOnField(team)->score += score;
}

int needTeamSwitch(int * legalMoves, char score) {
    //need team switch every 6 legal moves
    if(trackLegalMove(legalMoves, score) == 6) {
        //reset legal moves
        *legalMoves = 0;

        return 1;
    }
    //need team switch for "bye" and odd number scores
    if(score == 'b' || isOddDigit(score)) {

        return 1;
    }

    return 0;
}

void switchTeam(struct team ** team1, struct team ** team2) {

    struct team *temporary = *team1;
    *team1 = *team2;
    *team2 = temporary;
}

struct player * sendNextPlayer(struct team * team) {

    if(--team->membersRemain == 0) {

        //no more available players
        return NULL;
    }

    return getPlayerOnField(team);
}

int addPlayer(struct player ** players, int * total, struct player * player) {

    if(player == NULL) {

        return 0;
    }

    players[(*total)++] = player;

    return 1;
}

//this function follows rule of Cricket games
struct player ** trackActivePlayer(char * score, struct team * team1, struct team * team2, int * total) {

    struct team *strike = team1;
    struct team *defend = team2;
    struct player **activePlayer = (struct player **)malloc(2 * TEAM_SIZE * sizeof(struct player *));
    //first players on each team are active players on default
    addPlayer(activePlayer, total, &strike->members[0]);
    addPlayer(activePlayer, total, &defend->members[0]);

    for(int i = 0, legalMoves = 0; i < strlen(score); i++) {
        //numeric score will be added to current player on field on strike team
        if(isdigit(score[i])) {

            addScore(strike, toDigit(score[i]));
        }
        else if(score[i] == 'W') {
            //match will end when a team has no available players
            if(!addPlayer(activePlayer, total, sendNextPlayer(strike))) {

                break;
            }
        }

        if(needTeamSwitch(&legalMoves, score[i])) {

            switchTeam(&strike, &defend);
        }
    }

    return activePlayer;
}

void showScore(char * score) {

    int total = 0;
    struct team team1 = createTeam();
    struct team team2 = createTeam();
    struct player **activePlayer = trackActivePlayer(score, &team1, &team2, &total);

    for(int i = 0; i < total; i++) {

        printf("P%d: %d\n", i + 1, activePlayer[i]->score);
    }

    printf("Extras: %d\n", countExtraMove(score));

    free(activePlayer);
}