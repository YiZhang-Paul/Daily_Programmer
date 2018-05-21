#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include <ctype.h>

#define MIN_CHARS 1
#define MAX_CHARS 12
#define MIN_WORDS 3
#define MAX_WORDS 8
#define OUTPUT_FILE "output.txt"

int getRandom(int, int);
int hasChance(int);
char * append(char *, char *);
char * createWord(bool);
char * createSentence(int *);
void generateText(char *, int);

int main(void) {

    generateText(OUTPUT_FILE, 1000);

    return 0;
}

int getRandom(int min, int max) {

    if(max < min) {

        return -1;
    }

    return rand() % (max - min + 1) + min;
}

int hasChance(int chance) {

    return getRandom(1, 100) <= chance;
}

char * append(char * word1, char * word2) {

    const bool hasSpace = isgraph(word2[0]);
    const int length = strlen(word1) + (hasSpace ? 1 : 0) + strlen(word2);
    word1 = realloc(word1, length + 1);
    word1[strlen(word1)] = hasSpace ? ' ' : word1[strlen(word1)];
    memcpy(&word1[length - strlen(word2)], word2, strlen(word2));
    word1[length] = '\0';

    return word1;
}

char * createWord(bool capitalize) {

    const int length = getRandom(MIN_CHARS, MAX_CHARS);
    char *word = malloc(length + 1);

    for(int i = 0; i < length; i++) {

        word[i] = 'a';
    }

    word[0] = capitalize ? toupper(word[0]) : word[0];
    word[length] = '\0';

    return word;
}

char * createSentence(int * total) {

    *total = getRandom(MIN_WORDS, MAX_WORDS);
    char *sentence = malloc(1);
    sentence[0] = '\0';

    for(int i = 0; i < *total; i++) {

        char *word = createWord(i == 0);
        sentence = append(sentence, word);

        free(word);
    }

    if(hasChance(15)) {

        sentence = append(sentence, hasChance(50) ? "\n\n" : "\n");
    }

    return sentence;
}

void generateText(char * output, int words) {

    FILE *file = fopen(output, "w");

    if(file) {

        while(words >= MIN_WORDS) {

            int total = 0;
            char *sentence = createSentence(&total);
            fprintf(file, "%s", sentence);
            words -= total;
            free(sentence);
        }
    }

    fclose(file);
}