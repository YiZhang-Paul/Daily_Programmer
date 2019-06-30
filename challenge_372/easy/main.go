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
	table := make(map[rune]int)
	for _, char := range text {
		if _, ok := table[char]; !ok {
			table[char] = 0
		}
		table[char]++
	}
	prev := -1
	for _, char := range check {
		if _, ok := table[char]; !ok {
			return false
		}
		if prev == -1 {
			prev = table[char]
			continue
		}
		if prev != table[char] {
			return false
		}
	}
	prev = -1
	for _, total := range table {
		if prev == -1 {
			prev = total
			continue
		}
		if prev != total {
			return false
		}
	}
	return true
}
