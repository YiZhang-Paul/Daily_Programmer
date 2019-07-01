package main

import (
	"fmt"
	"strconv"
)

func main() {
	showResult("04210000526")
	showResult("03600029145")
	showResult("12345678910")
	showResult("00001234567")
}

func showResult(code string) {
	fmt.Printf("upc(%q) => %d\n", code, upc(code))
}

func upc(code string) int {
	sum := 0
	for i, char := range code {
		if i%2 == 0 {
			if digit, err := strconv.Atoi(string(char)); err == nil {
				sum += digit
			}
		}
	}
	sum *= 3
	for i, char := range code {
		if i%2 == 1 {
			if digit, err := strconv.Atoi(string(char)); err == nil {
				sum += digit
			}
		}
	}
	if sum%10 == 0 {
		return 0
	}
	return 10 - sum%10
}
