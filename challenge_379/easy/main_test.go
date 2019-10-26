package main

import "testing"

var calculator = NewTaxCalculator("./brackets.json")

func TestTax(t *testing.T) {
	cases := []struct {
		income   int
		expected int
	}{
		{0, 0},
		{10000, 0},
		{10009, 0},
		{10010, 1},
		{12000, 200},
		{56789, 8697},
		{1234567, 473326},
	}
	for _, c := range cases {
		if actual := calculator.Tax(c.income); c.expected != actual {
			t.Errorf("tax(%d) == %d, expected %d", c.income, actual, c.expected)
		}
	}
}
