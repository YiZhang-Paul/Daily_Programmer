package main

import "fmt"

func main() {
	var square = getSquare(15)
	for _, row := range square {
		for i := 0; i < len(row); i++ {
			fmt.Print("x")
		}
		fmt.Print("\n")
	}
}

func getSquare(total int) [][]string {
	var square = make([][]string, 0)
	if total == 1 {
		return append(square, make([]string, 1))
	}
	var width = 2
	for width*width < total {
		width *= 2
	}
	for i := 0; i < width; i++ {
		square = append(square, make([]string, width))
	}
	return square
}
