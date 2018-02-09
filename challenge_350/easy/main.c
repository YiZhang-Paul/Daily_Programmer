#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "headers/utility.h"
#include "headers/permute.h"
#include "headers/book.h"

int * storeResult(int *, int *, int, int);
int * findPlacement(int *, int, int *, struct book *, int);
int * getShelfWidths(char *, int *);
struct book * getBooks(char *, int *);
void solve(char *);

int main(void) {

    solve("input1.txt");
    solve("input2.txt");

    return 0;
}

int * storeResult(int * output, int * input, int row, int length) {

    if(output == NULL) {

        output = (int *)malloc(length * sizeof(int));
    }

    for(int i = 0; i < length; i++) {

        output[i] = input[row * length + i];
    }

    return output;
}

int * findPlacement(int * shelves, int totalShelves, int * placements, struct book * books, int totalBooks) {

    int *result = NULL;
    const int totalPlacements = factorial(totalBooks);

    for(int i = 0, currentMin = 0; i < totalPlacements; i++) {

        int shelfIndex = 0;
        int remainWidth = shelves[shelfIndex];

        for(int j = 0; j < totalBooks; j++) {

            if(remainWidth < books[placements[i * totalBooks + j]].width) {

                const int hasMoreShelf = ++shelfIndex < totalShelves;
                remainWidth = hasMoreShelf ? shelves[shelfIndex] : 0;
                j = hasMoreShelf ? j - 1 : totalBooks;

                continue;
            }

            remainWidth -= books[placements[i * totalBooks + j]].width;
        }

        if(shelfIndex < totalShelves && (shelfIndex + 1 < currentMin || currentMin == 0)) {

            currentMin = shelfIndex + 1;
            result = storeResult(result, placements, i, totalBooks);
        }
    }

    return result;
}

int * getShelfWidths(char * url, int * outputLength) {

    char **shelfDetails = readLines(url, 1, 1);
    *outputLength = countNumbers(shelfDetails[0]);
    int *widths = (int *)malloc(*outputLength * sizeof(int));
    toNumbers(shelfDetails[0], widths);
    sortNumbers(widths, *outputLength);

    freeLines(shelfDetails, 1);

    return widths;
}

struct book * getBooks(char * url, int * outputLength) {

    *outputLength = countLines(url) - 1;
    char **bookDetails = readLines(url, 2, *outputLength);
    struct book *books = (struct book *)malloc(*outputLength * sizeof(struct book));
    createBooks(bookDetails, books, *outputLength);

    freeLines(bookDetails, *outputLength);

    return books;
}

void solve(char * url) {

    int totalShelves = 0;
    int *shelves = getShelfWidths(url, &totalShelves);

    int totalBooks = 0;
    struct book *books = getBooks(url, &totalBooks);

    int *range = getRange(0, totalBooks);
    int placements[factorial(totalBooks)][totalBooks];
    permute((int *)placements, range, totalBooks);

    int *result = findPlacement(shelves, totalShelves, (int *)placements, books, totalBooks);

    if(result) {

        for(int i = 0; i < totalBooks; i++) {

            printf("%d ", result[i]);
        }

        printf("\n");
    }
    else {

        printf("No Result.");
    }

    free(shelves);
    freeBooks(books, totalBooks);
    free(range);
    free(result);
}