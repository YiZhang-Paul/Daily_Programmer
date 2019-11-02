package main

import (
	"fmt"
	"time"
)

func main() {
	var inputs = []struct {
		year  int
		month int
		day   int
	}{
		{1898, 5, 12},
		{1903, 9, 9},
		{1997, 12, 7},
		{2001, 3, 17},
		{2017, 8, 1},
	}
	for _, input := range inputs {
		var dayInWeek = getDayInWeek(input.year, input.month, input.day)
		fmt.Printf("%d/%d/%d is %s.\n", input.month, input.day, input.year, dayInWeek)
	}
}

func daysInMonth(month, year int) int {
	return time.Date(year, time.Month(month+1), 0, 0, 0, 0, 0, time.UTC).Day()
}

func isLeapYear(year int) bool {
	return daysInMonth(2, year) == 29
}

func anchorDayByMonth(month, year int) int {
	month %= 12
	if month > 2 {
		return map[int]int{
			3:  0,
			4:  4,
			5:  2,
			6:  6,
			7:  4,
			8:  1,
			9:  5,
			10: 3,
			11: 7,
		}[month]
	}
	var isLeapYear = isLeapYear(year)
	if month == 0 {
		return 5
	} else if month == 1 {
		return ternaryInt(isLeapYear, 4, 3)
	} else {
		return ternaryInt(isLeapYear, 29, 28)
	}
}

func anchorDayByCentury(year int) int {
	return (year/100%4%7*5 + 2) % 7
}

func getDoomsday(year int) int {
	var offset = (year%100/12 + year%100%12 + year%100%12/4) % 7
	return (offset + anchorDayByCentury(year)) % 7
}

func ternaryInt(condition bool, whenTrue, whenFalse int) int {
	if condition {
		return whenTrue
	}
	return whenFalse
}

func getDayInWeek(year, month, day int) string {
	var (
		anchorDay = anchorDayByMonth(month, year)
		doomsday  = getDoomsday(year)
		dayInWeek = (day - anchorDay + doomsday) % 7
	)
	if dayInWeek < 0 {
		dayInWeek += 7
	}
	return []string{
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	}[dayInWeek]
}
