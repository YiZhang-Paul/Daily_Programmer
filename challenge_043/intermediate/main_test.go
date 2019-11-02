package main

import "testing"

func TestDaysInMonth(t *testing.T) {
	cases := []struct {
		month    int
		year     int
		expected int
	}{
		{1, 2019, 31},
		{2, 2019, 28},
		{2, 2020, 29},
		{3, 2019, 31},
		{4, 2019, 30},
		{5, 2019, 31},
		{6, 2019, 30},
		{7, 2019, 31},
		{8, 2019, 31},
		{9, 2019, 30},
		{10, 2019, 31},
		{11, 2019, 30},
		{12, 2019, 31},
	}
	for _, c := range cases {
		if actual := daysInMonth(c.month, c.year); c.expected != actual {
			t.Errorf("daysInMonth(%d, %d) == %d, expected %d", c.month, c.year, actual, c.expected)
		}
	}
}

func TestIsLeapYear(t *testing.T) {
	cases := []struct {
		year     int
		expected bool
	}{
		{2019, false},
		{2020, true},
	}
	for _, c := range cases {
		if actual := isLeapYear(c.year); c.expected != actual {
			t.Errorf("isLeapYear(%d) == %t, expected %t", c.year, actual, c.expected)
		}
	}
}

func TestAnchorDay(t *testing.T) {
	cases := []struct {
		month    int
		year     int
		expected int
	}{
		{1, 2019, 3},
		{1, 2020, 4},
		{2, 2019, 28},
		{2, 2020, 29},
		{3, 2019, 0},
		{4, 2019, 4},
		{5, 2019, 9},
		{6, 2019, 6},
		{7, 2019, 11},
		{8, 2019, 8},
		{9, 2019, 5},
		{10, 2019, 10},
		{11, 2019, 7},
		{12, 2019, 12},
	}
	for _, c := range cases {
		if actual := anchorDay(c.month, c.year); c.expected != actual {
			t.Errorf("anchorDay(%d, %d) == %d, expected %d", c.month, c.year, actual, c.expected)
		}
	}
}
