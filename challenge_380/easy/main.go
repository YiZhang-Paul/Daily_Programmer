package main

import (
	"fmt"
	"strings"
)

var codesMap = map[string]string{
	"a": ".-",
	"b": "-...",
	"c": "-.-.",
	"d": "-..",
	"e": ".",
	"f": "..-.",
	"g": "--.",
	"h": "....",
	"i": "..",
	"j": ".---",
	"k": "-.-",
	"l": ".-..",
	"m": "--",
	"n": "-.",
	"o": "---",
	"p": ".--.",
	"q": "--.-",
	"r": ".-.",
	"s": "...",
	"t": "-",
	"u": "..-",
	"v": "...-",
	"w": ".--",
	"x": "-..-",
	"y": "-.--",
	"z": "--..",
}

func SmooshMorse(word string) string {
	var codes = make([]string, 0)
	for _, letter := range word {
		codes = append(codes, codesMap[string(letter)])
	}
	return strings.Join(codes, "")
}

func main() {
	for _, word := range []string{"sos", "daily", "programmer", "bits", "three"} {
		fmt.Printf("SmooshMorse(%s) => %s\n", word, SmooshMorse(word))
	}
}
