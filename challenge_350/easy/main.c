#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "headers/utility.h"
#include "headers/permute.h"
#include "headers/book.h"

int * storeResult(int *, int *, int, int);
int * findPlacement(int *, int, int *, struct book *, int);
int * findLargePlacement(int *, int, int *, struct book *, int);
int * getShelfWidths(char *, int *);
struct book * getBooks(char *, int *);
void showUnfitBooks(int *, struct book *, int, int);
void showShelfWithBooks(int *, int *, struct book *, int);
void showResult(int *, int *, struct book *, int, int);
void solve(char *);

int main(void) {

    printf("Default Input:");
    solve("input1.txt");
    solve("input2.txt");
    solve("input3.txt");

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

        int shelf = 0;
        int remainWidth = shelves[shelf];

        for(int j = 0; j < totalBooks; j++) {

            if(remainWidth < books[placements[i * totalBooks + j]].width) {

                const int hasMoreShelf = ++shelf < totalShelves;
                remainWidth = hasMoreShelf ? shelves[shelf] : 0;
                j = hasMoreShelf ? j - 1 : totalBooks;

                continue;
            }

            remainWidth -= books[placements[i * totalBooks + j]].width;
        }

        if(shelf < totalShelves && (shelf + 1 < currentMin || currentMin == 0)) {

            currentMin = shelf + 1;
            result = storeResult(result, placements, i, totalBooks);
        }
    }

    return result;
}

int * findLargePlacement(int * shelves, int totalShelves, int * indexes, struct book * books, int totalBooks) {

    int *result = NULL;
    int currentMin = 0;
    int totalTry = 0;

    while(totalTry++ <= 1000000 && !isMaxPermute(indexes, totalBooks)) {

        int shelf = 0;
        int remainWidth = shelves[shelf];

        for(int i = 0; i < totalBooks; i++) {

            if(remainWidth < books[indexes[i]].width) {

                const int hasMoreShelf = ++shelf < totalShelves;
                remainWidth = hasMoreShelf ? shelves[shelf] : 0;
                i = hasMoreShelf ? i - 1 : totalBooks;

                continue;
            }

            remainWidth -= books[indexes[i]].width;
        }

        if(shelf < totalShelves && (shelf + 1 < currentMin || currentMin == 0)) {

            currentMin = shelf + 1;
            result = storeResult(result, indexes, 0, totalBooks);
        }

        nextPermute(indexes, totalBooks);
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

void showUnfitBooks(int * shelves, struct book * books, int totalShelves, int totalBooks) {

    printf("Book(s) that don't fit:\n");

    for(int i = 0, total = 1; i < totalBooks; i++) {

        for(int j = 0; j < totalShelves; j++) {

            if(books[i].width > shelves[j]) {

                printf("%d.(width: %d) %s", total++, books[i].width, books[i].title);
                j = totalShelves;
            }
        }
    }
}

void showShelfWithBooks(int * result, int * shelves, struct book * books, int totalBooks) {

    int shelf = -1;

    for(int i = 0, j = 1, remainWidth = -1; i < totalBooks; i++) {

        if(remainWidth < books[result[i]].width) {

            i--;
            j = 1;
            remainWidth = shelves[++shelf];
            printf("\n\nShelf (size: %d) is used;\n\nBooks on Shelf:\n", shelves[shelf]);

            continue;
        }

        printf("%d.%s", j++, books[result[i]].title);
        remainWidth -= books[result[i]].width;
    }

    printf("\nA total of %d shelves used.\n", shelf + 1);
}

void showResult(int * result, int * shelves, struct book * books, int totalShelves, int totalBooks) {

    if(result == NULL) {

        printf("\nImposible.\n\n");
        showUnfitBooks(shelves, books, totalShelves, totalBooks);

        return;
    }

    showShelfWithBooks(result, shelves, books, totalBooks);
}

void solve(char * url) {

    int totalShelves = 0;
    int *shelves = getShelfWidths(url, &totalShelves);

    int totalBooks = 0;
    struct book *books = getBooks(url, &totalBooks);

    int *range = getRange(0, totalBooks);
    int *result;

    if(totalBooks <= 7) {

        int placements[factorial(totalBooks)][totalBooks];
        permute((int *)placements, range, totalBooks);
        result = findPlacement(shelves, totalShelves, (int *)placements, books, totalBooks);
    }
    else {

        result = findLargePlacement(shelves, totalShelves, range, books, totalBooks);
    }

    showResult(result, shelves, books, totalShelves, totalBooks);

    free(shelves);
    freeBooks(books, totalBooks);
    free(range);
    free(result);
}