#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "book.h"
#include "bookshelf.h"
#include "utility.h"

struct bookshelf * createShelves(int *, int);
struct book * createBooks(char **, int);
int compareShelves(const void *, const void *);
void sortShelves(struct bookshelf *, int);
void freeShelves(struct bookshelf *, int);
void freeBooks(struct book *, int);

int factorial(int number) {

    if(number == 1) {

        return number;
    }

    return number * factorial(number - 1);
}

void swap(char * digits, int index1, int index2) {

    char temp = digits[index1];
    digits[index1] = digits[index2];
    digits[index2] = temp;
}

char * makeCopy(char * input) {

    char *copy = (char *)malloc(strlen(input));
    strcpy(copy, input);

    return copy;
}

char ** permute(char * digits, int total) {

    char ** permutations = (char **)malloc(total * sizeof(char *));
    int totalDigits = strlen(digits);

    for(int i = 0, count = 0; i < totalDigits; i++) {

        char *copy = makeCopy(digits);
        swap(copy, 0, i);

        for(int j = 0; j < totalDigits - 1; j++) {

            for(int k = 1; k < totalDigits - 1; k++) {

                swap(copy, k, k + 1);
                permutations[count++] = makeCopy(copy);
            }
        }

        free(copy);
    }

    return permutations;
}

int main(void) {

    char digits[] = "ABC";
    const int length = factorial(strlen(digits));
    char **permutations = permute(digits, length);

    for(int i = 0; i < length; i++) {

        printf("%s\n", permutations[i]);
    }

    struct bookshelf * shelves;
    struct book * books;

    //create all shelves with given widths, from maximum to minimum width
    const int totalShelves = countNumbers(readLines("input1.txt", 1, 1)[0]);
    int shelfWidths[totalShelves];
    toNumbers(readLines("input1.txt", 1, 1)[0], shelfWidths);
    shelves = createShelves(shelfWidths, totalShelves);
    sortShelves(shelves, totalShelves);

    //create all books with given information
    const int totalBooks = countLines("input1.txt") - 1;
    char ** information = readLines("input1.txt", 2, totalBooks);
    books = createBooks(information, totalBooks);

    return 0;
}

struct bookshelf * createShelves(int * widths, int total) {

    struct bookshelf * shelves = (struct bookshelf *)malloc(total * sizeof(struct bookshelf));

    for(int i = 0; i < total; i++) {

        shelves[i] = createBookshelf(widths[i]);
    }

    return shelves;
}

struct book * createBooks(char ** information, int total) {

    struct book * books = (struct book *)malloc(total * sizeof(struct book));
    const char *delimiter = " ";

    for(int i = 0; i < total; i++) {

        char *token = strtok(information[i], delimiter);
        books[i] = createBook(atoi(token), information[i] + strlen(token) + 1);
    }

    return books;
}

int compareShelves(const void * a, const void * b) {

    struct bookshelf *bookshelf1 = (struct bookshelf *)a;
    struct bookshelf *bookshelf2 = (struct bookshelf *)b;

    return bookshelf2->width - bookshelf1->width;
}

void sortShelves(struct bookshelf * shelves, int total) {

    qsort(shelves, total, sizeof(struct bookshelf), compareShelves);
}

void freeShelves(struct bookshelf * shelves, int total) {

    for(int i = 0; i < total; i++) {

        freeBookshelf(&shelves[i]);
    }

    free(shelves);
}

void freeBooks(struct book * books, int total) {

    for(int i = 0; i < total; i++) {

        freeBook(&books[i]);
    }

    free(books);
}