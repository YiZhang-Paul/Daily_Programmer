package main

import (
	"math"
	"testing"
)

func TestSqrt(t *testing.T) {
	var cases = []struct {
		value    float64
		expected float64
	}{
		{4, 2},
		{16, 4},
		{256, 16},
		{655.36, 25.6},
		{55, 7.4161984},
	}
	for _, c := range cases {
		if actual := sqrt(c.value); math.Abs(actual-c.expected) > 0.001 {
			t.Errorf("sqrt(%f) == %f, expected %f", c.value, actual, c.expected)
		}
	}
}
