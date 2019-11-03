package main

import (
	"fmt"
	"strconv"
	"strings"
	"time"
)

func main() {
	printCalendar(1, 2012)
	printCalendar(10, 2019)
	printCalendar(2, 2020)
}

func printCalendar(month, year int) {
	printLinebreak()
	printMonthHeader(month)
	printLinebreak()
	printWeekdayHeader()
	printLinebreak()
	printMonthDays(month, year)
	printLinebreak()
}

func printLinebreak() {
	fmt.Println("+--------------------+")
}

func printMonthHeader(month int) {
	var (
		months = []string{
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		}
		title        = months[(month-1)%12]
		totalSpaces  = 20 - len(title)
		paddingLeft  = strings.Repeat(" ", totalSpaces/2)
		paddingRight = strings.Repeat(" ", totalSpaces-totalSpaces/2)
	)
	fmt.Println("|" + paddingLeft + title + paddingRight + "|")
}

func printWeekdayHeader() {
	fmt.Println("|S |M |T |W |T |F |S |")
}

func printMonthDays(month, year int) {
	var (
		total   = utcDate(year, month+1, 0).Day()
		weekday = int(utcDate(year, month, 1).Weekday())
		days    = appendValue(make([]string, 0), "  ", weekday)
	)
	for i := 1; i <= total; i++ {
		var day = strconv.Itoa(i)
		days = append(days, strings.Repeat(" ", 2-len(day))+day)
	}
	days = appendValue(days, "  ", (7-len(days)%7)%7)
	for i := 0; i < len(days); i += 7 {
		var week = strings.Join(days[i:i+7], "|")
		fmt.Println("|" + week + "|")
	}
}

func utcDate(year, month, day int) time.Time {
	return time.Date(year, time.Month(month), day, 0, 0, 0, 0, time.UTC)
}

func ternaryString(condition bool, whenTrue, whenFalse string) string {
	if condition {
		return whenTrue
	}
	return whenFalse
}

func appendValue(collection []string, value string, total int) []string {
	for i := 0; i < total; i++ {
		collection = append(collection, value)
	}
	return collection
}
