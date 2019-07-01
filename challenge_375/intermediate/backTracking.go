package main

import (
	"regexp"
	"strconv"
	"strings"
)

func flip(cards string) string {
	if result := backTrackingFlip(cards); result != nil {
		return strings.Join(reverse(result), " ")
	}
	return "no solution"
}

func backTrackingFlip(cards string) []string {
	if isMatch(cards, `^\.*$`) {
		return make([]string, 0)
	}
	if isMatch(cards, `[^1]0+[^1]`) {
		return nil
	}
	for i, card := range cards {
		if string(card) != "1" {
			continue
		}
		flipped := cards[0:max(0, i-1)]
		flipped += getFlipped(cards, i-1) + "." + getFlipped(cards, i+1)
		if i+2 <= len(cards)-1 {
			flipped += cards[i+2:]
		}
		if result := backTrackingFlip(flipped); result != nil {
			return append(result, strconv.Itoa(i))
		}
	}
	return nil
}

func getFlipped(cards string, index int) string {
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

func isMatch(text string, pattern string) bool {
	matched, err := regexp.Match(pattern, []byte(text))
	if err != nil {
		return false
	}
	return matched
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
