package main

import "fmt"

func main() {
	showResult(13)
	showResult(1234)
	showResult(9876)
	showResult(199)
}

func showResult(number int) {
	fmt.Printf("getAdditivePersistence(%d) => %d\n", number, getAdditivePersistence(number))
}

func getAdditivePersistence(number int) int {
	persistence := 0
	for number > 9 {
		number, persistence = sum(getDigits(number)), persistence+1
	}
	return persistence
}

func sum(digits []int) int {
	result := 0
	for _, digit := range digits {
		result += digit
	}
	return result
}

func getDigits(number int) []int {
	digits := make([]int, 0)
	for number != 0 {
		digits = append(digits, number%10)
		number = (number - number%10) / 10
	}
	return digits
}
