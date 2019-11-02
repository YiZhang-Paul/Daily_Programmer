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

func TestAnchorDayByMonth(t *testing.T) {
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
		{5, 2019, 2},
		{6, 2019, 6},
		{7, 2019, 4},
		{8, 2019, 1},
		{9, 2019, 5},
		{10, 2019, 3},
		{11, 2019, 7},
		{12, 2019, 5},
	}
	for _, c := range cases {
		if actual := anchorDayByMonth(c.month, c.year); c.expected != actual {
			t.Errorf("anchorDayByMonth(%d, %d) == %d, expected %d", c.month, c.year, actual, c.expected)
		}
	}
}

func TestAnchorDayByCentury(t *testing.T) {
	cases := []struct {
		year     int
		expected int
	}{
		{1850, 5},
		{1997, 3},
		{2015, 2},
		{2179, 0},
	}
	for _, c := range cases {
		if actual := anchorDayByCentury(c.year); c.expected != actual {
			t.Errorf("anchorDayByCentury(%d) == %d, expected %d", c.year, actual, c.expected)
		}
	}
}

func TestGetDoomsday(t *testing.T) {
	cases := []struct {
		year     int
		expected int
	}{
		{1898, 1},
		{1903, 6},
		{1926, 0},
		{1997, 5},
		{2001, 3},
		{2017, 2},
	}
	for _, c := range cases {
		if actual := getDoomsday(c.year); c.expected != actual {
			t.Errorf("getDoomsday(%d) == %d, expected %d", c.year, actual, c.expected)
		}
	}
}

func TestGetDayInWeek(t *testing.T) {
	cases := []struct {
		year     int
		month    int
		day      int
		expected string
	}{
		{1898, 5, 12, "Thursday"},
		{1903, 9, 9, "Wednesday"},
		{1997, 12, 7, "Sunday"},
		{2001, 3, 17, "Saturday"},
		{2017, 8, 1, "Tuesday"},
	}
	for _, c := range cases {
		if actual := getDayInWeek(c.year, c.month, c.day); c.expected != actual {
			t.Errorf("getDayInWeek(%d, %d, %d) == %s, expected %s", c.year, c.month, c.day, actual, c.expected)
		}
	}
}
