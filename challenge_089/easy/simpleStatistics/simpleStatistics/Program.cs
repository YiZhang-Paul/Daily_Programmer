using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace simpleStatistics {
    class Program {
        static void Main(string[] args) {

            var calculator = new StatisticCalculator("dataSet.txt");

            //challenge input
            Console.WriteLine(calculator.GetMean());
            Console.WriteLine(calculator.GetVariance());
            Console.WriteLine(calculator.GetStandardDeviation());
        }
    }
}