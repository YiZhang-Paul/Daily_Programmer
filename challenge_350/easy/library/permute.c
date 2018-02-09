#include <stdio.h>
#include <stdlib.h>
#include "../headers/permute.h"
#include "../headers/utility.h"

int * excludeIndex(int * numbers, int index, int length) {

    int *excluded = (int *)malloc((length - 1) * sizeof(int));

    for(int i = 0, j = 0; i < length; i++) {

        if(i != index) {

            excluded[j++] = numbers[i];
        }
    }

    return excluded;
}

int * replaceIndex(int * numbers, int index, int newValue, int length) {

    int *swaped = copyRange(numbers, length);
    swaped[index] = newValue;

    return swaped;
}

void copyRow(int * grid, int row, int columnWidth, int * toCopy) {

    for(int i = 0; i < columnWidth; i++) {

        grid[row * columnWidth + i] = toCopy[i];
    }
}

void startPermute(int * permutation, int * numbers, int totalNumbers, int numbersRemain, int * current, int * permutes) {

    if(numbersRemain == 0) {

        copyRow(permutation, (*permutes)++, totalNumbers, current);
        free(current);

        return;
    }

    for(int i = 0; i < numbersRemain; i++) {

        int *otherNumbers = excludeIndex(numbers, i, numbersRemain);
        int *newCurrent = replaceIndex(current, totalNumbers - numbersRemain, numbers[i], totalNumbers);
        startPermute(permutation, otherNumbers, totalNumbers, numbersRemain - 1, newCurrent, permutes);
        free(newCurrent);
    }

    if(totalNumbers != numbersRemain) {

        free(numbers);
    }
}

void swap(int * numbers, int index1, int index2) {

    const int temporary = numbers[index1];
    numbers[index1] = numbers[index2];
    numbers[index2] = temporary;
}

void reverse(int * numbers, int start, int end) {

    while(start < end) {

        swap(numbers, start++, end--);
    }
}

void permute(int * permutation, int * numbers, int totalNumbers) {

    int current[totalNumbers];
    int totalPermute = 0;

    startPermute(permutation, numbers, totalNumbers, totalNumbers, current, &totalPermute);
}

int * nextPermute(int * numbers, int total) {

    for(int i = total - 2; i >= 0; i--) {

        if(numbers[i] < numbers[i + 1]) {

            for(int j = total - 1; j >= 0; j--) {

                if(numbers[j] > numbers[i]) {

                    swap(numbers, i, j);
                    reverse(numbers, i + 1, total - 1);

                    return numbers;
                }
            }
        }
    }

    return numbers;
}