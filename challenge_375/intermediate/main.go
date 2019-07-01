package main

import (
	"fmt"
	"regexp"
	"strconv"
	"strings"
)

func main() {
	showResult("0100110")
	showResult("01001100111")
	showResult("100001100101000")
	showResult("001011011101001001000")
	showResult("1010010101001011011001011101111")
	showResult("1101110110000001010111011100110")
}

func showResult(cards string) {
	fmt.Printf("flip(%q) => %s\n", cards, flip(cards))
}

func flip(cards string) string {
	if result := deepFlip(cards); result != nil {
		return strings.Join(reverse(result), " ")
	}
	return "no solution"
}

func deepFlip(cards string) []string {
	if matched, _ := regexp.Match(`^\.*$`, []byte(cards)); matched {
		return make([]string, 0)
	}
	if matched, _ := regexp.Match(`^([^1]|0)*$`, []byte(cards)); matched {
		return nil
	}
	for i, card := range cards {
		if string(card) != "1" {
			continue
		}
		newCards := cards[0:max(0, i-1)] + tryFlip(cards, i-1) + "." + tryFlip(cards, i+1)
		if i+2 <= len(cards)-1 {
			newCards += cards[i+2:]
		}
		if result := deepFlip(newCards); result != nil {
			result = append(result, strconv.Itoa(i))
			return result
		}
	}
	return nil
}

func tryFlip(cards string, index int) string {
	if index < 0 || index > len(cards)-1 {
		return ""
	}
	card := string(cards[index])
	if card != "0" && card != "1" {
		return card
	}
	if card == "0" {
		return "1"
	}
	return "0"
}

func max(numbers ...int) int {
	result := numbers[0]
	for _, number := range numbers {
		if number > result {
			result = number
		}
	}
	return result
}

func reverse(chars []string) []string {
	for i, j := 0, len(chars)-1; i < j; i, j = i+1, j-1 {
		chars[i], chars[j] = chars[j], chars[i]
	}
	return chars
}
