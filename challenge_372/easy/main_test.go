package main

import "testing"

func TestIsBalanced(t *testing.T) {
	checkXy, checkNone := []rune{'x', 'y'}, make([]rune, 0)
	cases := []struct {
		text     string
		check    []rune
		expected bool
	}{
		{"xxxyyy", checkXy, true},
		{"yyyxxx", checkXy, true},
		{"xxxyyyy", checkXy, false},
		{"yyxyxxyxxyyyyxxxyxyx", checkXy, true},
		{"xyxxxxyyyxyxxyxxyy", checkXy, false},
		{"", checkXy, true},
		{"x", checkXy, false},
		{"xxxyyyzzz", checkNone, true},
		{"abccbaabccba", checkNone, true},
		{"xxxyyyzzzz", checkNone, false},
		{"abcdefghijklmnopqrstuvwxyz", checkNone, true},
		{"pqq", checkNone, false},
		{"fdedfdeffeddefeeeefddf", checkNone, false},
		{"www", checkNone, true},
		{"x", checkNone, true},
		{"", checkNone, true},
	}
	for _, c := range cases {
		if actual := isBalanced(c.text, c.check); c.expected != actual {
			t.Errorf("isBalanced(%q, %q) == %t, expected %t", c.text, c.check, actual, c.expected)
		}
	}
}
