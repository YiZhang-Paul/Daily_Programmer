package main

import (
	"fmt"
	"math"
)

func main() {
	// base challenge
	showValidateResult([]int{4, 2, 7, 3, 6, 8, 5, 1})
	showValidateResult([]int{2, 5, 7, 4, 1, 8, 6, 3})
	showValidateResult([]int{5, 3, 1, 4, 2, 8, 6, 3})
	showValidateResult([]int{5, 8, 2, 4, 7, 1, 3, 6})
	showValidateResult([]int{4, 3, 1, 8, 1, 3, 5, 2})
}

func showValidateResult(position []int) {
	fmt.Printf("validateNQueens(%v) => %t\n", position, validateNQueens(position))
}

func validateNQueens(position []int) bool {
	for i, valueI := range position {
		for j, valueJ := range position[i+1:] {
			if valueI == valueJ || abs(valueI-valueJ) == j+1 {
				return false
			}
		}
	}
	return true
}

func abs(value int) int {
	return int(math.Abs(float64(value)))
}
