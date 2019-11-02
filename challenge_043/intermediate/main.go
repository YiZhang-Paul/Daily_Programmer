package main

import "time"

func main() {

}

func daysInMonth(month, year int) int {
	return time.Date(year, time.Month(month+1), 0, 0, 0, 0, 0, time.UTC).Day()
}

func isLeapYear(year int) bool {
	return daysInMonth(2, year) == 29
}

func anchorDay(month, year int) int {
	month %= 12
	if month <= 2 {
		var isLeapYear = isLeapYear(year)
		if month == 0 {
			return 12
		} else if month == 1 {
			return ternaryInt(isLeapYear, 4, 3)
		} else {
			return ternaryInt(isLeapYear, 29, 28)
		}
	}
	var lookup = map[int]int{
		3:  0,
		4:  4,
		5:  9,
		6:  6,
		7:  11,
		8:  8,
		9:  5,
		10: 10,
		11: 7,
	}
	return lookup[month]
}

func ternaryInt(condition bool, whenTrue, whenFalse int) int {
	if condition {
		return whenTrue
	}
	return whenFalse
}
