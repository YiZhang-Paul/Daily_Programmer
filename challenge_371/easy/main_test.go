package main

import "testing"

func TestIsValidateNQueens(t *testing.T) {
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
		if actual := isValidateNQueens(c.position); c.expected != actual {
			t.Errorf("isValidateNQueens(%v) == %t, expected %t", c.position, actual, c.expected)
		}
	}
}

func TestFixNQueens(t *testing.T) {
	cases := []struct {
		position, expected []int
	}{
		{[]int{8, 6, 4, 2, 7, 1, 3, 5}, []int{4, 6, 8, 2, 7, 1, 3, 5}},
		{[]int{8, 5, 1, 3, 6, 2, 7, 4}, []int{8, 4, 1, 3, 6, 2, 7, 5}},
		{[]int{4, 6, 8, 3, 1, 2, 5, 7}, []int{4, 6, 8, 3, 1, 7, 5, 2}},
		{[]int{7, 1, 3, 6, 8, 5, 2, 4}, []int{7, 3, 1, 6, 8, 5, 2, 4}},
	}
	for _, c := range cases {
		actual := fixNQueens(c.position)
		for i, value := range actual {
			if c.expected[i] != value {
				t.Errorf("fixNQueens(%v) == %v, expected %v", c.position, actual, c.expected)
				break
			}
		}
	}
}
