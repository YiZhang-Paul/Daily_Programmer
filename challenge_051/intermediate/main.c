#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void shift(int ***, char);
void changeByte(int ***, char);
void processCommand(char, int **);
void runCode(char *);

int main(void) {

    char code[] = "++++++++++[>>++++++>+++++++++++>++++++++++>+++++++++>+++>+++++>++++>++++++++>+[<]<-]>>+++++++.>+.-.>+++.<++++.>>+++++++.<<++.+.>+++++.>.<<-.>---.<-----.-.+++++.>>>+++.-.<<-.<+..----.>>>>++++++++.>+++++++..<<<<+.>>>>-.<<<<.++++.------.<+++++.---.>>>>>.<<<++.<<---.>++++++.>>>>+.<<<-.--------.<<+.>>>>>>+++.---.<-.<<<<---.<.>---.>>>>>>.";

    runCode(code);

    return 0;
}

void shift(int *** bytes, char command) {

    (**bytes) += command == '>' ? 1 : -1;
}

void changeByte(int *** bytes, char command) {

    (***bytes) += command == '+' ? 1 : -1;
}

void processCommand(char command, int ** bytes) {

    switch(command) {

        case '>' :
        case '<' :

            shift(&bytes, command);

            break;

        case '+' :
        case '-' :

            changeByte(&bytes, command);

            break;

        case '[' :
        case ']' :

            //loop(&bytes, command);

            break;

        case ',' :

            //loadInput(&bytes);

            break;

        case '.' :

            //output(&bytes);

            break;
    }
}

void runCode(char * code) {

    int bytes[10000] = { 0 };
    int *pointer = bytes;

    for(int i = 0; i < strlen(code); i++) {
        printf("%d\n", bytes[0]);
        processCommand(code[i], &pointer);
    }
}