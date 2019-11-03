package main

import (
	"fmt"
	"math"
)

func main() {
	fmt.Printf("sqrt(%f) = %f\n", 4.0, sqrt(4))
	fmt.Printf("sqrt(%f) = %f\n", 16.0, sqrt(16))
	fmt.Printf("sqrt(%f) = %f\n", 256.0, sqrt(256))
	fmt.Printf("sqrt(%f) = %f\n", 655.36, sqrt(655.36))
	fmt.Printf("sqrt(%f) = %f\n", 55.0, sqrt(55))
}

func sqrt(value float64) float64 {
	var result = value / 2
	for math.Abs(result*result-value) > 0.000001 {
		result = (result + value/result) / 2
	}
	return result
}
