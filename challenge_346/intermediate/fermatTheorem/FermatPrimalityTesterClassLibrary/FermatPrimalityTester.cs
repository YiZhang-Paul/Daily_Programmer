using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FermatPrimalityTesterClassLibrary {
    public class FermatPrimalityTester {

        private Random _random = new Random();

        private int GetRandomNumber(List<int> numbers) {

            int index = _random.Next(0, numbers.Count);
            int number = numbers[index];
            numbers.RemoveAt(index);

            return number;
        }

        private double GetProbability(int passes) { 
        
            return 1 - Math.Pow(2, -passes);
        }

        public bool IsPrime(int number, double certainty) {

            var choices = Enumerable.Range(1, number - 1).ToList();
            int passes = 0;

            while(GetProbability(passes) <= certainty) {
            
                int choice = GetRandomNumber(choices);

                if(Math.Pow(choice, number) % number != choice) {
                
                    return false;
                }

                passes++;
            }

            return true;
        }
    }
}