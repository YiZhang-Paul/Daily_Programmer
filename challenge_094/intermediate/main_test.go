package main

import "testing"

func TestToBinary(t *testing.T) {
	var cases = []struct {
		character rune
		expected  string
	}{
		{'M', "01001101"},
		{'a', "01100001"},
		{'n', "01101110"},
	}
	for _, c := range cases {
		if actual := toBinary(c.character); actual != c.expected {
			t.Errorf("toBinary(%s) == %s, expected %s", string(c.character), actual, c.expected)
		}
	}
}
