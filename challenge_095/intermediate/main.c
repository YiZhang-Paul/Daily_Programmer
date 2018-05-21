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
bool hasChance(int);
bool needSpace(char *, char *);
char * trimEnd(char *);
char * append(char *, char *);
char * addPunctuation(char *);
char * swapPunctuation(char *, char);
char * createWord(bool);
char * createNumber();
char * addWords(char *, int);
char * addLineBreak(char *);
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

bool hasChance(int chance) {

    return getRandom(1, 100) <= chance;
}

bool needSpace(char * word1, char * word2) {

    return strlen(word1) > 0 && !ispunct(word2[0]) && isgraph(word2[0]);
}

char * trimEnd(char * word) {

    while(!isgraph(word[strlen(word) - 1])) {

        word[strlen(word) - 1] = '\0';
    }

    return word;
}

char * append(char * word1, char * word2) {

    const bool hasSpace = needSpace(word1, word2);
    const int length = strlen(word1) + (hasSpace ? 1 : 0) + strlen(word2);
    word1 = realloc(word1, length + 1);
    word1[strlen(word1)] = hasSpace ? ' ' : word1[strlen(word1)];
    memcpy(&word1[length - strlen(word2)], word2, strlen(word2));
    word1[length] = '\0';

    return word1;
}

char * addPunctuation(char * word) {

    char options[] = ".,!?";
    char result[] = { options[getRandom(0, strlen(options) - 1)], ' ', '\0' };

    return append(word, result);
}

char * swapPunctuation(char * sentence, char punctuation) {

    for(int i = strlen(sentence) - 1; i >= 0; i--) {

        if(ispunct(sentence[i])) {

            sentence[i] = punctuation;

            break;
        }
    }

    return sentence;
}

char * createWord(bool capitalize) {

    const int length = getRandom(MIN_CHARS, MAX_CHARS);
    char *word = malloc(length + 1);

    for(int i = 0; i < length; i++) {

        word[i] = 'a' + getRandom(0, 25);
    }

    word[0] = capitalize ? toupper(word[0]) : word[0];
    word[length] = '\0';

    return word;
}

char * createNumber() {

    const int length = getRandom(MIN_CHARS, MAX_CHARS);
    char *number = malloc(length + 1);

    for(int i = 0; i < length; i++) {

        number[i] = '0' + getRandom(0, 9);
    }

    number[length] = '\0';

    return number;
}

char * addWords(char * sentence, int total) {

    for(int i = 0, numbers = 0; i < total; i++) {

        char *word;

        if(numbers == 0 && hasChance(5)) {

            numbers++;
            word = createNumber();
        }
        else {

            word = createWord(i == 0);
        }

        sentence = append(sentence, word);

        free(word);
    }

    return sentence;
}

char * addLineBreak(char * sentence) {

    sentence[strlen(sentence) - 1] = '\0';
    sentence = swapPunctuation(sentence, '.');

    return append(sentence, hasChance(50) ? "\n\n" : "\n");
}

char * createSentence(int * total) {

    char *sentence = malloc(1);
    sentence[0] = '\0';
    *total = getRandom(MIN_WORDS, MAX_WORDS);
    sentence = addWords(sentence, *total);
    sentence = addPunctuation(sentence);

    return hasChance(15) ? addLineBreak(sentence) : sentence;
}

void generateText(char * output, int words) {

    FILE *file = fopen(output, "w");

    if(file) {

        while(words >= MIN_WORDS) {

            int total = 0;
            char *sentence = createSentence(&total);
            words -= total;
            fprintf(file, "%s", words < MIN_WORDS ? trimEnd(sentence) : sentence);

            free(sentence);
        }
    }

    fclose(file);
}