package main

import (
	"fmt"
)

func main() {
	// base challenge
	fmt.Printf("alignAxis2D(25, 18, 6, 5) => %d\n", alignAxis2D(25, 18, 6, 5))
	fmt.Printf("alignAxis2D(10, 10, 1, 1) => %d\n", alignAxis2D(10, 10, 1, 1))
	fmt.Printf("alignAxis2D(12, 34, 5, 6) => %d\n", alignAxis2D(12, 34, 5, 6))
	fmt.Printf("alignAxis2D(12345, 678910, 1112, 1314) => %d\n", alignAxis2D(12345, 678910, 1112, 1314))
	fmt.Printf("alignAxis2D(5, 100, 6, 1) => %d\n", alignAxis2D(5, 100, 6, 1))
}

func alignAxis2D(crateX, crateY, boxX, boxY int) int {
	return (crateX / boxX) * (crateY / boxY)
}
