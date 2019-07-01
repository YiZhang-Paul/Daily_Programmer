package main

import "testing"

func TestAlignAxis2D(t *testing.T) {
	cases := []struct {
		crateX, crateY, boxX, boxY, expected int
	}{
		{25, 18, 6, 5, 12},
		{10, 10, 1, 1, 100},
		{12, 34, 5, 6, 10},
		{12345, 678910, 1112, 1314, 5676},
		{5, 100, 6, 1, 0},
	}
	for _, c := range cases {
		if actual := alignAxis2D(c.crateX, c.crateY, c.boxX, c.boxY); c.expected != actual {
			format := "alignAxis2D(%d, %d, %d, %d) == %d, expected %d"
			t.Errorf(format, c.crateX, c.crateY, c.boxX, c.boxY, actual, c.expected)
		}
	}
}

func TestAlignAxis2DWithRotate(t *testing.T) {
	cases := []struct {
		crateX, crateY, boxX, boxY, expected int
	}{
		{25, 18, 6, 5, 15},
		{12, 34, 5, 6, 12},
		{12345, 678910, 1112, 1314, 5676},
		{5, 5, 3, 2, 2},
		{5, 100, 6, 1, 80},
		{5, 5, 6, 1, 0},
	}
	for _, c := range cases {
		if actual := alignAxis2DWithRotate(c.crateX, c.crateY, c.boxX, c.boxY); c.expected != actual {
			format := "alignAxis2DWithRotate(%d, %d, %d, %d) == %d, expected %d"
			t.Errorf(format, c.crateX, c.crateY, c.boxX, c.boxY, actual, c.expected)
		}
	}
}

func TestAlignAxis3D(t *testing.T) {
	cases := []struct {
		crateX, crateY, crateZ, boxX, boxY, boxZ, expected int
	}{
		{10, 10, 10, 1, 1, 1, 1000},
		{12, 34, 56, 7, 8, 9, 32},
		{123, 456, 789, 10, 11, 12, 32604},
		{1234567, 89101112, 13141516, 171819, 202122, 232425, 174648},
	}
	for _, c := range cases {
		actual := alignAxis3D(c.crateX, c.crateY, c.crateZ, c.boxX, c.boxY, c.boxZ)
		if c.expected != actual {
			format := "alignAxis3D(%d, %d, %d, %d, %d, %d) == %d, expected %d"
			t.Errorf(format, c.crateX, c.crateY, c.crateZ, c.boxX, c.boxY, c.boxZ, actual, c.expected)
		}
	}
}

func TestAlignAxisND(t *testing.T) {
	cases := []struct {
		crate, box []int
		expected   int
	}{
		{[]int{3, 4}, []int{1, 2}, 6},
		{[]int{123, 456, 789}, []int{10, 11, 12}, 32604},
		{[]int{123, 456, 789, 1011, 1213, 1415}, []int{16, 17, 18, 19, 20, 21}, 1883443968},
	}
	for _, c := range cases {
		actual := alignAxisND(c.crate, c.box)
		if c.expected != actual {
			format := "alignAxisND(%v, %v) == %d, expected %d"
			t.Errorf(format, c.crate, c.box, actual, c.expected)
		}
	}
}
