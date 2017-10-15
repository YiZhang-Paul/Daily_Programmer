using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace studentManagement {
    class GradeManager {
        public Dictionary<string, int[]> Records { get; set; }
        /*
         * read and organize student grades
         * @param {string} [grades] - student grades
         */
        public void ReadGrades(string grades) {
            //format grades
            List<string[]> allGrades = grades.Split(new char[] { '\n' })
                                             .Select(line => line.Trim())
                                             .Select(line => line.Split(new char[] { ' ' }))
                                             .ToList();
            //record grades
            Records = new Dictionary<string, int[]>();
            foreach(string[] grade in allGrades) {
                Records.Add(grade[0], grade.Skip(1).Select(number => Int32.Parse(number)).ToArray());
            }
        }
        /*
         * calculate class average
         * 
         * @return {double} [class average]
         */
        public double GetClassAverage() { 
            if(Records == null) {
                return 0.0d;
            }
            return Records.Select(pair => pair.Value.Average()).Sum() / Records.Count;
        }
        /*
         * display class average and student average
         * 
         * @return {string} [class average and student average]
         */
        public string DisplayAllAverage() {
            double classAverage = GetClassAverage();
            if(classAverage == 0) {
                return "No Student Record Found.";
            }
            StringBuilder result = new StringBuilder();
            //append class average and every student's average
            result.Append(classAverage.ToString("F") + "\n");
            foreach(var pair in Records) {
                result.Append(pair.Key + " " + pair.Value.Average().ToString("F") + "\n");
            }
            return result.ToString();
        }
    }
}