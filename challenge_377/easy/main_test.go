package main

import "testing"

func TestAlignAxis2D(t *testing.T) {
	cases := []struct {
		crateX, crateY, boxX, boxY, expected int
	}{
		{25, 18, 6, 5, 12},
		{10, 10, 1, 1, 100},
		{12, 34, 5, 6, 10},
		{12345, 678910, 1112, 1314, 5676},
		{5, 100, 6, 1, 0},
	}
	for _, c := range cases {
		if actual := alignAxis2D(c.crateX, c.crateY, c.boxX, c.boxY); c.expected != actual {
			format := "alignAxis2D(%d, %d, %d, %d) == %d, expected %d"
			t.Errorf(format, c.crateX, c.crateY, c.boxX, c.boxY, actual, c.expected)
		}
	}
}
