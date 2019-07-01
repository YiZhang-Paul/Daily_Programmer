package main

import "testing"

func TestValidateNQueens(t *testing.T) {
	cases := []struct {
		position []int
		expected bool
	}{
		{[]int{4, 2, 7, 3, 6, 8, 5, 1}, true},
		{[]int{2, 5, 7, 4, 1, 8, 6, 3}, true},
		{[]int{5, 3, 1, 4, 2, 8, 6, 3}, false},
		{[]int{5, 8, 2, 4, 7, 1, 3, 6}, false},
		{[]int{4, 3, 1, 8, 1, 3, 5, 2}, false},
	}
	for _, c := range cases {
		if actual := validateNQueens(c.position); c.expected != actual {
			t.Errorf("validateNQueens(%v) == %t, expected %t", c.position, actual, c.expected)
		}
	}
}
