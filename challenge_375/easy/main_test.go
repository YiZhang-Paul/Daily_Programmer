package main

import "testing"

func TestIncrementDigit(t *testing.T) {
	cases := []struct {
		number, expected int
	}{
		{998, 10109},
		{315972, 4261083},
	}
	for _, c := range cases {
		if actual := incrementDigit(c.number); c.expected != actual {
			t.Errorf("incrementDigit(%d) == %d, expected %d", c.number, actual, c.expected)
		}
	}
}
