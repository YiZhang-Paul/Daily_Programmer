using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace simpleStatistics {
    class StatisticCalculator {

        public double[] DataSet { get; private set; }

        public StatisticCalculator(string fileName) {

            DataSet = ReadData(fileName);
        }
        /// <summary>
        /// read data set
        /// </summary>
        public double[] ReadData(string fileName) {

            try {

                return File.ReadAllLines(fileName).Select(line => Double.Parse(line)).ToArray();
            }
            catch(Exception exception) {

                Console.WriteLine("File not found.");
                Console.WriteLine(exception.Message);
            }

            return new double[0];
        }
        /// <summary>
        /// calculate mean of data set
        /// </summary>
        public double GetMean() {
            // --> DataSet.Average();
            return DataSet.Sum() / DataSet.Length;
        }
        /// <summary>
        /// calculate variance of data set
        /// </summary>
        public double GetVariance() {

            double mean = GetMean();
            // --> DataSet.Average(number => Math.Pow(number - mean, 2));
            return DataSet.Sum(number => Math.Pow(number - mean, 2)) / DataSet.Length;
        }
        /// <summary>
        /// calculate standard deviation
        /// </summary>
        public double GetStandardDeviation() {

            return Math.Sqrt(GetVariance());
        }
    }
}