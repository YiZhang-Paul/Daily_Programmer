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
	var (
		index int
		total float64
	)
	if income < 0 {
		return 0
	}
	for i := len(tc.Brackets) - 1; i >= 0; i-- {
		if income >= tc.Brackets[i].Cap {
			index = i
			break
		}
	}
	for i := index; i >= 0; i-- {
		bracket := tc.Brackets[i]
		total += float64(income-bracket.Cap) * bracket.Rate
		income = bracket.Cap
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
	var (
		low  = 0
		high = math.MaxInt32
	)
	for low < high {
		income := (low + high) / 2
		currentRate := float64(tc.Tax(income)) / float64(income)
		if math.Abs(currentRate-rate) <= 0.00001 {
			return income
		} else if currentRate > rate {
			high = income
		} else {
			low = income
		}
	}
	return low
}

func main() {
	var calculator = NewTaxCalculator("./brackets.json")
	incomes := []int{0, 10000, 10009, 10010, 12000, 56789, 1234567}
	for _, income := range incomes {
		fmt.Printf("tax(%d) => %d\n", income, calculator.Tax(income))
	}
	rates := []float64{0.0, 0.06, 0.09, 0.32, 0.4}
	for _, rate := range rates {
		fmt.Printf("overall(%f) => %d\n", rate, calculator.Overall(rate))
	}
}
