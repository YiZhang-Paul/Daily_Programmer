#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

void toLowerCase(char *);
void swap(char *, char *);
void reverse(char *);
char * longestPalindrome(char *);

int main(void) {

    char input[] = "FourscoreandsevenyearsagoourfaathersbroughtforthonthiscontainentanewnationconceivedinzLibertyanddedicatedtothepropositionthatallmenarecreatedequalNowweareengagedinagreahtcivilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
    char *longest = longestPalindrome(input);

    printf("%s\n", longest);

    free(longest);

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

char * longestPalindrome(char * text) {

    toLowerCase(text);
    char copy[strlen(text)];
    strcpy(copy, text);
    reverse(copy);

    char *palindrome = malloc(sizeof *palindrome * strlen(text));
    int longest = 0;

    for(int i = 0; i < strlen(text) - longest; i++) {

        int newLongest = 0;

        for(int j = i, k = 0; j < strlen(text); j++, k++) {

            if(text[k] != copy[j]) {

                if(newLongest > longest) {

                    for(int l = k - newLongest, m = 0; l < k; l++) {

                        palindrome[m++] = text[l];
                    }

                    palindrome[newLongest] = '\0';
                    longest = newLongest;
                }

                newLongest = 0;

                continue;
            }

            newLongest++;
        }
    }

    return palindrome;
}