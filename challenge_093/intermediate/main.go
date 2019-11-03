package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	var (
		total  = 260
		square = getSquare(total)
		width  = len(strconv.Itoa(total))
		x      = 0
		y      = 0
	)
	for i := 0; i < total; i++ {
		var value = strconv.Itoa(i)
		square[y][x] = strings.Repeat(" ", width-len(value)+1) + value
		x, y = nextPosition(x, y, i+1)
	}
	for _, row := range square {
		for _, content := range row {
			fmt.Print(content)
		}
		fmt.Print("\n")
	}
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
