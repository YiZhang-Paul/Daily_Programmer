package main

import (
	"strconv"
	"strings"
)

func main() {

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
