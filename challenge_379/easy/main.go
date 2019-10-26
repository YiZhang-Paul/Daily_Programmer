package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
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
		taxable := income - tc.Brackets[i].Cap
		total += float64(taxable) * tc.Brackets[i].Rate
		income -= taxable
	}
	return int(total)
}

func main() {
	var calculator = NewTaxCalculator("./brackets.json")
	incomes := []int{0, 10000, 10009, 10010, 12000, 56789, 1234567}
	for _, income := range incomes {
		fmt.Printf("tax(%d) => %d\n", income, calculator.Tax(income))
	}
}
