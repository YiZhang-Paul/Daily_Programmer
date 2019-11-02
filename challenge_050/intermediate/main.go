package main

import (
	"fmt"
	"io/ioutil"
	"path/filepath"
)

func main() {
	fmt.Println(getFileTree("D:\\Resources"))
}

func getFileTree(path string) string {
	if !filepath.IsAbs(path) {
		return "Invalid path. Must be an absolute path."
	}
	var tree, err = generateTree(path, "..")
	if err != nil {
		return "Failed to read specified directory."
	}
	return "+-" + filepath.Base(path) + "/\n" + tree
}

func generateTree(path string, aligners string) (string, error) {
	var (
		tree       = ""
		infos, err = ioutil.ReadDir(path)
	)
	if err != nil {
		return tree, err
	}
	for i, info := range infos {
		tree += aligners + "+-" + info.Name() + "/\n"
		if !info.IsDir() {
			continue
		}
		var aligner = "|."
		if i == len(infos)-1 {
			aligner = ".."
		}
		var subTree, _ = generateTree(path+"\\"+info.Name(), aligners+aligner)
		tree += subTree
	}
	return tree, nil
}
