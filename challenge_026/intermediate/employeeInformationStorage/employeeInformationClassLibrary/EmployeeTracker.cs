using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Text.RegularExpressions;

namespace employeeInformationClassLibrary {
    public class EmployeeTracker {

        private IDataStore DataStore { get; set; }

        public EmployeeTracker(IDataStore dataStore) {

            DataStore = dataStore;
        }

        private bool IsValidName(string name) {

            name = name.Trim();

            if(Regex.IsMatch(name, @"\d") || name.Length == 0 || name.Length > 30) {

                return false;
            }

            return true;
        }

        public bool IsValidInput(string name, uint age, decimal hourlyWage) {

            if(!IsValidName(name) || age > 120 || hourlyWage < 0) {

                return false;
            }

            return true;
        }

        private string GetName() {

            Console.WriteLine("Please Enter the Name: (name should not contain digits and should be less than 30 characters)");
            
            return Console.ReadLine().Trim();
        }

        private string GetAge() {

            Console.WriteLine("Please Enter the Age: (age should be a positive number that is less than 120)");
            string age = Console.ReadLine().Trim();
            uint value = 0;

            return !uint.TryParse(age, out value) ? GetAge() : age;
        }

        private string GetHourlyWage() {

            Console.WriteLine("Please Enter the Hourly Wage: (wage should be a positive number)");
            string wage = Console.ReadLine().Trim();
            decimal value = 0;

            return !decimal.TryParse(wage, out value) ? GetHourlyWage() : wage;
        }

        private Employee CreateEmployeeData() {

            string name = GetName();
            uint age = uint.Parse(GetAge());
            decimal wage = decimal.Parse(GetHourlyWage());

            return IsValidInput(name, age, wage) ? new Employee(name, age, wage) : CreateEmployeeData();
        }

        private string GetMenuChoice() {

            Console.WriteLine("To Exit, Enter Q; To Add Employee, Enter A; To View Employees, Enter V.");
            string choice = Console.ReadLine().Trim();

            if(!Regex.IsMatch(choice, @"^[QAV]$")) {

                return GetMenuChoice();
            }

            return choice;
        }

        private void StoreEmployee() {

            var employeeData = CreateEmployeeData();

            if(DataStore.HasEmployee(employeeData)) {

                DataStore.Update(employeeData);
            }
            else { 
            
                DataStore.Add(employeeData);
            }
        }

        private void ShowEmployee() {

            var employees = DataStore.Employees.Select(employee => employee.ToString());

            Console.WriteLine(string.Join("\n", employees));
        }

        public void Run() { 
        
            while(true) {

                string choice = GetMenuChoice();

                if(choice == "Q") {

                    Console.WriteLine("Program Terminated.");
                    break;
                }

                if(choice == "V") {

                    ShowEmployee();
                    continue;
                }

                StoreEmployee();
            }
        }
    }
}