package main

import "testing"

func TestUpc(t *testing.T) {
	cases := []struct {
		code     string
		expected int
	}{
		{"04210000526", 4},
		{"03600029145", 2},
		{"12345678910", 4},
		{"00001234567", 0},
	}
	for _, c := range cases {
		if actual := upc(c.code); c.expected != actual {
			t.Errorf("upc(%q) == %d, expected %d", c.code, actual, c.expected)
		}
	}
}
