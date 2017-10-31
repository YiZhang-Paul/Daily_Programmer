using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace cellularAutomata {
    class CellularAutomatonGenerator {

        private string[] _patterns = new string[] { "111", "110", "101", "100", "011", "010", "001", "000" };
        /// <summary>
        /// convert number into binary representation
        /// </summary>
        public string ToBinary(int number, int length = 8) {

            return Convert.ToString(number, 2).PadLeft(length, '0');
        }
        /// <summary>
        /// generate rule for cellular automaton
        /// </summary>
        public Dictionary<string, char> GetRule(int ruleNumber) {

            string bits = ToBinary(ruleNumber, _patterns.Length);
            var rule = new Dictionary<string, char>();

            for(int i = 0; i < _patterns.Length; i++) {

                rule.Add(_patterns[i], bits[i]);
            }

            return rule;
        }
        /// <summary>
        /// display simulation result
        /// </summary>
        /// <param name="ascii">ASCII character to replace on state</param>
        public string DisplaySimulation(string[] simulation, char ascii = '*') {

            var result = simulation.Select(row => Regex.Replace(row, @"\d", match => {

                return match.Value == "0" ? " " : ascii.ToString();
            }));

            return string.Join("\n", result);
        }
        /// <summary>
        /// simulate cellular automaton 
        /// </summary>
        /// <param name="initialState">starting state</param>
        /// <param name="ruleNumber">rule to apply</param>
        /// <param name="steps">total number of steps to simulate</param>
        public string[] Simulate(string initialState, int ruleNumber, int steps = 15) {

            var rule = GetRule(ruleNumber);
            var result = new List<string> { initialState };

            for(int i = 0; i < steps; i++) {
                //retrieve previous state
                string oldState = '0' + result.Last() + '0';
                var newState = new StringBuilder();

                for(int j = 0; j < oldState.Length - 2; j++) {
                    //generate new state
                    newState.Append(rule[oldState.Substring(j, 3)]);
                }

                result.Add(newState.ToString());
            }

            return result.ToArray();
        }
    }
}