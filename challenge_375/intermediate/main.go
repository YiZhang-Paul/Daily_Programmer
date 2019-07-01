package main

import (
	"fmt"
	"regexp"
	"strconv"
	"strings"
)

const (
	yellow = iota
	blueL
	blueR
	purple
	red
	green
)

func main() {
	showResult("0100110")
	showResult("01001100111")
	showResult("100001100101000")
	showResult("001011011101001001000")
	showResult("1010010101001011011001011101111")
	showResult("1101110110000001010111011100110")
	showResult("010111111111100100101000100110111000101111001001011011000011000")
}

func showResult(cards string) {
	fmt.Printf("fastFlip(%q) => %s\n", cards, fastFlip(cards))
}

func fastFlip(cards string) string {
	faceUpCards := removeByPattern(cards, `[^1]`)
	if len(faceUpCards)%2 == 0 {
		return "no solution"
	}
	slots, flags, steps := strings.Split(cards, ""), make([]int, len(cards)), make([]string, 0)
	for i, slot := range slots {
		if i == 0 || i == len(slots)-1 {
			if string(slot) == "1" {
				flags[i] = purple
			} else {
				flags[i] = green
			}
		} else if left := flags[i-1]; left == yellow || left == purple || left == blueL {
			if string(slot) == "1" {
				flags[i] = red
			} else {
				flags[i] = blueL
			}
		} else {
			if string(slot) == "1" {
				flags[i] = yellow
			} else {
				flags[i] = blueR
			}
		}
	}
	for i := range slots {
		if flags[i] == yellow || flags[i] == purple {
			slots[i] = "."
			tryFlip(slots, i-1)
			tryFlip(slots, i+1)
			steps = append(steps, strconv.Itoa(i))
		}
	}
	flippedBlue := true
	for flippedBlue {
		flippedBlue = false
		for i := range slots {
			if slots[i] == "." {
				continue
			}
			if (flags[i] == blueR && slots[i+1] == ".") || (flags[i] == blueL && slots[i-1] == ".") {
				flippedBlue = true
				slots[i] = "."
				tryFlip(slots, i-1)
				tryFlip(slots, i+1)
				steps = append(steps, strconv.Itoa(i))
			}
		}
	}
	for i := range slots {
		if flags[i] == red {
			slots[i] = "."
			tryFlip(slots, i-1)
			tryFlip(slots, i+1)
			steps = append(steps, strconv.Itoa(i))
		}
	}
	for i := range slots {
		if flags[i] == green {
			slots[i] = "."
			tryFlip(slots, i-1)
			tryFlip(slots, i+1)
			steps = append(steps, strconv.Itoa(i))
		}
	}
	return strings.Join(steps, " ")
}

func tryFlip(slots []string, index int) {
	if index < 0 || index > len(slots)-1 || (slots[index] != "0" && slots[index] != "1") {
		return
	}
	if slots[index] == "0" {
		slots[index] = "1"
	} else {
		slots[index] = "0"
	}
}

func removeByPattern(text string, pattern string) string {
	regex := regexp.MustCompile(pattern)
	return string(regex.ReplaceAll([]byte(text), []byte("")))
}

func flip(cards string) string {
	if result := flipWithBackTracking(cards); result != nil {
		return strings.Join(reverse(result), " ")
	}
	return "no solution"
}

func flipWithBackTracking(cards string) []string {
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
		flipped := cards[0:max(0, i-1)] + getFlipped(cards, i-1) + "." + getFlipped(cards, i+1)
		if i+2 <= len(cards)-1 {
			flipped += cards[i+2:]
		}
		if result := flipWithBackTracking(flipped); result != nil {
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
