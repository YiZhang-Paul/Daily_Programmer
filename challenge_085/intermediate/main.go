package main

import (
	"fmt"
	"math"
	"strings"
)

func main() {
	printCuboid(20, 10, 3)
	fmt.Printf("\n\n")
	printCuboid(10, 12, 5)
	fmt.Printf("\n\n")
	printCuboid(25, 15, 9)
}

func printCuboid(length, height, depth int) {
	var cuboid strings.Builder
	for i := 0; i < depth; i++ {
		cuboid.WriteString(strings.Repeat(" ", depth-i))
		cuboid.WriteString(strings.Repeat(":", length-1) + "/")
		cuboid.WriteString(strings.Repeat("+", i) + "\n")
	}
	for i := 0; i < height; i++ {
		cuboid.WriteString(strings.Repeat("#", length))
		cuboid.WriteString(strings.Repeat("+", minInt(height-i-1, depth)) + "\n")
	}
	fmt.Println(cuboid.String())
}

func minInt(a, b int) int {
	return int(math.Min(float64(a), float64(b)))
}
