package main

import "testing"

func TestToBinary(t *testing.T) {
	var cases = []struct {
		character rune
		expected  string
	}{
		{'M', "01001101"},
		{'a', "01100001"},
		{'n', "01101110"},
	}
	for _, c := range cases {
		if actual := toBinary(c.character); actual != c.expected {
			t.Errorf("toBinary(%s) == %s, expected %s", string(c.character), actual, c.expected)
		}
	}
}

func TestToBase64Char(t *testing.T) {
	var cases = []struct {
		binary   string
		expected string
	}{
		{"010011", "T"},
		{"010110", "W"},
		{"000101", "F"},
		{"101110", "u"},
	}
	for _, c := range cases {
		if actual := toBase64Char(c.binary); actual != c.expected {
			t.Errorf("toBase64Char(%s) == %s, expected %s", string(c.binary), actual, c.expected)
		}
	}
}

func TestEncodeBase64(t *testing.T) {
	var cases = []struct {
		text     string
		expected string
	}{
		{"Man", "TWFu"},
		{"Ma", "TWE="},
		{"M", "TQ=="},
		{
			"Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.",
			"TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=",
		},
	}
	for _, c := range cases {
		if actual := encodeBase64(c.text); actual != c.expected {
			t.Errorf("encodeBase64(%s) == %s, expected %s", string(c.text), actual, c.expected)
		}
	}
}

func TestDecodeBase64(t *testing.T) {
	var cases = []struct {
		encoded  string
		expected string
	}{
		{"TWFu", "Man"},
		{"TWE=", "Ma"},
		{"TQ==", "M"},
		{
			"TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=",
			"Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.",
		},
	}
	for _, c := range cases {
		if actual := decodeBase64(c.encoded); actual != c.expected {
			t.Errorf("decodeBase64(%s) == %s, expected %s", string(c.encoded), actual, c.expected)
		}
	}
}
