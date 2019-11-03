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

func TestToBase64Char(t *testing.T) {
	var cases = []struct {
		binary   string
		expected string
	}{
		{"010011", "T"},
		{"010110", "W"},
		{"000101", "F"},
		{"101110", "u"},
	}
	for _, c := range cases {
		if actual := toBase64Char(c.binary); actual != c.expected {
			t.Errorf("toBase64Char(%s) == %s, expected %s", string(c.binary), actual, c.expected)
		}
	}
}
