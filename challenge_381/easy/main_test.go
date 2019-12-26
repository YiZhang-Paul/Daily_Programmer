package main

import "testing"

func TestGetYahtzeeUpper(t *testing.T) {
	cases := []struct {
		numbers  []uint64
		expected uint64
	}{
		{[]uint64{2, 3, 5, 5, 6}, 10},
		{[]uint64{1, 1, 1, 1, 3}, 4},
		{[]uint64{1, 1, 1, 3, 3}, 6},
		{[]uint64{1, 2, 3, 4, 5}, 5},
		{[]uint64{6, 6, 6, 6, 6}, 30},
		{[]uint64{1654, 1654, 50995, 30864, 1654, 50995, 22747, 1654, 1654, 1654, 1654, 1654, 30864, 4868, 1654, 4868, 1654, 30864, 4868, 30864}, 123456},
	}
	for _, c := range cases {
		if actual := getYahtzeeUpper(c.numbers); c.expected != actual {
			t.Errorf("getYahtzeeUpper(%v) == %d, expected %d", c.numbers, actual, c.expected)
		}
	}
}
