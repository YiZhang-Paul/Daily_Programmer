package main

import (
	"fmt"
	"math"
)

func main() {
	// base challenge
	fmt.Printf("alignAxis2D(25, 18, 6, 5) => %d\n", alignAxis2D(25, 18, 6, 5))
	fmt.Printf("alignAxis2D(10, 10, 1, 1) => %d\n", alignAxis2D(10, 10, 1, 1))
	fmt.Printf("alignAxis2D(12, 34, 5, 6) => %d\n", alignAxis2D(12, 34, 5, 6))
	fmt.Printf("alignAxis2D(12345, 678910, 1112, 1314) => %d\n", alignAxis2D(12345, 678910, 1112, 1314))
	fmt.Printf("alignAxis2D(5, 100, 6, 1) => %d\n", alignAxis2D(5, 100, 6, 1))
	// bonus challenge 1
	fmt.Printf("alignAxis2DWithRotate(25, 18, 6, 5) => %d\n", alignAxis2DWithRotate(25, 18, 6, 5))
	fmt.Printf("alignAxis2DWithRotate(12, 34, 5, 6) => %d\n", alignAxis2DWithRotate(12, 34, 5, 6))
	fmt.Printf("alignAxis2DWithRotate(12345, 678910, 1112, 1314) => %d\n", alignAxis2DWithRotate(12345, 678910, 1112, 1314))
	fmt.Printf("alignAxis2DWithRotate(5, 5, 3, 2) => %d\n", alignAxis2DWithRotate(5, 5, 3, 2))
	fmt.Printf("alignAxis2DWithRotate(5, 100, 6, 1) => %d\n", alignAxis2DWithRotate(5, 100, 6, 1))
	fmt.Printf("alignAxis2DWithRotate(5, 5, 6, 1) => %d\n", alignAxis2DWithRotate(5, 5, 6, 1))
}

func alignAxis2D(crateX, crateY, boxX, boxY int) int {
	return (crateX / boxX) * (crateY / boxY)
}

func alignAxis2DWithRotate(crateX, crateY, boxX, boxY int) int {
	unRotated := float64(alignAxis2D(crateX, crateY, boxX, boxY))
	rotated := float64(alignAxis2D(crateX, crateY, boxY, boxX))
	return int(math.Max(unRotated, rotated))
}
