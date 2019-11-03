package main

import (
	"fmt"
	"strings"
)

type asciiTriangle struct {
	lines []string
}

func main() {
	var triangle = asciiTriangle{lines: []string{"*"}}
	for i := 0; i < 7; i++ {
		fmt.Printf(triangle.String() + "\n\n")
		triangle = triangle.nextTriangle()
	}
}

func (t asciiTriangle) String() string {
	var (
		triangle  strings.Builder
		lastIndex = len(t.lines) - 1
	)
	for i, line := range t.lines {
		var padding = strings.Repeat(" ", lastIndex-i)
		triangle.WriteString(padding + line + "\n")
	}
	return triangle.String()
}

func (t asciiTriangle) nextTriangle() asciiTriangle {
	var (
		lines = make([]string, 0)
		base  = t.lines[len(t.lines)-1]
	)
	for i, line := range t.lines {
		var padding = strings.Repeat(" ", len(base)-i*2)
		lines = append(lines, line+padding+line)
	}
	return asciiTriangle{lines: append(t.lines, lines...)}
}
