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
	// bonus challenge
	showFixResult([]int{8, 6, 4, 2, 7, 1, 3, 5})
	showFixResult([]int{8, 5, 1, 3, 6, 2, 7, 4})
	showFixResult([]int{4, 6, 8, 3, 1, 2, 5, 7})
	showFixResult([]int{7, 1, 3, 6, 8, 5, 2, 4})
}

func showValidateResult(position []int) {
	fmt.Printf("isValidateNQueens(%v) => %t\n", position, isValidateNQueens(position))
}

func showFixResult(position []int) {
	fmt.Printf("fixNQueens(%v) => %v\n", position, fixNQueens(position))
}

func isValidateNQueens(position []int) bool {
	for i, valueI := range position {
		for j, valueJ := range position[i+1:] {
			if valueI == valueJ || abs(valueI-valueJ) == j+1 {
				return false
			}
		}
	}
	return true
}

func fixNQueens(position []int) []int {
	for i, valueI := range position {
		for j, valueJ := range position[i+1:] {
			if abs(valueI-valueJ) != j+1 {
				continue
			}
			if tryFixNQueens(position, i) || tryFixNQueens(position, i+j+1) {
				return position
			}
		}
	}
	return position
}

func tryFixNQueens(position []int, index int) bool {
	for i := range position {
		swap(position, index, i)
		if isValidateNQueens(position) {
			return true
		}
		swap(position, index, i)
	}
	return false
}

func swap(list []int, indexA int, indexB int) {
	list[indexA], list[indexB] = list[indexB], list[indexA]
}

func abs(value int) int {
	return int(math.Abs(float64(value)))
}
