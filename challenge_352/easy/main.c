#include <stdio.h>
#include <stdlib.h>

int getLength(long long);
char toBase62Digit(int);
char * toBase62(long long);

int main(void) {

    printf("%s\n", toBase62(15674));
    printf("%s\n", toBase62(7026425611433322325));
    printf("%s\n", toBase62(187621));
    printf("%s\n", toBase62(237860461));
    printf("%s\n", toBase62(2187521));
    printf("%s\n", toBase62(18752));

    return 0;
}

int getLength(long long number) {

    int length = 0;

    while(number) {

        length++;
        number = (number - number % 10) / 10;
    }

    return length;
}

char toBase62Digit(int number) {

    if(number < 36) {
        //0-9 when less than 10; a-z when between 10 and 35
        return number + (number < 10 ? 48 : 97 - 10);
    }
    //A-Z when between 36 and 61
    return number - 36 + 65;
}

//convert number to base 62 representation using remainder method
char * toBase62(long long number) {

    char *result = (char *)malloc(getLength(number));
    char *counter = result;

    while(number) {

        *counter++ = toBase62Digit(number % 62);
        number /= 62;
    }

    *counter = '\0';

    return result;
}