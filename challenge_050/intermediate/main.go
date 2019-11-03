package main

import (
	"fmt"
	"io/ioutil"
	"path/filepath"
	"strings"
)

func main() {
	fmt.Println(getFileTree("D:\\Resources", -1))
	fmt.Printf("------------------------------\n\n")
	fmt.Println(getFileTree("D:\\Resources", 2))
}

func getFileTree(path string, depth int) string {
	if !filepath.IsAbs(path) {
		return "Invalid path. Must be an absolute path."
	}
	var tree, err = generateTree(path, "..", depth)
	if err != nil {
		return "Failed to read specified directory."
	}
	return "+-" + filepath.Base(path) + "/\n" + tree
}

func generateTree(path string, aligners string, depth int) (string, error) {
	var (
		tree       strings.Builder
		infos, err = ioutil.ReadDir(path)
	)
	if err != nil {
		return tree.String(), err
	}
	for i, info := range infos {
		tree.WriteString(aligners + "+-" + info.Name() + "/\n")
		if info.IsDir() && (depth < 0 || len(aligners)/2 < depth) {
			var subPath = filepath.Join(path, info.Name())
			var aligner = ternaryString(i == len(infos)-1, "..", "|.")
			var subTree, _ = generateTree(subPath, aligners+aligner, depth)
			tree.WriteString(subTree)
		}
	}
	return tree.String(), nil
}

func ternaryString(condition bool, whenTrue, whenFalse string) string {
	if condition {
		return whenTrue
	}
	return whenFalse
}
