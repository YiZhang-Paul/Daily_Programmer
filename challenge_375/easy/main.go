package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	// base challenge
	fmt.Printf("incrementDigit(%d) => %d\n", 998, incrementDigit(998))
	fmt.Printf("incrementDigit(%d) => %d\n", 315972, incrementDigit(315972))
}

func incrementDigit(number int) int {
	digits := toDigits(number)
	for i := range digits {
		digits[i]++
	}
	return toNumber(digits)
}

func toNumber(digits []int) int {
	stringified := reverse(toStrings(digits))
	number, err := strconv.Atoi(strings.Join(stringified, ""))
	if err != nil {
		return -1
	}
	return number
}

func reverse(list []string) []string {
	for i, j := 0, len(list)-1; i < j; i, j = i+1, j-1 {
		list[i], list[j] = list[j], list[i]
	}
	return list
}

func toStrings(digits []int) []string {
	result := make([]string, 0)
	for _, digit := range digits {
		result = append(result, strconv.Itoa(digit))
	}
	return result
}

func toDigits(number int) []int {
	digits := make([]int, 0)
	for number != 0 {
		digits = append(digits, number%10)
		number = (number - number%10) / 10
	}
	return digits
}
