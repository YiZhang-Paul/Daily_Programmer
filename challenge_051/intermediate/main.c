#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void shift(char, int **);
void changeByte(char, int *);
void jumpForward(char **);
void jumpBackward(char **);
void loadInput(int *);
void output(int);
void processCommand(char **, int **);
void runCode(char *);

int main(void) {

    char code[] = "++++++++++[>>++++++>+++++++++++>++++++++++>+++++++++>+++>+++++>++++>++++++++>+[<]<-]>>+++++++.>+.-.>+++.<++++.>>+++++++.<<++.+.>+++++.>.<<-.>---.<-----.-.+++++.>>>+++.-.<<-.<+..----.>>>>++++++++.>+++++++..<<<<+.>>>>-.<<<<.++++.------.<+++++.---.>>>>>.<<<++.<<---.>++++++.>>>>+.<<<-.--------.<<+.>>>>>>+++.---.<-.<<<<---.<.>---.>>>>>>.";

    runCode(code);

    return 0;
}

void shift(char command, int ** bytes) {

    *bytes += command == '>' ? 1 : -1;
}

void changeByte(char command, int * bytes) {

    *bytes += command == '+' ? 1 : -1;
}

void jumpForward(char ** command) {

    int brackets = 0;

    while(**command != ']' || brackets != 0) {

        if(**command == '[' || **command == ']') {

            brackets -= **command == ']' ? 1 : -1;
        }

        ++*command;
    }
}

void jumpBackward(char ** command) {

    int brackets = 0;

    while(*(*command + 1) != '[' || brackets != 0) {

        if(**command == '[' || **command == ']') {

            brackets -= **command == '[' ? 1 : -1;
        }

        --*command;
    }
}

void loadInput(int * bytes) {

    *bytes = getchar();
}

void output(int bytes) {

    putchar(bytes);
}

void processCommand(char ** command, int ** bytes) {

    char character = **command;

    if(character == '>' || character == '<') {

        shift(character, bytes);
    }
    else if(character == '+' || character == '-') {

        changeByte(character, *bytes);
    }
    else if(character == '[') {

        if(**bytes == 0) {

            jumpForward(command);
        }
    }
    else if(character == ']') {

        if(**bytes != 0) {

            jumpBackward(command);
        }
    }
    else if(character == ',') {

        loadInput(*bytes);
    }
    else {

        output(**bytes);
    }
}

void runCode(char * code) {

    int bytes[10000] = { 0 };
    int *pointer = bytes;
    char *command = code;
    const char *codeEnd = code + strlen(code);

    while(command < codeEnd) {

        processCommand(&command, &pointer);
        command++;
    }
}