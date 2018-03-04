#include <stdio.h>
#include <stdlib.h>
#include "header/encoder.h"
#include "header/decoder.h"

int main(void) {

    char text[] = "Brake me out of jail on the 21st";
    char alphabet[] = "R3FLMX7KWQ69D4Y5NOZ STV2EH8AP1ICBGU0";
    char keyword[] = "PROGRAMMER";

    char *encoded = encode(text, alphabet, keyword);
    printf("%s\n", encoded);
    char *decoded = decode(encoded, alphabet, keyword);
    printf("%s\n", decoded);

    free(encoded);
    free(decoded);

    return 0;
}