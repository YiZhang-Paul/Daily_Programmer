using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace moneyChanges {
    class ChangeCalculator {

        private decimal[] _values = new decimal[] { 
            
            100, 50, 10, 5, 1, 0.25m, 0.1m, 0.05m, 0.01m 
        };
        private string[] _names = new string[] { 

            "Hundred", "Fifty", "Ten", "Five", "One", "Quarter", "Dime", "Nickel", "Penny"
        };
        /// <summary>
        /// get money changes with least amount of bills/coins used
        /// </summary>
        public string GetChange(decimal toChange) {

            toChange = Math.Round(toChange, 2);
            var changes = new StringBuilder();
            
            while(toChange != 0) {
                //start with bills/coins with largest face value
                for(int i = 0; i < _values.Length; i++) {

                    if(_values[i] > toChange) {

                        continue;
                    }
                    //get changes
                    string name = _names[i] + (_values[i] >= 1 ? "-dollar bill" : "");
                    int total = (int)Math.Floor(toChange / _values[i]);
                    changes.Append(name + " used: " + total + "\n");
                    toChange -= _values[i] * total;
                }
            }

            return changes.ToString();
        }
    }
}