package main

import (
	"fmt"
	"strings"
)

type textBasedTriangle struct {
	lines []string
}

func main() {
	var triangle = textBasedTriangle{lines: []string{"*"}}
	for i := 0; i < 5; i++ {
		fmt.Printf(triangle.String() + "\n\n")
		triangle = triangle.nextTriangle()
	}
}

func (t textBasedTriangle) String() string {
	var builder strings.Builder
	for i, line := range t.lines {
		var padding = strings.Repeat(" ", len(t.lines)-1-i)
		builder.WriteString(padding + line + "\n")
	}
	return builder.String()
}

func (t textBasedTriangle) nextTriangle() textBasedTriangle {
	var newLines = make([]string, 0)
	for i := range t.lines {
		var padding = strings.Repeat(" ", len(t.lines[len(t.lines)-1])-i*2)
		newLines = append(newLines, t.lines[i]+padding+t.lines[i])
	}
	t.lines = append(t.lines, newLines...)
	return t
}
