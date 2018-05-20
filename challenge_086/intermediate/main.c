#include <stdio.h>
#include <stdlib.h>

int getAnchorDay(int);
int getDoomsday(int);

int main(void) {

    return 0;
}

int getAnchorDay(int year) {

    int anchors[4] = { 2, 0, 5, 3 };

    return anchors[year / 100 % 4];
}

int getDoomsday(int year) {

    const int lastTwo = year % 100;
    const int anchor = getAnchorDay(year);

    return (lastTwo / 12 + lastTwo % 12 + lastTwo % 12 / 4 + anchor) % 7;
}