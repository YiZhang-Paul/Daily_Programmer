package main

import "testing"

func TestSubfactorial(t *testing.T) {
	cases := []struct {
		number   int
		expected int64
	}{
		{1, 0},
		{2, 1},
		{3, 2},
		{5, 44},
		{6, 265},
		{9, 133496},
		{14, 32071101049},
	}
	for _, c := range cases {
		if actual := subfactorial(c.number); c.expected != actual {
			t.Errorf("subfactorial(%d) == %d, expected %d", c.number, actual, c.expected)
		}
	}
}
