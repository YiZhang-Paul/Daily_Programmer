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
