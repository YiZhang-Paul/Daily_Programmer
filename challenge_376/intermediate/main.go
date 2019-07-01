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
	if start == end {
		return 0
	}
	total, four1, four2 := int64(0), start/4, end/4
	if four1*4 < start {
		four1++
	}
	if four2*4 == end {
		four2--
	}
	if four2 >= four1 {
		total += four2 - four1 + 1
	}
	hundred1, hundred2 := start/100, end/100
	if hundred1*100 < start {
		hundred1++
	}
	if hundred2*100 == end {
		hundred2--
	}
	if hundred2 >= hundred1 {
		total -= hundred2 - hundred1 + 1
	}
	nine200Y1, nine200Y2 := (start-200)/900, (end-200)/900
	if nine200Y1*900 < start-200 {
		nine200Y1++
	}
	if nine200Y2*900 == end-200 {
		nine200Y2--
	}
	if nine200Y2 >= nine200Y1 {
		total += nine200Y2 - nine200Y1 + 1
	}
	nine600Y1, nine600Y2 := (start-600)/900, (end-600)/900
	if nine600Y1*900 < start-600 {
		nine600Y1++
	}
	if nine600Y2*900 == end-600 {
		nine600Y2--
	}
	if nine600Y2 >= nine600Y1 {
		total += nine600Y2 - nine600Y1 + 1
	}
	return total
}
