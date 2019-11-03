package main

import (
	"fmt"
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
		if height-i <= depth {
			cuboid.WriteString(strings.Repeat("+", height-i-1) + "\n")
		} else {
			cuboid.WriteString(strings.Repeat("+", depth) + "\n")
		}
	}
	fmt.Println(cuboid.String())
}
