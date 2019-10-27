package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"math"
)

type bracket struct {
	Cap  int     `json:"cap"`
	Rate float64 `json:"rate"`
}

type TaxCalculator struct {
	Brackets []bracket
}

func NewTaxCalculator(path string) TaxCalculator {
	var c = TaxCalculator{Brackets: make([]bracket, 0)}
	content, err := ioutil.ReadFile(path)
	if err == nil {
		json.Unmarshal(content, &c.Brackets)
	}
	return c
}

func (tc TaxCalculator) Tax(income int) int {
	var total float64
	if income < 0 {
		return 0
	}
	for i := len(tc.Brackets) - 1; i >= 0; i-- {
		bracket := tc.Brackets[i]
		if income > bracket.Cap {
			total += float64(income-bracket.Cap) * bracket.Rate
			income = bracket.Cap
		}
	}
	return int(total)
}

func (tc TaxCalculator) Overall(rate float64) int {
	if rate == 0 {
		return 0
	}
	if rate == tc.Brackets[len(tc.Brackets)-1].Rate {
		return -1
	}
	return tc.tryFindIncome(rate, 0, math.MaxInt32)
}

func (tc TaxCalculator) tryFindIncome(targetRate float64, low, high int) int {
	for low < high {
		income := (low + high) / 2
		rate := float64(tc.Tax(income)) / float64(income)
		if math.Abs(rate-targetRate) <= 0.00001 {
			return income
		} else if rate > targetRate {
			high = income
		} else {
			low = income
		}
	}
	return low
}

func main() {
	var calculator = NewTaxCalculator("./brackets.json")
	// base challenge
	for _, income := range []int{0, 10000, 10009, 10010, 12000, 56789, 1234567} {
		fmt.Printf("tax(%d) => %d\n", income, calculator.Tax(income))
	}
	// bonus challenge
	for _, rate := range []float64{0.0, 0.06, 0.09, 0.32, 0.4} {
		fmt.Printf("overall(%f) => %d\n", rate, calculator.Overall(rate))
	}
}
