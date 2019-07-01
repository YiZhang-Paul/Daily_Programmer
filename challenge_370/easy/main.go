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
	oddSum, evenSum := 0, 0
	for i, digit := range toDigits(code) {
		if i%2 == 0 {
			oddSum += digit
		} else {
			evenSum += digit
		}
	}
	mod := (oddSum*3 + evenSum) % 10
	if mod == 0 {
		return 0
	}
	return 10 - mod
}

func toDigits(code string) []int {
	digits := make([]int, len(code))
	for i, char := range code {
		if digit, err := strconv.Atoi(string(char)); err == nil {
			digits[i] = digit
		}
	}
	return digits
}
