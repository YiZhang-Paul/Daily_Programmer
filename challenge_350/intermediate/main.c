#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int * parseNumbers(char *, int);
int sum(int *, int, int, int);
int * findEquilibria(char *, int, int *);
void solve(char *, int);

int main(void) {

    //challenge & bonus input
    char input1[] = "0 -3 5 -4 -2 3 1 0";
    solve(input1, 8);

    char input2[] = "3 -2 2 0 3 4 -6 3 5 -4 8";
    solve(input2, 11);

    char input3[] = "9 0 -5 -4 1 4 -4 -9 0 -7 -1";
    solve(input3, 11);

    char input4[] = "9 -7 6 -8 3 -9 -5 3 -6 -8 5";
    solve(input4, 11);

    return 0;
}

int * parseNumbers(char * input, int total) {

    int *output = (int *)malloc(total * sizeof(int));
    int current = 0;
    const char *delimiter = " ";
    char *token = strtok(input, delimiter);

    while(token != NULL) {

        output[current++] = atoi(token);
        token = strtok(NULL, delimiter);
    }

    return output;
}

int sum(int * numbers, int start, int end, int total) {

    int result = 0;

    for(int i = start; i <= end; i++) {

        if(i < total) {

            result += numbers[i];
        }
    }

    return result;
}

int * findEquilibria(char * input, int total, int * outputLength) {

    int *numbers = parseNumbers(input, total);
    int leftSum = 0;
    int rightSum = sum(numbers, 1, total - 1, total);
    int *output = (int *)malloc(total * sizeof(int));

    for(int i = 1; i <= total; i++) {

        if(leftSum == rightSum) {

            output[(*outputLength)++] = i - 1;
        }

        leftSum += numbers[i - 1];
        rightSum -= numbers[i];
    }

    free(numbers);

    return output;
}

void solve(char * input, int total) {

    int outputLength = 0;
    int *result = findEquilibria(input, total, &outputLength);

    for(int i = 0; i < outputLength; i++) {

        printf("%d ", result[i]);
    }

    printf("\n");

    free(result);
}