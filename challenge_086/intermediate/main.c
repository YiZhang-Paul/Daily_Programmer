#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int getAnchorDay(int);
int getDoomsday(int);
bool isLeapYear(int);
char * getDayInWeek(int, int, int);

int main(void) {

    printf("%s\n", getDayInWeek(1, 5, 2018));
    printf("%s\n", getDayInWeek(2, 5, 2018));
    printf("%s\n", getDayInWeek(9, 5, 2018));
    printf("%s\n", getDayInWeek(10, 5, 2018));
    printf("%s\n", getDayInWeek(20, 5, 2018));

    return 0;
}

int getAnchorDay(int year) {

    int anchors[] = { 2, 0, 5, 3 };

    return anchors[year / 100 % 4];
}

int getDoomsday(int year) {

    const int lastTwo = year % 100;
    const int anchorDay = getAnchorDay(year);

    return (lastTwo / 12 + lastTwo % 12 + lastTwo % 12 / 4 + anchorDay) % 7;
}

bool isLeapYear(int year) {

    if(year % 4 != 0) {

        return false;
    }

    return year % 100 != 0 || year % 400 == 0;
}

char * getDayInWeek(int day, int month, int year) {

    const bool leap = isLeapYear(year);
    const int doomsday = getDoomsday(year) + 35;

    int marker[] = {

        leap ? 4 : 3, leap ? 29 : 28, 7, 4, 9, 6, 11, 8, 5, 10, 7, 12
    };

    char *dayInWeek[] = {

        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    };

    return dayInWeek[(doomsday + day - marker[month - 1]) % 7];
}