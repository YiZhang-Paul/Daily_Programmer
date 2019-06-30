package main

import "fmt"

func main() {
	// base challenge
	check := []rune{'x', 'y'}
	showResult("xxxyyy", check)
	showResult("yyyxxx", check)
	showResult("xxxyyyy", check)
	showResult("yyxyxxyxxyyyyxxxyxyx", check)
	showResult("xyxxxxyyyxyxxyxxyy", check)
	showResult("", check)
	showResult("x", check)
	// bonus challenge
	check = make([]rune, 0)
	showResult("xxxyyyzzz", check)
	showResult("abccbaabccba", check)
	showResult("xxxyyyzzzz", check)
	showResult("abcdefghijklmnopqrstuvwxyz", check)
	showResult("pqq", check)
	showResult("fdedfdeffeddefeeeefddf", check)
	showResult("www", check)
	showResult("x", check)
	showResult("", check)
}

func showResult(text string, check []rune) {
	fmt.Printf("isBalanced(%q) => %t\n", text, isBalanced(text, check))
}

func isBalanced(text string, check []rune) bool {
	if len(text) == 0 {
		return true
	}
	occurrence := countOccurrence(text)
	if len(check) == 0 {
		check = getKeys(occurrence)
	}
	return checkOccurrence(occurrence, check)
}

func countOccurrence(text string) map[rune]int {
	result := make(map[rune]int)
	for _, char := range text {
		if _, ok := result[char]; !ok {
			result[char] = 0
		}
		result[char]++
	}
	return result
}

func checkOccurrence(table map[rune]int, keys []rune) bool {
	current := -1
	for _, key := range keys {
		_, hasKey := table[key]
		if !hasKey || (current != -1 && current != table[key]) {
			return false
		}
		current = table[key]
	}
	return true
}

func getKeys(table map[rune]int) []rune {
	keys := make([]rune, 0, len(table))
	for key := range table {
		keys = append(keys, key)
	}
	return keys
}
