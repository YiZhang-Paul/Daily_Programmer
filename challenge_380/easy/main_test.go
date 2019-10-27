package main

import "testing"

func TestSmooshMorse(t *testing.T) {
	cases := []struct {
		word     string
		expected string
	}{
		{"sos", "...---..."},
		{"daily", "-...-...-..-.--"},
		{"programmer", ".--..-.-----..-..-----..-."},
		{"bits", "-.....-..."},
		{"three", "-.....-..."},
	}
	for _, c := range cases {
		if actual := SmooshMorse(c.word); c.expected != actual {
			t.Errorf("SmooshMorse(%s) == %s, expected %s", c.word, actual, c.expected)
		}
	}
}
