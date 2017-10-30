using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace enumerateMorseCode {
    class MorseCodeGenerator {

        private char[] _codes = new char[] { '.', '-' };
        /// <summary>
        /// retrieve size of code
        /// </summary>
        public int GetSize(char code) {

            return code == '.' ? 1 : 2;
        }
        /// <summary>
        /// retrieve sub-patterns used to construct final code pattern
        /// </summary>
        /// <param name="size">total size of final code pattern</param>
        public KeyValuePair<int, List<string>>[] GetSubPatterns(int size) {

            var patterns = new Dictionary<int, List<string>> { { 0, new List<string> { "" } } };

            for(int i = 1; i < size; i++) {

                patterns[i] = new List<string>();

                foreach(char code in _codes) {
                
                    if(patterns.ContainsKey(i - GetSize(code))) {

                        patterns[i].AddRange(patterns[i - GetSize(code)].Select(pattern => pattern + code));
                    }
                }
            }

            return patterns.Where(pair => _codes.Any(code => GetSize(code) + pair.Key == size)).ToArray();
        }
        /// <summary>
        /// retrieve all morse code patterns with given size
        /// </summary>
        /// <param name="size"></param>
        /// <returns></returns>
        public string[] GetMorseCodes(int size) {

            var output = new List<string>();

            foreach(var pair in GetSubPatterns(size)) {

                char curCode = _codes.First(code => GetSize(code) + pair.Key == size);

                while(pair.Value.Count > 0) {

                    output.Add(pair.Value.Last() + curCode);
                    pair.Value.RemoveAt(pair.Value.Count - 1);
                }
            }

            return output.ToArray();
        }
    }
}