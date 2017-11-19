using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace fixedLengthFile {
    class Program {
        static void Main(string[] args) {

            //default input
            ShowResult(GetTopEmployee("input1.txt"));
            //challenge input
            ShowResult(GetTopEmployee("input2.txt"));
        }

        private static string[] GetRecords(string fileName) {

            try {

                return File.ReadAllLines(fileName);
            }
            catch(Exception exception) {

                Console.WriteLine("File not Found.");
                Console.WriteLine(exception.Message);
            }

            return null;
        }

        private static DateTime GetBirthDate(string date, byte age) {

            int year = DateTime.Now.Year - age;
            int month = Int32.Parse(date.Substring(2, 2));
            int day = Int32.Parse(date.Substring(4, 2));

            return new DateTime(year, month, day);
        }

        private static Employee CreatEmployee(string record) {

            string name = record.Substring(0, 20).Trim();
            byte age = byte.Parse(record.Substring(20, 2));
            var birth = GetBirthDate(record.Substring(22, 6), age);

            return new Employee(name, age, birth, null, 0);
        }
        /// <summary>
        /// add extra information to existing employee
        /// </summary>
        private static void AddInformation(Employee employee, string extension) {

            string type = extension.Substring(7, 4).Trim().ToLower();
            string value = extension.Substring(11, 17).Trim();

            if(type == "job") {

                employee.Title = value;
            }
            else if(type == "sal") {

                employee.Salary = decimal.Parse(value);
            }
        }

        private static List<Employee> GetEmployeeList(string fileName) { 
        
            var employees = new List<Employee>();

            foreach(string record in GetRecords(fileName)) {
            
                if(record.Substring(0, 7) != "::EXT::") {

                    employees.Add(CreatEmployee(record));
                }
                else {

                    AddInformation(employees.Last(), record);
                }
            }

            return employees;
        }
        /// <summary>
        /// find employee with highest salary
        /// </summary>
        private static Employee GetTopEmployee(string fileName) {

            var employees = GetEmployeeList(fileName);
            decimal topSalary = employees.Max(employee => employee.Salary);

            return employees.Find(employee => employee.Salary == topSalary);
        }

        private static void ShowResult(Employee employee) {

            Console.WriteLine(employee.Name + ", " + employee.Salary.ToString("C0"));
        }
    }
}