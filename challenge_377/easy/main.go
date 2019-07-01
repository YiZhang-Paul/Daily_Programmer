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
	// bonus challenge 1
	fmt.Printf("alignAxis2DWithRotate(25, 18, 6, 5) => %d\n", alignAxis2DWithRotate(25, 18, 6, 5))
	fmt.Printf("alignAxis2DWithRotate(12, 34, 5, 6) => %d\n", alignAxis2DWithRotate(12, 34, 5, 6))
	fmt.Printf("alignAxis2DWithRotate(12345, 678910, 1112, 1314) => %d\n", alignAxis2DWithRotate(12345, 678910, 1112, 1314))
	fmt.Printf("alignAxis2DWithRotate(5, 5, 3, 2) => %d\n", alignAxis2DWithRotate(5, 5, 3, 2))
	fmt.Printf("alignAxis2DWithRotate(5, 100, 6, 1) => %d\n", alignAxis2DWithRotate(5, 100, 6, 1))
	fmt.Printf("alignAxis2DWithRotate(5, 5, 6, 1) => %d\n", alignAxis2DWithRotate(5, 5, 6, 1))
	// bonus challenge 2
	fmt.Printf("alignAxis3D(10, 10, 10, 1, 1, 1) => %d\n", alignAxis3D(10, 10, 10, 1, 1, 1))
	fmt.Printf("alignAxis3D(12, 34, 56, 7, 8, 9) => %d\n", alignAxis3D(12, 34, 56, 7, 8, 9))
	fmt.Printf("alignAxis3D(123, 456, 789, 10, 11, 12) => %d\n", alignAxis3D(123, 456, 789, 10, 11, 12))
	fmt.Printf("alignAxis3D(1234567, 89101112, 13141516, 171819, 202122, 232425) => %d\n", alignAxis3D(1234567, 89101112, 13141516, 171819, 202122, 232425))
}

func alignAxis2D(crateX, crateY, boxX, boxY int) int {
	return (crateX / boxX) * (crateY / boxY)
}

func alignAxis2DWithRotate(crateX, crateY, boxX, boxY int) int {
	unRotated := alignAxis2D(crateX, crateY, boxX, boxY)
	rotated := alignAxis2D(crateX, crateY, boxY, boxX)
	return max(unRotated, rotated)
}

func alignAxis3D(crateX, crateY, crateZ, boxX, boxY, boxZ int) int {
	return maxAlign([]int{crateX, crateY, crateZ}, []int{boxX, boxY, boxZ}, make([]int, 0))
}

func alignAxisND(crate []int, box []int) int {
	return maxAlign(crate, box, make([]int, 0))
}

func getAlign(crate []int, box []int) int {
	align := 1
	for i, dimension := range crate {
		align *= dimension / box[i]
	}
	return align
}

func maxAlign(crate []int, options []int, box []int) int {
	if len(options) == 0 {
		return getAlign(crate, box)
	}
	aligns := make([]int, 0)
	for i := range options {
		optionsLeft := excludeIndex(copyFrom(options), i)
		currentBox := append(copyFrom(box), options[i])
		aligns = append(aligns, maxAlign(crate, optionsLeft, currentBox))
	}
	return max(aligns...)
}

func copyFrom(numbers []int) []int {
	copied := make([]int, len(numbers))
	for i, number := range numbers {
		copied[i] = number
	}
	return copied
}

func excludeIndex(numbers []int, index int) []int {
	return append(numbers[0:index], numbers[index+1:]...)
}

func max(numbers ...int) int {
	result := numbers[0]
	for _, number := range numbers {
		if number > result {
			result = number
		}
	}
	return result
}
