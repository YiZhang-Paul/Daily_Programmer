using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
using System.IO;

namespace musicalDice {
    class MozartDiceGame {

        private string _selectionTable = @"96 32 69 40 148 104 152 119 98 3 54
                                           22 6 95 17 74 157 60 84 142 87 130
                                           141 128 158 113 163 27 171 114 42 165 10
                                           41 63 13 85 45 167 53 50 156 61 103
                                           105 146 153 161 80 154 99 140 75 135 28
                                           122 46 55 2 97 68 133 86 129 47 37
                                           11 134 110 159 36 118 21 169 62 147 106
                                           30 81 24 100 107 91 127 94 123 33 5
                                           70 117 66 90 25 138 16 120 65 102 35
                                           121 39 136 176 143 71 155 88 77 4 20
                                           26 126 15 7 64 150 57 48 19 31 108
                                           9 56 132 34 125 29 175 166 82 164 92
                                           112 174 73 67 76 101 43 51 137 144 12
                                           49 18 58 160 136 162 168 115 38 59 124
                                           109 116 145 52 1 23 89 72 149 173 44
                                           14 83 79 170 93 151 172 111 8 78 131";

        private Dice Dice { get; set; }
        private List<int[]> SelectionTable { get; set; }

        public MozartDiceGame() {

            Dice = new Dice(6);
            SelectionTable = GetSelectionTable();
        }

        private List<int[]> GetSelectionTable() {

            var table = new List<int[]>();

            foreach(var row in _selectionTable.Split('\n')) {

                var measures = Regex.Matches(row, @"\d+")
                                    .Cast<Match>()
                                    .Select(match => int.Parse(match.Value))
                                    .ToArray();
                table.Add(measures);
            }

            return table;
        }

        private string[] ReadComposition() {

            try {

                return File.ReadAllLines("composition.txt");
            }
            catch(Exception e) {

                Console.WriteLine("File not Found.");
                Console.WriteLine(e.Message);
                throw e;
            }
        }

        private int[] PickMeasures() { 
        
            var measures = new List<int>();

            foreach(var row in SelectionTable) {

                measures.Add(row[Dice.Roll() + Dice.Roll() - 2]);
            }

            return measures.ToArray();
        }

        private double GetBeat(string note) {

            return double.Parse(Regex.Match(note, @"(?<=\s)\d*\.?\d+(?=\s)").Value);
        }

        private string[] GetMeasure(string[] composition, int measureNumber) {

            double startBeat = (measureNumber - 1) * 3;
            int index = Array.FindIndex(composition, note => GetBeat(note) == startBeat);
            var measure = new List<string>();
            double currentBeat = GetBeat(composition[index]);

            while(currentBeat >= startBeat && currentBeat <= startBeat + 3 && index < composition.Length - 1) {
            
                measure.Add(composition[index++]);
                currentBeat = GetBeat(composition[index]);
            }

            return measure.ToArray();
        }

        private string[] ConvertMeasure(string[] composition, int oldMeasure, int newMeasure) {

            return GetMeasure(composition, oldMeasure).Select(note => {

                double newBeat = GetBeat(note) - (oldMeasure - newMeasure) * 3;

                return Regex.Replace(note, @"(?<=\s)\d*\.?\d+(?=\s)", newBeat.ToString());

            }).ToArray();
        }

        public string BuildComposition() {

            var oldMeasures = PickMeasures();
            var oldComposition = ReadComposition();
            var newComposition = new StringBuilder();

            for(int i = 0; i < oldMeasures.Length; i++) {

                var newMeasure = ConvertMeasure(oldComposition, oldMeasures[i], i + 1);
                newComposition.Append(string.Join("\n", newMeasure) + "\n");
            }

            return newComposition.ToString();
        }
    }
}