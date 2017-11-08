using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace roulette {
    class Layout {

        private string[] _reds = new string[] { 
        
            "1", "3", "5", "7", "9", "12", "14", "16", "18", "19", 
            "21", "23", "25", "27", "30", "32", "34", "36"
        };
        private string[] _blacks = new string[] { 
        
            "2", "4", "6", "8", "10", "11", "13", "15", "17", "20", 
            "22", "24", "26", "28", "29", "31", "33", "35"
        };

        public HashSet<string> Reds { get; private set; }
        public HashSet<string> Blacks { get; private set; }
        public string[][] Numbers { get; private set; }

        public Layout() {

            Reds = new HashSet<string>(_reds);
            Blacks = new HashSet<string>(_blacks);
            Numbers = GetNumbers();
        }
        /// <summary>
        /// record numbers on layout
        /// </summary>
        public string[][] GetNumbers() {

            var numbers = new List<string[]>();
            var row = new List<string>();

            for(int i = 1; i <= 36; i++) {

                row.Add(i.ToString());

                if(row.Count == 3) {

                    numbers.Add(row.ToArray());
                    row = new List<string>();
                }
            }

            return numbers.ToArray();
        }
        /// <summary>
        /// retrieve a given column of numbers on layout
        /// </summary>
        public string[] GetColumn(int index) {

            return Numbers.Select(row => row[index]).ToArray();
        }

        public bool IsRed(string spin) {

            return Reds.Contains(spin);
        }

        public bool IsBlack(string spin) {

            return Blacks.Contains(spin);
        }
    }
}