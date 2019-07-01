package main

import (
	"fmt"
	"sort"
)

func main() {
	showResult([]int{5, 3, 0, 2, 6, 2, 0, 7, 2, 5})
	showResult([]int{4, 2, 0, 1, 5, 0})
	showResult([]int{3, 1, 2, 3, 1, 0})
	showResult([]int{16, 9, 9, 15, 9, 7, 9, 11, 17, 11, 4, 9, 12, 14, 14, 12, 17, 0, 3, 16})
	showResult([]int{14, 10, 17, 13, 4, 8, 6, 7, 13, 13, 17, 18, 8, 17, 2, 14, 6, 4, 7, 12})
	showResult([]int{15, 18, 6, 13, 12, 4, 4, 14, 1, 6, 18, 2, 6, 16, 0, 9, 10, 7, 12, 3})
	showResult([]int{6, 0, 10, 10, 10, 5, 8, 3, 0, 14, 16, 2, 13, 1, 2, 13, 6, 15, 5, 1})
	showResult([]int{2, 2, 0})
	showResult([]int{3, 2, 1})
	showResult([]int{1, 1})
	showResult([]int{1})
	showResult([]int{})
}

func showResult(answers []int) {
	fmt.Printf("havelHakimi(%v) => %t\n", answers, havelHakimi(answers))
}

func havelHakimi(answers []int) bool {
	nonZeros := sortDescending(removeZeros(answers))
	if len(nonZeros) == 0 {
		return true
	}
	first, rest := nonZeros[0], nonZeros[1:]
	if first > len(rest) {
		return false
	}
	for i := range rest[0:first] {
		rest[i]--
	}
	return havelHakimi(rest)
}

func removeZeros(list []int) []int {
	removed := make([]int, 0)
	for _, value := range list {
		if value != 0 {
			removed = append(removed, value)
		}
	}
	return removed
}

func sortDescending(list []int) []int {
	sort.Sort(sort.Reverse(sort.IntSlice(list)))
	return list
}
