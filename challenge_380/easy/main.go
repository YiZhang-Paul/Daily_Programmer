package main

import (
	"fmt"
	"io/ioutil"
	"strings"
)

var codesMap = map[string]string{
	"a": ".-",
	"b": "-...",
	"c": "-.-.",
	"d": "-..",
	"e": ".",
	"f": "..-.",
	"g": "--.",
	"h": "....",
	"i": "..",
	"j": ".---",
	"k": "-.-",
	"l": ".-..",
	"m": "--",
	"n": "-.",
	"o": "---",
	"p": ".--.",
	"q": "--.-",
	"r": ".-.",
	"s": "...",
	"t": "-",
	"u": "..-",
	"v": "...-",
	"w": ".--",
	"x": "-..-",
	"y": "-.--",
	"z": "--..",
}

func getWords(path string) []string {
	content, err := ioutil.ReadFile(path)
	if err != nil {
		fmt.Println(err)
		return make([]string, 0)
	}
	var (
		words = make([]string, 0)
		lines = strings.Split(string(content), "\r\n")
	)
	for _, line := range lines {
		if strings.TrimSpace(line) != "" {
			words = append(words, line)
		}
	}
	return words
}

func SmooshMorse(word string) string {
	var smooshed = make([]string, 0)
	for _, letter := range word {
		smooshed = append(smooshed, codesMap[string(letter)])
	}
	return strings.Join(smooshed, "")
}

func smooshMorses(words []string) map[string]string {
	var smooshed = make(map[string]string)
	for _, word := range words {
		smooshed[word] = SmooshMorse(word)
	}
	return smooshed
}

func groupDuplicateCodes(codes map[string]string) map[string][]string {
	var grouped = make(map[string][]string)
	for key, value := range codes {
		grouped[value] = append(grouped[value], key)
	}
	return grouped
}

func findSequenceWithContinuousDashes(sequences map[string]string, total int) (string, string) {
	for key, value := range sequences {
		var dotIndexes = countIndexes(value, "."[0])
		for i := 1; i < len(dotIndexes); i++ {
			if dotIndexes[i]-dotIndexes[i-1] == total+1 {
				return key, value
			}
		}
	}
	return "", ""
}

func countIndexes(sequence string, character byte) []int {
	var indexes = make([]int, 0)
	for i, letter := range sequence {
		if byte(letter) == character {
			indexes = append(indexes, i)
		}
	}
	return indexes
}

func findBalancedWords(sequences map[string]string, length int) []string {
	var words = make([]string, 0)
	for key, value := range sequences {
		if isBalanced(value) && len(key) == length {
			words = append(words, key)
		}
	}
	return words
}

func isBalanced(sequence string) bool {
	var (
		dashes int
		dots   int
	)
	for _, letter := range sequence {
		if byte(letter) == "."[0] {
			dots++
		} else {
			dashes++
		}
	}
	return dots == dashes
}

func findPalindromes(sequences map[string]string, length int) []string {
	var palindromes = make([]string, 0)
	for key, value := range sequences {
		if isPalindrome(value) && len(key) == length {
			palindromes = append(palindromes, key)
		}
	}
	return palindromes
}

func isPalindrome(sequence string) bool {
	for i := 0; i < len(sequence)-1-i; i++ {
		if sequence[i] != sequence[len(sequence)-1-i] {
			return false
		}
	}
	return true
}

func getAllSequences(sequences []string, length int) []string {
	if length == 1 {
		return sequences
	}
	if len(sequences) == 0 {
		sequences = []string{".", "-"}
	}
	var newSequences = make([]string, 0)
	for _, letter := range []string{".", "-"} {
		for _, sequence := range sequences {
			newSequences = append(newSequences, sequence+letter)
		}
	}
	return getAllSequences(newSequences, length-1)
}

func getSequencesLongerThan(sequences map[string]string, length int) []string {
	var result = make([]string, 0)
	for _, value := range sequences {
		if len(value) > length {
			result = append(result, value)
		}
	}
	return result
}

func isEmbedded(a, b string) bool {
	for i, j := 0, len(b)-1-len(a); i <= j; i++ {
		if a == b[i:i+len(a)] {
			return true
		}
	}
	return false
}

func isSeen(sequence string, sequences []string) bool {
	for _, value := range sequences {
		if isEmbedded(sequence, value) {
			return true
		}
	}
	return false
}

func getAllUnseenSequences(codes map[string]string, length int) []string {
	var (
		unseen    = make([]string, 0)
		sequences = getSequencesLongerThan(codes, length-1)
	)
	for _, sequence := range getAllSequences(make([]string, 0), length) {
		if !isSeen(sequence, sequences) {
			unseen = append(unseen, sequence)
		}
	}
	return unseen
}

func main() {
	// base challenge
	for _, word := range []string{"sos", "daily", "programmer", "bits", "three"} {
		fmt.Printf("SmooshMorse(%s) => %s\n", word, SmooshMorse(word))
	}
	// bonus challenge preparation
	var (
		words = getWords("words.txt")
		codes = smooshMorses(words)
	)
	// bonus challenge 1
	for key, value := range groupDuplicateCodes(codes) {
		if len(value) == 13 {
			fmt.Printf("%s is the sequence for 13 different words: %q\n", key, value)
		}
	}
	// bonus challenge 2
	word, sequence := findSequenceWithContinuousDashes(codes, 15)
	fmt.Printf("%s is the sequence with 15 dashes in a row for word: %s\n", sequence, word)
	// bonus challenge 3
	fmt.Printf("%q are the perfectly balanced words with length 21\n", findBalancedWords(codes, 21))
	// bonus challenge 4
	fmt.Printf("%q is the only palindrome with length 13\n", findPalindromes(codes, 13))
	// bonus challenge 5
	fmt.Printf("%q are the 13-character sequences that does not appear in the encoding of any word\n", getAllUnseenSequences(codes, 13))
}
