package main

import "testing"

func TestFlip(t *testing.T) {
	cases := []struct {
		cards    string
		expected bool
	}{
		{"0100110", true},
		{"01001100111", false},
		{"100001100101000", true},
		{"001011011101001001000", true},
		{"1010010101001011011001011101111", false},
		{"1101110110000001010111011100110", true},
		{"010111111111100100101000100110111000101111001001011011000011000", true},
	}
	for _, c := range cases {
		if flip(c.cards) == "no solution" && c.expected {
			t.Errorf("flip(%v) is expected to have at least one solution", c.cards)
		}
	}
}
