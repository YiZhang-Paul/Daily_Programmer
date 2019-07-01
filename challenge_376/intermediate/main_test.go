package main

import "testing"

func TestTotalLeaps(t *testing.T) {
	cases := []struct {
		start, end, expected int64
	}{
		{2016, 2017, 1},
		{2019, 2020, 0},
		{1900, 1901, 0},
		{2000, 2001, 1},
		{2800, 2801, 0},
		{123456, 123456, 0},
		{1234, 5678, 1077},
		{123456, 7891011, 1881475},
		{123456789101112, 1314151617181920, 288412747246240},
	}
	for _, c := range cases {
		if actual := totalLeaps(c.start, c.end); c.expected != actual {
			t.Errorf("totalLeaps(%d, %d) == %d, expected %d", c.start, c.end, actual, c.expected)
		}
	}
}
