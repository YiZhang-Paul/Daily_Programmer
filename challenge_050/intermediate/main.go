package main

import (
	"fmt"
	"io/ioutil"
	"path/filepath"
)

func main() {
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
		tree       = ""
		infos, err = ioutil.ReadDir(path)
	)
	if err != nil {
		return tree, err
	}
	for i, info := range infos {
		tree += aligners + "+-" + info.Name() + "/\n"
		if !info.IsDir() || len(aligners) == depth*2 {
			continue
		}
		var aligner = "|."
		if i == len(infos)-1 {
			aligner = ".."
		}
		var subTree, _ = generateTree(path+"\\"+info.Name(), aligners+aligner, depth)
		tree += subTree
	}
	return tree, nil
}
