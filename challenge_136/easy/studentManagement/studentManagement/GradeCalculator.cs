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
                Records.Add(grade[0], grade.Skip(1).Select(item => Int32.Parse(item)).ToArray());
            }
        }
    }
}