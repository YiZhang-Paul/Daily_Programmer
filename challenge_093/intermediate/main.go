package main

import (
	"fmt"
	"strings"
)

func main() {
	var (
		input  = "My country, tis of thee"
		cipher = "Myouofhe\n cnt te \nryti\n, s "
	)
	fmt.Printf("encrypt(%s) = \n%s\n\n", input, encrypt(input))
	fmt.Printf("decrypt(%s) = %s\n", cipher, decrypt(cipher))
}

func encrypt(text string) string {
	var (
		encrypted strings.Builder
		square    = getSquare(len(text))
		x         = 0
		y         = 0
	)
	for i, content := range text {
		square[y][x] = string(content)
		x, y = nextPosition(x, y, i+1)
	}
	for _, row := range square {
		encrypted.WriteString(strings.Join(row, "") + "\n")
	}
	return strings.TrimSpace(encrypted.String())
}

func decrypt(cipher string) string {
	var (
		decrypted strings.Builder
		rows      = strings.Split(cipher, "\n")
		total     = len(cipher) - len(rows) + 1
		square    = getSquare(total)
		x         = 0
		y         = 0
	)
	for i, row := range rows {
		for j, content := range row {
			square[i][j] = string(content)
		}
	}
	for i := 0; i < total; i++ {
		decrypted.WriteString(square[y][x])
		x, y = nextPosition(x, y, i+1)
	}
	return decrypted.String()
}

func getSquare(total int) [][]string {
	var (
		square = make([][]string, 0)
		width  = 1
	)
	for width*width < total {
		width *= 2
	}
	for i := 0; i < width; i++ {
		square = append(square, make([]string, width))
	}
	return square
}

func nextPosition(x, y, total int) (int, int) {
	if x%2 == 0 {
		return x + 1, y
	}
	if y%2 == 0 {
		return x - 1, y + 1
	}
	if x/2%2 == 0 {
		return x + 1, y - 1
	}
	if y/2%2 == 0 {
		return x - 3, y + 1
	}
	if total%64 == 48 || total%64 == 16 {
		return x + 1, y - 3
	}
	if total%64 == 32 {
		return x - 7, y + 1
	}
	if y >= x {
		return x + 1, ternaryInt(x == y, 0, (y+1)/2)
	}
	if (x+1)/(y+1) != 4 {
		return 0, y + 1
	}
	return (x + 1) / 2, y + 1
}

func ternaryInt(condition bool, whenTrue, whenFalse int) int {
	if condition {
		return whenTrue
	}
	return whenFalse
}
