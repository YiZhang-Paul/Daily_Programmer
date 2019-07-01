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

func fastFlip(deck string) string {
	faceUps := removeByRegex(deck, `[^1]`)
	if len(faceUps)%2 == 0 {
		return "no solution"
	}
	var (
		cards = strings.Split(deck, "")
		steps = make([]string, 0)
		flags = setFlags(cards)
		drew  = 0
	)
	steps, _ = drawCards(cards, flags, []int{yellow, purple}, steps)
	for {
		steps, drew = drawCards(cards, flags, []int{blueL, blueR}, steps)
		if drew == 0 {
			break
		}
	}
	steps, _ = drawCards(cards, flags, []int{red}, steps)
	steps, _ = drawCards(cards, flags, []int{green}, steps)
	return strings.Join(steps, " ")
}

func setFlags(cards []string) []int {
	flags := make([]int, len(cards))
	for i := range cards {
		if i == 0 || i == len(cards)-1 {
			setFlag(cards, flags, i, purple, green)
		} else if flags[i-1] == green || flags[i-1] == red || flags[i-1] == blueR {
			setFlag(cards, flags, i, yellow, blueR)
		} else {
			setFlag(cards, flags, i, red, blueL)
		}
	}
	return flags
}

func setFlag(cards []string, flags []int, index, faceUpColor, faceDownColor int) {
	if string(cards[index]) == "1" {
		flags[index] = faceUpColor
	} else {
		flags[index] = faceDownColor
	}
}

func drawCards(cards []string, flags []int, types []int, steps []string) ([]string, int) {
	drew := 0
	for i, card := range cards {
		if card == "." {
			continue
		}
		for _, t := range types {
			if flags[i] == t {
				drawCard(cards, i)
				steps, drew = append(steps, strconv.Itoa(i)), drew+1
			}
		}
	}
	return steps, drew
}

func drawCard(cards []string, index int) {
	cards[index] = "."
	tryFlip(cards, index-1)
	tryFlip(cards, index+1)
}

func tryFlip(cards []string, index int) {
	if index < 0 || index > len(cards)-1 {
		return
	}
	if cards[index] == "0" {
		cards[index] = "1"
	} else if cards[index] == "1" {
		cards[index] = "0"
	}
}

func removeByRegex(text string, pattern string) string {
	regex := regexp.MustCompile(pattern)
	return string(regex.ReplaceAll([]byte(text), []byte("")))
}
