package main

import (
	"fmt"
	"io/ioutil"
	"path/filepath"
)

func main() {
	fmt.Println(getFileTree("D:\\Resources", 1, true))
}

func getFileTree(path string, depth int, hasRuler bool) string {
	if !filepath.IsAbs(path) {
		return "Invalid path. Must be an absolute path."
	}
	contents, err := ioutil.ReadDir(path)
	if err != nil {
		return "Failed to read specified directory."
	}
	var tree = ""
	if depth == 1 {
		tree = "+-" + filepath.Base(path) + "/\n"
	}
	for i, content := range contents {
		tree += "  "
		for i := 0; i < depth-1; i++ {
			if hasRuler {
				tree += "| "
			} else {
				tree += "  "
			}
		}
		tree += "+-" + content.Name() + "/\n"
		if content.IsDir() {
			tree += getFileTree(path+"\\"+content.Name(), depth+1, i != len(contents)-1)
		}
	}
	return tree
}
