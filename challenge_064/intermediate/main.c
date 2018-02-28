#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

void toLowerCase(char *);
void swap(char *, char *);
void reverse(char *);

int main(void) {

    char input[] = "FourscoreandsevenyearsagoourfaathersbroughtforthonthiscontainentanewnationconceivedinzLibertyanddedicatedtothepropositionthatallmenarecreatedequalNowweareengagedinagreahtcivilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
    toLowerCase(input);
    char copy[strlen(input)];
    strcpy(copy, input);

    printf("%s\n", input);
    reverse(copy);
    printf("%s\n", copy);

    return 0;
}

void toLowerCase(char * text) {

    for(int i = 0; i < strlen(text); i++) {

        text[i] = tolower(text[i]);
    }
}

void swap(char * character1, char * character2) {

    char temporary = *character1;
    *character1 = *character2;
    *character2 = temporary;
}

void reverse(char * text) {

    char *start = text;
    char *end = text + strlen(text) - 1;

    while(start < end) {

        swap(start++, end--);
    }
}