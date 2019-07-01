package main

import "fmt"

func main() {
	showResult(1)
	showResult(2)
	showResult(3)
	showResult(5)
	showResult(6)
	showResult(9)
	showResult(14)
}

func showResult(number int) {
	fmt.Printf("subfactorial(%d) => %d\n", number, subfactorial(number))
}

func subfactorial(number int) int64 {
	if number == 1 {
		return 0
	}
	if number == 0 {
		return 1
	}
	return int64(number-1) * (subfactorial(number-1) + subfactorial(number-2))
}
