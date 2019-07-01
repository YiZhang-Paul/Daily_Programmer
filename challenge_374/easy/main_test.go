package main

import "testing"

func TestGetAdditivePersistence(t *testing.T) {
	cases := []struct {
		number, expected int
	}{
		{13, 1},
		{1234, 2},
		{9876, 2},
		{199, 3},
	}
	for _, c := range cases {
		if actual := getAdditivePersistence(c.number); c.expected != actual {
			t.Errorf("getAdditivePersistence(%d) == %d, expected %d", c.number, actual, c.expected)
		}
	}
}
