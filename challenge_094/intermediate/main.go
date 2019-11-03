package main

import (
	"fmt"
	"math"
	"strconv"
	"strings"
)

var table = []string{
	"A", "B", "C", "D", "E", "F", "G", "H",
	"I", "J", "K", "L", "M", "N", "O", "P",
	"Q", "R", "S", "T", "U", "V", "W", "X",
	"Y", "Z", "a", "b", "c", "d", "e", "f",
	"g", "h", "i", "j", "k", "l", "m", "n",
	"o", "p", "q", "r", "s", "t", "u", "v",
	"w", "x", "y", "z", "0", "1", "2", "3",
	"4", "5", "6", "7", "8", "9", "+", "-",
}

func main() {
	var inputs = []string{
		"Man",
		"Ma",
		"M",
		"Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.",
	}
	for _, input := range inputs {
		fmt.Printf("encodeBase64(%s) = %s\n", input, encodeBase64(input))
	}
}

func toBinary(character rune) string {
	var (
		binary = ""
		index  = int(character)
	)
	for index > 0 {
		binary = strconv.Itoa(index%2) + binary
		index /= 2
	}
	return strings.Repeat("0", 8-len(binary)) + binary
}

func toDecimal(binary string) int {
	var decimal = 0.0
	for i, character := range binary {
		if character == '1' {
			decimal += math.Pow(2, float64(len(binary)-1-i))
		}
	}
	return int(decimal)
}

func toBase64Char(binary string) string {
	var decimal = toDecimal(binary)
	if decimal < 0 || decimal > 63 {
		return ""
	}
	return table[decimal]
}

func encodeBase64(text string) string {
	var (
		binary  strings.Builder
		encoded strings.Builder
	)
	for _, character := range text {
		binary.WriteString(toBinary(character))
	}
	var padded = padString(binary.String(), "0", 6)
	for i := 0; i < len(padded); i += 6 {
		encoded.WriteString(toBase64Char(padded[i : i+6]))
	}
	return padString(encoded.String(), "=", 4)
}

func padString(text, pad string, size int) string {
	if len(text)%size == 0 {
		return text
	}
	return text + strings.Repeat(pad, size-len(text)%size)
}
