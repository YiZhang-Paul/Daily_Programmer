#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "headers/utility.h"
#include "headers/permute.h"
#include "headers/book.h"

int * solve(int *, int, int *, struct book *, int);

int main(void) {

    char inputFile[] = "input1.txt";

    char **shelfInformation = readLines(inputFile, 1, 1);
    int shelves[countNumbers(shelfInformation[0])];
    toNumbers(shelfInformation[0], shelves);
    sortNumbers(shelves, sizeof(shelves) / sizeof(int));

    const int totalBooks = countLines(inputFile) - 1;
    char **bookInformation = readLines(inputFile, 2, totalBooks);
    struct book books[totalBooks];
    createBooks(bookInformation, books, totalBooks);

    int *range = getRange(0, totalBooks);
    int placements[factorial(totalBooks)][totalBooks];
    permute((int *)placements, range, totalBooks);

    int *result = solve(shelves, sizeof(shelves) / sizeof(int), (int *)placements, books, totalBooks);

    for(int i = 0; i < totalBooks; i++) {

        printf("%d ", result[i]);
    }

    freeLines(shelfInformation, 1);
    freeLines(bookInformation, totalBooks);
    freeBooks(books, totalBooks);
    free(range);
    free(result);

    return 0;
}

int * solve(int * shelves, int totalShelves, int * placements, struct book * books, int totalBooks) {

    int *result = NULL;
    const int totalPlacements = factorial(totalBooks);

    for(int i = 0, currentMin = 0; i < totalPlacements; i++) {

        int shelfIndex = 0;
        int remainWidth = shelves[shelfIndex];

        for(int j = 0; j < totalBooks; j++) {

            if(remainWidth >= books[placements[i * totalBooks + j]].width) {

                remainWidth -= books[placements[i * totalBooks + j]].width;

                continue;
            }

            if(++shelfIndex == totalShelves) {

                j = totalBooks;
            }
        }

        if(shelfIndex + 1 < currentMin || currentMin == 0) {

            currentMin = shelfIndex + 1;

            if(result == NULL) {

                result = (int *)malloc(totalBooks * sizeof(int));
            }

            for(int k = 0; k < totalBooks; k++) {

                result[k] = placements[i * totalBooks + k];
            }
        }
    }

    return result;
}