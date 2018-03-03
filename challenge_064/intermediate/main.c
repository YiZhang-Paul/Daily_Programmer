#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

char * copy(char *);
void copyRange(char *, char *, int, int);
char * toLowerCase(char *);
void swap(char *, char *);
char * reverse(char *);
char * longestPalindrome(char *);

int main(void) {

    char input[] = "FourscoreandsevenyearsagoourfaathersbroughtforthonthiscontainentanewnationconceivedinzLibertyanddedicatedtothepropositionthatallmenarecreatedequalNowweareengagedinagreahtcivilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth";
    char *result = longestPalindrome(input);

    printf("%s\n", result);

    free(result);

    return 0;
}

char * copy(char * text) {

    char *copied = malloc(strlen(text) + 1);

    return strcpy(copied, text);
}

void copyRange(char * target, char * source, int start, int length) {

    for(int i = 0; i < length; i++) {

        target[i] = source[start + i];
    }

    target[length] = '\0';
}

char * toLowerCase(char * text) {

    char *lowerCase = copy(text);

    for(int i = 0; i < strlen(lowerCase); i++) {

        lowerCase[i] = tolower(lowerCase[i]);
    }

    return lowerCase;
}

void swap(char * index1, char * index2) {

    char temporary = *index1;
    *index1 = *index2;
    *index2 = temporary;
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

//find palindrome by comparing original text with its reversed version
char * longestPalindrome(char * text) {

    const int length = strlen(text);
    char *lowerCase = toLowerCase(text);
    char *reversed = reverse(text);
    char *result = malloc(length + 1);
    //look for matching patterns
    for(int i = 0, longest = 0; i < length - longest; i++) {
        //j: counter on original text; k: counter on reversed text
        for(int j = i, k = 0, newLongest = 0; j < length; j++, k++) {

            if(lowerCase[k] == reversed[j]) {

                newLongest++;

                continue;
            }

            if(newLongest > longest) {
                //update current longest palindrome
                longest = newLongest;
                copyRange(result, lowerCase, k - longest, longest);
            }

            newLongest = 0;
        }
    }

    free(lowerCase);
    free(reversed);

    return result;
}