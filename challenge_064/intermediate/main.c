#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

char * copy(char *);
void copyFrom(char *, char *, int, int);
char * toLowerCase(char *);
void swap(char *, char *);
char * reverse(char *);
char * longestPalindrome(char *);

int main(void) {

    char input[] = "FourscoreandsevenyearsagoourfaathersbroughtforthonthiscontainentanewnationconceivedinzLibertyanddedicatedtothepropositionthatallmenarecreatedequalNowweareengagedinagreahtcivilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
    char *palindrome = longestPalindrome(input);

    printf("%s\n", palindrome);

    free(palindrome);

    return 0;
}

char * copy(char * text) {

    char *copied = malloc(sizeof *copied * strlen(text));

    return strcpy(copied, text);
}

void copyFrom(char * target, char * source, int startIndex, int length){

    for(int i = 0; i < length; i++) {

        target[i] = source[startIndex + i];
    }

    target[length] = '\0';
}

char * toLowerCase(char * text) {

    char *lowerCased = copy(text);

    for(int i = 0; i < strlen(lowerCased); i++) {

        lowerCased[i] = tolower(lowerCased[i]);
    }

    return lowerCased;
}

void swap(char * character1, char * character2) {

    char temporary = *character1;
    *character1 = *character2;
    *character2 = temporary;
}

char * reverse(char * text) {

    char *reversed = copy(text);
    char *start = reversed;
    char *end = reversed + strlen(text) - 1;

    while(start < end) {

        swap(start++, end--);
    }

    return reversed;
}

char * longestPalindrome(char * text) {

    const int length = strlen(text);
    char *lowerCased = toLowerCase(text);
    char *reversed = reverse(text);
    char *palindrome = malloc(sizeof *palindrome * length);

    for(int i = 0, longest = 0; i < length - longest; i++) {

        for(int j = i, k = 0, newLongest = 0; j < length; j++, k++) {

            if(lowerCased[k] != reversed[j]) {

                if(newLongest > longest) {

                    longest = newLongest;
                    copyFrom(palindrome, lowerCased, k - longest, longest);
                }

                newLongest = 0;

                continue;
            }

            newLongest++;
        }
    }

    free(lowerCased);
    free(reversed);

    return palindrome;
}