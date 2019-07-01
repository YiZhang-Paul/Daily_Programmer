package main

import "fmt"

func main() {
	showResult(2016, 2017)
	showResult(2019, 2020)
	showResult(1900, 1901)
	showResult(2000, 2001)
	showResult(2800, 2801)
	showResult(123456, 123456)
	showResult(1234, 5678)
	showResult(123456, 7891011)
	showResult(123456789101112, 1314151617181920)
}

func showResult(start, end int64) {
	fmt.Printf("totalLeaps(%d, %d) => %d\n", start, end, totalLeaps(start, end))
}

func totalLeaps(start, end int64) int64 {
	var (
		d4      = totalDivisions(start, end, 4)
		d100    = totalDivisions(start, end, 100)
		dMod200 = totalDivisions(start-200, end-200, 900)
		dMod600 = totalDivisions(start-600, end-600, 900)
	)
	return d4 + dMod200 + dMod600 - d100
}

func totalDivisions(min, max, division int64) int64 {
	a, b := min/division, max/division
	if a*division < min {
		a++
	}
	if b*division == max {
		b--
	}
	if b < a {
		return 0
	}
	return b - a + 1
}
